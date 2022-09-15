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