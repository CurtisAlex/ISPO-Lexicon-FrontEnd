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

  private knownLangVal: Language;
  private unknownLangVal: Language;

  private translateOn: boolean = true;

  private isoStandardOnlyOn: boolean;

  private criteria: SearchCriteria;
  private target: SearchTarget;

  // Setup for the future http.get call that will return an observable
  // For now it is just returning mock data
  getResults(): Observable<SearchResultRow[]> {
    return of(ROWS);
  }

  // Maybe do this a different way
  get knownLang() {
    return this.knownLangVal;
  }

  set knownLang(lang: Language) {
    this.knownLangVal = lang;
  }

  get unknownLang() {
    return this.unknownLangVal;
  }

  set unknownLang(lang: Language) {
    this.unknownLangVal = lang;
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
}
