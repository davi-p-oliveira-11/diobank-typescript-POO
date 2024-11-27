export class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  // Método de validação
  public validateStatus(): boolean {
    if (!this.status) {
      console.log(`Conta inválida ${this.accountNumber}`);
      return false;
    }
    return true;
  }

  setName(name: string): void {
    this.name = name;
    console.log("Name sucessfully changed !");
  }

  getName(): string {
    return this.name;
  }

  //implementando o método deposit

  public deposit(amount: number): void {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`You deposited ${amount}, current balance: ${this.balance}`);
    } else {
      console.log("Invalid deposit");
    }
  }

  // implementando o método withdraw

  withdraw(amount: number): void {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `Withdrawal of ${amount} approved, current balance: ${this.balance}`
      );
    } else {
      console.log("Withdrawal not approved, check your balance");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}
