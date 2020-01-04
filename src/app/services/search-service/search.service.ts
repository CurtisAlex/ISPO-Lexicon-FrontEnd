import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { SearchResultRow } from "src/app/models/searchResultRow";
import { ROWS } from "src/app/mock-language-database";
import { of, Observable, throwError } from "rxjs";
import { map, catchError, retry } from "rxjs/operators";
import { Language, SearchCriteria, SearchTarget } from "src/app/models/enums";
@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}

  get firstLang() {
    return this.firstLangVal;
  }

  set firstLang(lang: Language) {
    this.firstLangVal = lang;
  }

  get firstLangId() {
    return this.firstLangIdVal;
  }

  set firstLangId(langId: number) {
    this.firstLangIdVal = langId;
  }

  get secondLang() {
    return this.secondLangVal;
  }

  set secondLang(lang: Language) {
    this.secondLangVal = lang;
  }

  get secondLangId() {
    return this.secondLangIdVal;
  }

  set secondLangId(langId: number) {
    this.secondLangIdVal = langId;
  }

  get translate() {
    return this.translateOn;
  }

  set translate(translate: boolean) {
    this.translateOn = translate;
  }

  get isoStandardOnly() {
    return this.isoStandardOnlyOn;
  }

  set isoStandardOnly(isoStandardOnly: boolean) {
    this.isoStandardOnlyOn = isoStandardOnly;
  }

  get searchCriteria() {
    return this.criteria;
  }

  set searchCriteria(searchCriteria: SearchCriteria) {
    this.criteria = searchCriteria;
  }

  get searchTarget() {
    return this.target;
  }

  set searchTarget(searchTarget: SearchTarget) {
    this.target = searchTarget;
  }

  get searchInput() {
    return this.input;
  }

  set searchInput(searchInput: string) {
    this.input = searchInput;
  }

  private apiRoot = "http://lexicon-dev-env.us-west-2.elasticbeanstalk.com/";

  private firstLangVal: Language = Language.English; // Default English
  private firstLangIdVal: number = 1; // Default English
  private secondLangVal: Language = Language.German; // Default German
  private secondLangIdVal: number = 2; // Default German

  private translateOn: boolean = true; // Default true
  private isoStandardOnlyOn: boolean = false; // Default false

  private criteria: SearchCriteria = SearchCriteria.Contains; // Default BeginsWith
  private target: SearchTarget = SearchTarget.BothFLWordDef; // Default First Column Word

  private input: string = ""; // Default empty string

  // Quick and dirty
  private convertSearchCriteriaForDB() {
    if (this.criteria === SearchCriteria.StartsWith) {
      return "startswith";
    }
    //  else if (this.criteria === SearchCriteria.EndsWith) {
    //   return 1;
    // }
    else if (this.criteria === SearchCriteria.Contains) {
      return "";
    } else if (this.criteria === SearchCriteria.Equals) {
      return "exact";
    }
  }
  // Quick and dirty
  private convertSearchTargetForDB() {
    if (this.target === SearchTarget.FLWord) {
      return "word_only";
    } else if (this.target === SearchTarget.FLDefinition) {
      return "description_only";
    } else if (this.target === SearchTarget.BothFLWordDef) {
      return "";
    } else if (this.target === SearchTarget.SLWord) {
      return ""; // add in later
    } else if (this.target === SearchTarget.SLDefinition) {
      return ""; // add in later
    }
  }

  getBothLangsResults(): Observable<any> {
    // const options = {
    //   params: new HttpParams()
    //     .set("lang", this.firstLangId.toString())
    //     .set("lang_two", this.secondLangIdVal.toString()) // Dont know what param this will be
    //     .set("iso_term", this.isoStandardOnlyOn.toString())
    //     .set("Critcriteriaeria", this.convertSearchCriteriaToInt().toString())
    //     .set("target", this.convertSearchTargetToInt().toString())
    //     .set("sinput", this.input)
    // };
    const options = {
      params: new HttpParams()
        .set("search", this.input)
        .set("ispo", this.isoStandardOnlyOn.toString())
        .set("lang", this.firstLangId.toString())
        .set("criteria", this.convertSearchCriteriaForDB())
        .set("target", this.convertSearchTargetForDB())
    };
    return this.http
      .get<SearchResultRow[]>(this.apiRoot.concat("lexicon/"), options)
      .pipe(
        retry(3),
        catchError(
          this.handleError<SearchResultRow[]>("getBothLangsResults", [])
        )
      );
  }

  getOneLangResults(): Observable<any> {
    // const options = {
    //   params: new HttpParams()
    //     .set("lang", this.convertFirstLanguageToInt().toString())
    //     .set("iso_term", this.isoStandardOnlyOn.toString())
    //     .set("criteria", this.convertSearchCriteriaToInt().toString())
    //     .set("target", this.convertSearchTargetToInt().toString())
    //     .set("sinput", this.input)
    // };
    const options = {
      params: new HttpParams()
        .set("search", this.input)
        .set("ispo", this.isoStandardOnlyOn.toString())
        .set("lang", this.firstLangId.toString())
        .set("criteria", this.convertSearchCriteriaForDB())
        .set("target", this.convertSearchTargetForDB())
    };
    return this.http
      .get<SearchResultRow[]>(this.apiRoot.concat("dictionary/"), options)
      .pipe(
        retry(3),
        catchError(this.handleError<SearchResultRow[]>("getOneLangResults", []))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any) => {
      console.error(error);
      console.log(operation + " failed: " + error.message); // TODO: this doesnt actually print correctly, fixed. but needs to be tested
      //return of(result as T);
      if (error.status.toString().charAt(0) !== "2") {
        return of(true);
      } else {
        return of(false);
      }
    };
  }

  // Setup for the future http.get call that will return an observable
  // For now it is just returning mock data
  getResults(): Observable<SearchResultRow[]> {
    return of(ROWS);
  }

  // Remove second language options from drop down if translate is off
  getSearchTargetValues() {
    if (this.translate) {
      return [
        SearchTarget.FLWord,
        SearchTarget.FLDefinition,
        SearchTarget.BothFLWordDef,
        SearchTarget.SLWord,
        SearchTarget.SLDefinition
      ];
    } else {
      return [
        SearchTarget.FLWord,
        SearchTarget.FLDefinition,
        SearchTarget.BothFLWordDef
      ];
    }
  }
}
