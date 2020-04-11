export interface VehicleStatusRes {
  response_code: number;
  response_message: string;
  vehiclestatus: status[];
}
export interface status {
  id: number;
  name: string;
}
