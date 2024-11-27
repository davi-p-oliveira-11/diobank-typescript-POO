import { DioAccount } from "./DioAccount";

export class PersonalAccount extends DioAccount {
  documentId: number;

  constructor(documentId: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.documentId = documentId;
  }
}
