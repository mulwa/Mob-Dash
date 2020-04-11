export interface SettlementRes {
  response_code: number;
  response_message: string;
  result: Channel[];
}
export interface Channel {
  id: number;
  name: string;
  code: string;
  country: string;
  currency: string;
  status: string;
  created: string;
}
