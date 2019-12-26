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
import { TempTutorial } from "src/app/models/tempTutorial";
import { ThrowStmt } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  // constructor(private http: HttpClient) {}
  constructor(private http: HttpClient) {}

  // Maybe do this a different way
  get firstLang() {
    return this.firstLangVal;
  }

  set firstLang(lang: Language) {
    this.firstLangVal = lang;
  }

  get secondLang() {
    return this.secondLangVal;
  }

  set secondLang(lang: Language) {
    this.secondLangVal = lang;
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
  // baseUrl =
  //   "http://ec2-44-229-252-18.us-west-2.compute.amazonaws.com/SamplePage.php";
  // tutorialResults: TempTutorial[];
  private apiRoot = "http://lexicon-dev-env.us-west-2.elasticbeanstalk.com/";
  // private params: HttpParams;

  private firstLangVal: Language = Language.English; // Default English
  private secondLangVal: Language = Language.French; // Default French

  private translateOn: boolean = true; // Default true
  private isoStandardOnlyOn: boolean = false; // Default false

  private criteria: SearchCriteria = SearchCriteria.BeginsWith; // Default BeginsWith
  private target: SearchTarget = SearchTarget.FLWord; // Default First Column Word

  private input: string = ""; // Default empty string

  // getAll(): Observable<TempTutorial[]> {
  //   return this.http.get("${this.baseUrl}/list").pipe(
  //     map(res => {
  //       this.tutorialResults = res["data"];
  //       return this.tutorialResults;
  //     }),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(error: HttpErrorResponse) {
  //   console.log(error);
  //   return throwError("Error! something went wrong");
  // }
  // createGetParams() {
  //   if (this.translateOn) {
  //     // if translate is on then create params for the lexicon search
  //     this.params = new HttpParams()
  //       .set("FLVal", this.firstLangVal.toString())
  //       .set("ISOStandard", this.isoStandardOnlyOn.toString())
  //       .set("Criteria", this.criteria.toString())
  //       .set("Target", this.target.toString())
  //       .set("Input", this.input);
  //   } else {
  //     // else translate is off, then create params for the directonary search
  //     this.params = new HttpParams()
  //       .set("FLVal", this.firstLangVal.toString())
  //       .set("SLVal", this.secondLangVal.toString())
  //       .set("ISOStandard", this.isoStandardOnlyOn.toString())
  //       .set("Criteria", this.criteria.toString())
  //       .set("Target", this.target.toString())
  //       .set("Input", this.input);
  //   }
  // }

  private convertLanguageToInt(lang: Language) {
    if (lang === Language.English) {
      return 0;
    } else if (lang === Language.French) {
      return 1;
    } else if (lang === Language.Spanish) {
      return 2;
    } else if (lang === Language.German) {
      return 3;
    } else if (lang === Language.Vietnamese) {
      return 4;
    } else if (lang === Language.Chinese) {
      return 5;
    } else if (lang === Language.Turkish) {
      return 6;
    } else if (lang === Language.Japanse) {
      return 7;
    }
  }
  // Quick and dirty
  private convertFirstLanguageToInt() {
    return this.convertLanguageToInt(this.firstLangVal);
  }
  // Quick and dirty
  private convertSecondLanguageToInt() {
    return this.convertLanguageToInt(this.secondLangVal);
  }
  // Quick and dirty
  private convertSearchCriteriaToInt() {
    if (this.criteria === SearchCriteria.BeginsWith) {
      return 0;
    } else if (this.criteria === SearchCriteria.EndsWith) {
      return 1;
    } else if (this.criteria === SearchCriteria.Contains) {
      return 2;
    } else if (this.criteria === SearchCriteria.Equals) {
      return 3;
    }
  }
  // Quick and dirty
  private convertSearchTargetToInt() {
    if (this.target === SearchTarget.FLWord) {
      return 0;
    } else if (this.target === SearchTarget.FLDefinition) {
      return 1;
    } else if (this.target === SearchTarget.SLWord) {
      return 2;
    } else if (this.target === SearchTarget.SLDefinition) {
      return 3;
    }
  }

  getBothLangsResults(): Observable<any> {
    const options = {
      params: new HttpParams()
        .set("lang", this.convertFirstLanguageToInt().toString())
        .set("lang_two", this.convertSecondLanguageToInt().toString()) // Dont know what param this will be
        .set("iso_term", this.isoStandardOnlyOn.toString())
        .set("Critcriteriaeria", this.convertSearchCriteriaToInt().toString())
        .set("target", this.convertSearchTargetToInt().toString())
        .set("sinput", this.input)
    };
    return this.http
      .get<SearchResultRow[]>(this.apiRoot, options)
      .pipe(
        retry(3),
        catchError(
          this.handleError<SearchResultRow[]>("getBothLangsResults", [])
        )
      );
  }

  getOneLangResults(): Observable<any> {
    const options = {
      params: new HttpParams()
        .set("lang", this.convertFirstLanguageToInt().toString())
        .set("iso_term", this.isoStandardOnlyOn.toString())
        .set("criteria", this.convertSearchCriteriaToInt().toString())
        .set("target", this.convertSearchTargetToInt().toString())
        .set("sinput", this.input)
    };
    return this.http
      .get<SearchResultRow[]>(this.apiRoot, options)
      .pipe(
        retry(3),
        catchError(this.handleError<SearchResultRow[]>("getOneLangResults", []))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log("${operation} failed: ${error.message}");
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

  // getSearchResults() {
  //   if (this.translateOn) {
  //     // if translate is on then create params for the lexicon search
  //     const params = new HttpParams()
  //       .set("lang", this.convertFirstLanguageToInt().toString())
  //       .set("lang_two", this.convertSecondLanguageToInt().toString()) // Dont know what param this will be
  //       .set("iso_term", this.isoStandardOnlyOn.toString())
  //       .set("Critcriteriaeria", this.convertSearchCriteriaToInt().toString())
  //       .set("target", this.convertSearchTargetToInt().toString())
  //       .set("sinput", this.input);
  //     return this.http.get(this.apiRoot.concat("lexicon/"), { params });
  //   } else {
  //     // else translate is off, then create params for the directonary search
  //     const params = new HttpParams()
  //       .set("lang", this.convertFirstLanguageToInt().toString())
  //       .set("iso_term", this.isoStandardOnlyOn.toString())
  //       .set("criteria", this.convertSearchCriteriaToInt().toString())
  //       .set("target", this.convertSearchTargetToInt().toString())
  //       .set("sinput", this.input);
  //     return this.http.get(this.apiRoot.concat("directonary/"), { params });
  //   }
  // }

  // Setup for the future http.get call that will return an observable
  // For now it is just returning mock data
  getResults(): Observable<SearchResultRow[]> {
    return of(ROWS);
  }

  dummySearch() {
    // If translate on use the following search values in the backend call
    if (this.translateOn) {
      console.log("Search Text Input: " + this.input);
      console.log("First Langauge Selected: " + this.firstLangVal);
      console.log("Second Langauge Selected: " + this.secondLangVal);
      console.log("Translate: " + this.translateOn);
      console.log("ISO Standard Only: " + this.isoStandardOnlyOn);
      console.log("Criteria Selected: " + this.criteria);
      console.log("Target Selected: " + this.target);
    } else {
      // If translate off then use the following search values in the backend call
      console.log("Search Text Input: " + this.input);
      console.log("First Langauge Selected: " + this.firstLangVal);
      console.log("Translate: " + this.translateOn);
      console.log("ISO Standard Only: " + this.isoStandardOnlyOn);
      console.log("Criteria Selected: " + this.criteria);
      if (
        this.target === SearchTarget.SLDefinition ||
        this.target === SearchTarget.SLWord
      ) {
        console.log("Target Selected: " + SearchTarget.FLWord); // If the target is the second lang column, use the default value
      } else {
        console.log("Target Selected: " + this.target);
      }
    }
  }

  // Remove second language options from drop down if translate is off
  getSearchTargetValues() {
    if (this.translate) {
      return [
        SearchTarget.FLWord,
        SearchTarget.FLDefinition,
        SearchTarget.SLWord,
        SearchTarget.SLDefinition
      ];
    } else {
      return [SearchTarget.FLWord, SearchTarget.FLDefinition];
    }
  }
}
