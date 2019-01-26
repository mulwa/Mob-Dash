export interface AuthResponse {
    response_code: number,
    response_message: string,
    company_name: string;
    company_apis_url:any;
    first_name: string,
    last_name: string,
    middle_name: string,
    id_number: string,
    phone_number: string,
    email_address: string,
    postal_address: string,
    postal_code: string,
    parceling_api_url: string,
    receipt_company_address: string,
    receipt_company_city: string,
    receipt_company_country: string,
    receipt_company_name: string,    
    registration_date: string,
    city: string,
    country: string,
    username: string,    
    api_key: string

}