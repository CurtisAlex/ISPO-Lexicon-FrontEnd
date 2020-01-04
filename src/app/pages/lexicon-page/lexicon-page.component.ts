import { Component, OnInit, DoCheck } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { SearchResultRow } from "src/app/models/searchResultRow";
import { SearchService } from "src/app/services/search-service/search.service";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-lexicon-page",
  templateUrl: "./lexicon-page.component.html",
  styleUrls: ["./lexicon-page.component.scss"]
})
export class LexiconPageComponent implements OnInit {
  constructor(
    public breakpointObserver: BreakpointObserver,
    private searchService: SearchService
  ) {}
  tabletSizeAndAbove = true;
  translateOn: boolean;
  isoStandardOnlyOn: boolean;

  searchInput: string = "";
  searchResults: SearchResultRow[];
  error: boolean;

  advancedSearchClosedAnimationComplete = true;
  advancedSearchOn = false;

  showSpinner: boolean;

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

    this.showSpinner = true;

    this.getSearchResults();
  }

  getSearchResults(): void {
    if (this.searchService.translate) {
      this.searchService.getBothLangsResults().subscribe(
        (results: SearchResultRow[]) => {
          this.searchResults = results;
          this.showSpinner = false;
        },
        (error: boolean) => {
          this.error = error;
          this.showSpinner = false;
        }
      );
    } else {
      this.searchService.getOneLangResults().subscribe(
        (results: SearchResultRow[]) => {
          this.searchResults = results;
          this.showSpinner = false;
        },
        (error: boolean) => {
          this.error = error;
          this.showSpinner = false;
        }
      );
    }
    console.log("Error value: " + this.error);
    console.log("Count: " + this.searchResults.length);
  }

  search(): void {
    this.searchService.searchInput = this.searchInput;
    this.showSpinner = true;
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
    // Make new query call with the updated value of ISO Standard Only toggle
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
