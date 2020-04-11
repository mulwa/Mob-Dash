export interface OperatorRes {
  response_code: number;
  response_message: string;
  psv_operators: Operator[];
}
export interface Operator {
  id: string;
  organization_name: string;
  trading_name: string;
  phone_number: string;
  email_address: string;
  postal_address: string;
  postal_code: string;
  web_address: string;
  booking_api_url: string;
  parceling_api_url: string;
  city: string;
  country: string;
  hq_location: string;
  organization_type: string;
  registration_number: string;
  owners_details: any;
  tax_number: string;
  reg_data: string;
  update_date: string;
  status: string;
}
