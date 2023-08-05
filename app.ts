import { BonusAccount } from "./class/BonusAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const newCompanyAccount = new CompanyAccount("CompanyOne", 12345);

newCompanyAccount.deposit(500);
newCompanyAccount.withdraw(200);
newCompanyAccount.getLoan(150);

const newPeopleAccount = new PeopleAccount(123, "Guilherme", 54321);

newPeopleAccount.deposit(500);
newPeopleAccount.withdraw(200);

const newBonusAccount = new BonusAccount("Luis", 23154);

newBonusAccount.deposit(500);
newBonusAccount.withdraw(200);
newBonusAccount.bonusDeposit(100);
