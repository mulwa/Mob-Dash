import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";
import { VehicleStatusRes } from "../models/vehicleStatus";
import { VehicleChargeBand } from "../models/vehicleChargeBand";
import {
  developer_api_key,
  developer_username,
  coreAPIUrl
} from "../models/constants";
import { from } from "rxjs/observable/from";
import { SettlementRes, Channel } from "../models/settlementChannelRes";
import { VehicleRegstrationType } from "../models/vehicleRegistrationType";
import { TransactionChargeType } from "../models/transactionChargeType";

@Injectable()
export class VehiclesService {
  public username: string;
  public api_key: string;
  public base_url =
    "http://localhost:9090/http://apis.mobiticket.co.ke/v3/core/vehicles";
  private settlementChannelUrl =
    "http://localhost:9090/http://server1.mobiticket.co.ke/api/v1/users";

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  getVehicleStatus() {
    let params = {
      developer_username,
      developer_api_key,
      action: "vehiclestatus"
    };
    return this.http.put<VehicleStatusRes>(this.base_url, params);
  }

  getVehicleChargeBand() {
    let params = {
      developer_username,
      developer_api_key,
      action: "transactionchargeband"
    };
    return this.http.put<VehicleChargeBand>(this.base_url, params);
  }
  getVehicleType() {
    let params = {
      developer_username,
      developer_api_key,
      action: "registrationtype"
    };
    return this.http.put<VehicleRegstrationType>(this.base_url, params);
  }
  getVehicleTransactionType() {
    let params = {
      developer_username,
      developer_api_key,
      action: "transactionchargetype"
    };
    return this.http.put<TransactionChargeType>(this.base_url, params);
  }
  // returns settlement channel
  getSettlementChannel() {
    let params = {
      developer_username,
      developer_api_key,
      action: "getallsettlementchannels"
    };
    return this.http.put<SettlementRes>(this.settlementChannelUrl, params);
  }

  cloneSettlementOptions(options: Channel[]): Array<IOption> {
    return options.map(option => ({
      value: option.name + " " + [option.code],
      label: option.name
    }));
  }
}
export interface IOption {
  value: string;
  label: string;
}
