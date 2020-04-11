export interface TransactionChargeType {
  response_code: number;
  response_message: string;
  transactionchargetype: chargeType[];
}
export interface chargeType {
  id: number;
  name: string;
}
