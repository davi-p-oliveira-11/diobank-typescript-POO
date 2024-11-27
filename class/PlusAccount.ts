import { DioAccount } from "./DioAccount";

// implementando a classe de conta bonus
export class PlusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // conceito de polimorfismo

  deposit(amount: number): void {
    const bonus = 10;
    console.log(`Bonus of ${bonus} added to your deposit`);
    super.deposit(amount + bonus);
  }
}
