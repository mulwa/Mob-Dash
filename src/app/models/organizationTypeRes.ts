export interface OrganizationTypeRes {
  response_code: number;
  response_message: string;
  organizationtypes: OrganizationType[];
}
export interface OrganizationType {
  id: number;
  name: string;
}
