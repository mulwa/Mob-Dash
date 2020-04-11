import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import {
  developer_api_key,
  developer_username,
  coreAPIUrl
} from "../models/constants";
import { OperatorRes, Operator } from "../models/operatorResponse";
import { operatorStatus } from "../models/operatorStatus";
import {
  OrganizationTypeRes,
  OrganizationType
} from "../models/organizationTypeRes";
import { status } from "../models/vehicleStatus";
import { SettlementRes } from "../models/settlementChannelRes";

@Injectable()
export class OperatorService {
  public username: string;
  public api_key: string;
  public base_url: string;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.username = this.authService.getUsername();
    this.api_key = this.authService.getUserApiKey();
    this.base_url =
      "http://localhost:9090/http://server1.mobiticket.co.ke/api/v1/operators";
  }
  // returns all operators
  getAllOperators() {
    let params = {
      developer_username,
      developer_api_key,
      action: "getalloperators"
    };
    return this.http.put<OperatorRes>(this.base_url, params);
  }
  // returns operator status
  getOperatorStatus() {
    let params = {
      developer_username,
      developer_api_key,
      action: "operatorstatus"
    };
    return this.http.put<operatorStatus>(this.base_url, params);
  }

  // returns all operator types
  getOperatorTypes() {
    let params = {
      developer_username,
      developer_api_key,
      action: "organizationtypes"
    };
    return this.http.put<OrganizationTypeRes>(this.base_url, params);
  }

  cloneOrganizationOptions(options: OrganizationType[]): Array<IOption> {
    return options.map(option => ({ value: option.name, label: option.name }));
  }
  cloneOrganizationStatusOptions(options: status[]): Array<IOption> {
    return options.map(option => ({ value: option.name, label: option.name }));
  }
  cloneAllOperatorOptions(options: Operator[]): Array<IOption> {
    return options.map(option => ({
      value: option.organization_name,
      label: option.organization_name
    }));
  }
}
export interface IOption {
  value: string;
  label: string;
}
