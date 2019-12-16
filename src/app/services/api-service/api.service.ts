import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiRoot = "ec2-52-26-88-246.us-west-2.compute.amazonaws.com"; //link to django instance (make it the link to the instance on aws)

  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http.get(this.apiRoot.concat("lexicon"));
  }
}
