function Calculator() {
        this.display = document.querySelector('.display');

        this.start = () => {
            this.clickButton();
            this.enterPress();
        };

        this.enterPress = () => {
            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) {
                    this.result();
                }
            });
        };

        this.clearDisplay = () => this.display.value = '';

        this.backspace = () => this.display.value = this.display.value.slice(0, -1);

        this.result = () => {
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
        };

        this.clickButton = () => {
            document.addEventListener('click', (e) => {
                e.preventDefault();
                const el = e.target;
                if(el.classList.contains('num')) this.bntForDisplay(el.innerText);
                if (el.classList.contains('clear')) this.clearDisplay();
                if (el.classList.contains('del')) this.backspace(el);
                if (el.classList.contains('equal')) this.result(el);
            }); // I can use arrow function
        };

        this.bntForDisplay = (value) => { 
            this.display.value += value;
            this.display.focus();
        }


    }

const calculator = new Calculator();
calculator.start();