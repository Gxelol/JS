function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButton();
            this.enterPress();
        },

        enterPress() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.result();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        backspace() {
            this.display.value = this.display.value.slice(0, -1);
        }, 

        result() {
            let expression = this.display.value;

            try {
                expression = eval(expression);

                if (!expression) {
                    alert('Invalid');
                    this.clearDisplay();
                    return;
                }

                this.display.value = String(expression);

            } catch(e) {
                alert('Invalid');
                this.clearDisplay();
                return;
            }
        },

        clickButton() {
            document.addEventListener('click', function(e) {
                e.preventDefault();
                const el = e.target;

                if(el.classList.contains('num')) {
                    this.bntForDisplay(el.innerText);
                }

                if (el.classList.contains('clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('del')) {
                    this.backspace();
                }

                if (el.classList.contains('equal')) {
                    this.result();
                }

            }.bind(this)); // I can use arrow function
        },

        bntForDisplay(value) {
            this.display.value += value;
        }


    }
}

const calculator = createCalculator();
calculator.start();