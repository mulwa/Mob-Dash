export interface VehicleChargeBand {
  response_code: number;
  response_message: string;
  transactionchargeband: Charge[];
}
export interface Charge {
  id: number;
  name: string;
}
