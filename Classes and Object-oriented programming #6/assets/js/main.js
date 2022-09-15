class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const isvalid = this.isValid();
        const passwordValid = this.passwordIsValid();

        if (isvalid && passwordValid) {
            alert('Form sent.');
            this.form.submit();
        }
    }


    isValid() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {

            const label = field.previousElementSibling.innerText;

            if (!field.value) {
                this.createError(field, `${label} field cannot be empty`);
                valid = false;
            }

            if (field.classList.contains('cpf')) {
                if (!this.validateCpf(field)) valid = false;
            }

            if (field.classList.contains('username')) {
                if (!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    passwordIsValid() {
        let valid = true;

        const password = this.form.querySelector('.password');
        const confirmPassword = this.form.querySelector('.confirm-password');

        if (password.value !== confirmPassword.value) {
            valid = false;
            this.createError(password, 'The passwords need to be equal');
            this.createError(confirmPassword, 'The passwords need to be equal');
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Password must have between 6 and 12 characters')
        }

        return valid;
    }

    validateCpf(field) {
        const cpf = new ValidateCPF(field.value);

        if (!cpf.validate()) {
            this.createError(field, 'Invalid CPF')
            return false;
        }

        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true;

        if (user.length > 12 || user.length < 3) {
            this.createError(field, 'Invalid User');
            valid =  false
        }

        if (!user.match(/^[a-zA-Z0-9+$]/g)) {
            this.createError(field, 'User can only contain letters and/or numbers');
            valid =  false
        }
        
        return valid;
    }

    createError(field, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new ValidateForm();