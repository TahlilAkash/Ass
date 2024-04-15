class BankAccount{
    constructor(accNumber,accOwner,accBalance){
        this.accountNumber=accNumber;
        this.ownerName=accOwner;
        this.balance=accBalance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    }
    withdraw(amount){
        if(amount>this.balance){
            console.log(`Insufficient Balance`);
        }
        else{
            this.balance-=amount;
            console.log(`widthdrawn $${amount} from account ${this.accountNumber}`);
        }
    }
    getBalance(){
        return this.balance;
    }
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`OwnerName:${this.ownerName}`)
        console.log(`Balance: $${this.balance}`);
    }
    
}
// Creating two instances of the BankAccount class
const accountOne = new BankAccount(1001, "Tahlil", 400);
const accountTwo = new BankAccount(1002, "Akash", 500);

// Demonstrating functionality
accountOne.deposit(200);
accountOne.withdraw(300);
accountOne.displayAccountInfo();

accountTwo.deposit(1000);
accountTwo.withdraw(700);
accountTwo.displayAccountInfo();
