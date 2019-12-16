import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private apiRoot = "http://lexicon-dev-env.us-west-2.elasticbeanstalk.com/"; //link to django instance (make it the link to the instance on aws)

  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http.get(this.apiRoot.concat("lexicon/"));
  }
}
