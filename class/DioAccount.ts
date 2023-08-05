export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance;
  };

  deposit = (value: number, operation: string = "Depósito"): void => {
    if (this.validateStatus()) {
      if (value <= 0) {
        throw new Error("Valor inválido!");
      }
      this.balance += value;
      return console.log(
        `${operation} concluido com sucesso! Saldo de ${this.balance}`
      );
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus()) {
      if (value > this.balance) {
        throw new Error("Quantia indisponível!");
      }
      this.balance -= value;
      return console.log(
        `Saque concluido com sucesso! Saldo de ${this.balance}`
      );
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta inválida!");
  };
}
