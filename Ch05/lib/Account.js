class Account {

    constructor(bank, id, name, balance){
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    deposit(money){
        this.balance += money;
    }

    withdraw(money){
        this.balance -= money;
    }

    show(){
        document.write('<p>');
        document.write('은행명 : ' + this.bank  + '<br/>');
        document.write('은행명 : ' + this.id  + '<br/>');
        document.write('은행명 : ' + this.name  + '<br/>');
        document.write('은행명 : ' + this.balance  + '<br/>');
        document.write('<p>');
    }

}