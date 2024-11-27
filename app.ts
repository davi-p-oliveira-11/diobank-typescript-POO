import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";
import { PlusAccount } from "./class/PlusAccount";

// instanciando as classes

const personalAccount = new DioAccount("John Connor", 2000);
const companyAccount = new CompanyAccount("Software Inc", 30000);
const plusAccount = new PlusAccount("Special Client", 1500);

// Testando a DioAccount

personalAccount.deposit(200);
personalAccount.withdraw(50);

/*
  Output:  
  You deposited 200, current balance: 200
  Withdrawal of 50 approved, current balance: 150
*/

// Testando a CompanyAccount
companyAccount.deposit(1000);
companyAccount.getLoan(500);
companyAccount.withdraw(300);

/* 
  Output:
  You deposited 1000, current balance: 1000
  You deposited 500, current balance: 1500
  Loan of 500 approved.
  Withdrawal of 300 approved, current balance: 1200
*/

// Testando a SpecialAccount
plusAccount.deposit(100);
plusAccount.withdraw(50);

/* 
  Output:
  Bonus of 10 added to your deposit
  You deposited 110, current balance: 110
  Withdrawal of 50 approved, current balance: 60
*/
