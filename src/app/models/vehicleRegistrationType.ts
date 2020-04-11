export interface VehicleRegstrationType {
  response_code: number;
  response_message: string;
  registrationtype: Type[];
}
export interface Type {
  id: number;
  name: string;
}
