export interface OrganizationAccount {
    response_code:number,
    response_message:string,
    currency_code:string,
    reg_numbers:RegNumber[],
    dates:AccountDate[],
    settlement_summary:Settlement[]
}
export interface RegNumber {
    name:string,
    tickets:string,
    total_cash_in:string,
    total_cash_out:string
}
export interface AccountDate {
    name:string,
    tickets:string,
    total_cash_txns:string,
    total_cashless_txns:string,
    amount:number
}
export interface Settlement {
    settlement_id: string,
    identifier: string,
    name: string,
    company: string,
    reference_number: string,
    date_generated: string,
    invoice_date: string,
    amount_received: string,
    deficit_amount: string,
    amount_banked: string,
    amount_due: string,
    payment_method: string,
    payment_id: string,
    status: string,
    updated_date: string
}