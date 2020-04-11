import { status } from "./vehicleStatus";
export interface operatorStatus {
  response_code: number;
  response_message: string;
  operatorstatus: status[];
}
