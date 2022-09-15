// 705.484.450-52

/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = total

11 - (total % 11) = (First Digit)
if digit > 9, digit = 0
 
7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = total

11 - (total % 11) = (Second Digit)
if digit > 9, digit = 0

concatenate and compare
*/

class ValidateCPF {
    constructor(sentCpf) {
        Object.defineProperty(this, 'cleanCpf', {
            get: function() {
                return sentCpf.replace(/\D+/g, '');
            }
        });
    }

    generateNewCpf() {
        const partialCpf = this.cleanCpf.slice(0, -2);
        const digit1 = ValidateCPF.createDigit(partialCpf);
        const digit2 = ValidateCPF.createDigit(partialCpf + digit1);
        this.newCpf = partialCpf + digit1 + digit2;
    }

    validate() {
        if (!this.cleanCpf) return false;
        if (this.cleanCpf.length !== 11) return false;
        if (this.isSequence()) return false;
        this.generateNewCpf();

        return this.newCpf === this.cleanCpf;
    };
    
    static createDigit(partialCpf) {
        const arrayCpf = Array.from(partialCpf);

        let regressive = arrayCpf.length + 1;
        const total = arrayCpf.reduce((ac, val) => {
            ac += (regressive * Number(val));
            regressive--;
            return ac;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    };

    isSequence() {
        const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
        return sequence === this.cleanCpf;
    };
};

const cpf = new ValidateCPF('705.484.450-52');

if (cpf.validate()) {
    console.log('Valid');
} else {
    console.log('Invalid');
};