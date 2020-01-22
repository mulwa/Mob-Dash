import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class VehiclesService {
  public username: string;
  public api_key: string;
  public base_url: string;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.username = this.authService.getUsername();
    this.api_key = this.authService.getUserApiKey();
    this.base_url = this.authService.getCompanyUrl();
  }
}
