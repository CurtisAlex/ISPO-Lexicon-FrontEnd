import { Injectable } from "@angular/core";
import { SearchResultRow } from "src/app/models/searchResultRow";
import { ROWS } from "src/app/mock-language-database";
import { of, Observable } from "rxjs";
import { Language, SearchCriteria, SearchTarget } from "src/app/models/enums";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor() {}

  private firstLangVal: Language = Language.English; // Default English
  private secondLangVal: Language = Language.French; // Default French

  private translateOn: boolean = true; // Default true
  private isoStandardOnlyOn: boolean = false; // Default false

  private criteria: SearchCriteria = SearchCriteria.BeginsWith; // Default BeginsWith
  private target: SearchTarget = SearchTarget.FLWord; // Default First Column Word

  private input: string = ""; // Default empty string

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

  get searchInput() {
    return this.input;
  }

  set searchInput(searchInput: string) {
    this.input = searchInput;
  }
}
