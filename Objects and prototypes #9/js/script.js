function Account(agency, account, balance) { //superclass
    this.agency = agency;
    this.account = account;
    this.balance = balance;
}

Account.prototype.withdraw = function(value) {
    if(this.balance < value) {
        console.log(`Insufficient balance. Your current balance is: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.seeBalance();
}

Account.prototype.deposit = function(value) {
    this.balance += value;
    this.seeBalance();
}

Account.prototype.seeBalance = function() {
    console.log(`Ag/cc: ${this.agency}/${this.account} |  Balance: ${this.balance.toFixed(2)}$`);
};

function CurrentAccount(agency, account, balance, limit) {
    Account.call(this, agency, account, balance)
    this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype)
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function(value) {
    if((this.balance + this.limit) < value) {
        console.log(`Insufficient balance. Your current balance is: ${this.balance}`);
        return;
    }

    this.balance -= value;
    this.seeBalance();
}

function SavingAccount(agency, account, balance) {
    Account.call(this, agency, account, balance)
}

SavingAccount.prototype = Object.create(Account.prototype)
SavingAccount.prototype.constructor = SavingAccount;