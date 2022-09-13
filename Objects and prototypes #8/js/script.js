// 705.484.450-52 070.987.720-03

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

function ValidateCPF(sentCPF) {
    Object.defineProperty(this, 'cleanCPF', {
        get: function() {
            return sentCPF.replace(/\D+/g, '');
        }
    })
}

ValidateCPF.prototype.validate = function() {
    if (typeof this.cleanCPF === 'undefined') return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequence()) return false;
    
    const partialCPF = this.cleanCPF.slice(0, -2);
    const digit1 = this.createDigit(partialCPF);
    const digit2 = this.createDigit(partialCPF + digit1);

    const newCPF = partialCPF + digit1 + digit2;
    return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.createDigit = function(partialCPF) {
    const arrayCPF = Array.from(partialCPF);
    
    let regressive = arrayCPF.length + 1;
    const total = arrayCPF.reduce((ac, val) => {
        ac += (regressive * Number(val));    
        regressive--;
        return ac;
    }, 0);
    
    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);
};

ValidateCPF.prototype.isSequence = function() {
    const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
    return sequence === this.cleanCPF;
};

const cpf = new ValidateCPF('705.484.450-52');

if (cpf.validate()) {
    console.log('Valid');
} else {
    console.log('Invalid');
}