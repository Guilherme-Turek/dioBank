import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  bonusDeposit = (value: number): void => {
    if (value <= 0) {
      throw new Error("Valor inválida!");
    }
    const bonusAmount = 10;
    const totalDeposit = value + bonusAmount;

    this.deposit(totalDeposit);
  };
}
