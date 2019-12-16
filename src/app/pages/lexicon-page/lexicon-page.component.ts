import { Component, OnInit, DoCheck } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { SearchResultRow } from "src/app/models/searchResultRow";
import { SearchService } from "src/app/services/search-service/search.service";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { MatInput } from "@angular/material/input";
import { templateJitUrl } from "@angular/compiler";
import { TempTutorial } from "src/app/models/tempTutorial";

@Component({
  selector: "app-lexicon-page",
  templateUrl: "./lexicon-page.component.html",
  styleUrls: ["./lexicon-page.component.scss"]
})
export class LexiconPageComponent implements OnInit {
  // tempTutorial: TempTutorial[];
  // error = "";
  // success = "";

  constructor(
    public breakpointObserver: BreakpointObserver,
    private searchService: SearchService // private api: ApiService
  ) {}
  tabletSizeAndAbove = true;
  translateOn: boolean;
  isoStandardOnlyOn: boolean;

  searchInput: string = "";
  searchResults: SearchResultRow[];
  tempDatabaseResults: any[];
  error: any;

  advancedSearchClosedAnimationComplete = true;
  advancedSearchOn = false;

  ngOnInit() {
    // Changes the view if the size is tablet and above
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tabletSizeAndAbove = false;
        } else {
          this.tabletSizeAndAbove = true;
          // Translate toggle not in advanced search when in computer view
          this.translateOn = this.searchService.translate;
          this.isoStandardOnlyOn = this.searchService.isoStandardOnly;
        }
      });

    this.getTable();
    // this.getTempTutorial();
    this.getSearchResults();
  }

  getSearchResults(): void {
    this.searchService.getSearchResults().subscribe(
      (results: any[]) => (this.tempDatabaseResults = results),
      (error: any) => (this.error = error)
    );
  }

  // getTempTutorial(): void {
  //   this.searchService.getAll().subscribe(
  //     (res: TempTutorial[]) => {
  //       this.tempTutorial = res;
  //     },
  //     err => {
  //       this.error = err;
  //     }
  //   );
  // }

  search(): void {
    this.searchService.searchInput = this.searchInput;
    console.log("***Search Button Clicked***");
    this.searchService.dummySearch();
    console.log("***************************");
    // this.tempDatabaseResults.forEach(element => {
    //   console.log("DatabaseResult: " + element.lang_name.toString());
    //   console.log("DatabaseResult: " + element.lang_code.toString());
    // });
    // this.searchService.getSearchResults();
    this.getSearchResults();
  }

  getTable(): void {
    this.searchService
      .getResults()
      .subscribe(searchResults => (this.searchResults = searchResults));
  }

  toggleTranslate(matSlideToggleChange: MatSlideToggleChange) {
    this.translateOn = matSlideToggleChange.checked.valueOf();
    this.searchService.translate = this.translateOn;
  }

  toggleIsoStandardOnly(matSlideToggleChange: MatSlideToggleChange) {
    this.isoStandardOnlyOn = matSlideToggleChange.checked.valueOf();
    this.searchService.isoStandardOnly = this.isoStandardOnlyOn;
    this.searchService.dummySearch(); // Make new query call with the updated value of ISO Standard Only toggle
  }

  toggleAdvancedSearch() {
    this.advancedSearchOn = !this.advancedSearchOn;
    if (this.advancedSearchOn) {
      this.advancedSearchClosedAnimationComplete = false;
    }
  }

  advancedSearchClosed(event: boolean) {
    this.advancedSearchClosedAnimationComplete = event;
  }

  advancedSearchOpen() {
    if (this.advancedSearchOn || !this.advancedSearchClosedAnimationComplete) {
      return true;
    } else {
      return false;
    }
  }
}
