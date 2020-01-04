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
  searchResultsTwo: SearchResultRow[];
  completeSearchResults: SearchResultRow[];
  error: boolean;

  advancedSearchClosedAnimationComplete = true;
  advancedSearchOn = false;

  showSpinner;
  secondColSpinner: boolean;

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
    if (this.translateOn) {
      this.secondColSpinner = true;
    }

    //this.getSearchResults();
    this.search();
  }

  getTranslate() {
    return this.searchService.translate;
  }

  // getWordIdsFromFirstCol() {
  //   let lengthOfSearchResult: number = this.searchResults.length;
  //   let wordIds: number[lengthOfSearchResult];

  //   this.searchResults.forEach(function(value) {});
  // }

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
      // Second Language
      this.searchService.getBothLangsResultsTwo().subscribe(
        (results: SearchResultRow[]) => {
          this.searchResultsTwo = results;
          this.secondColSpinner = false;
        },
        (error: boolean) => {
          this.error = error;
          this.secondColSpinner = false;
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
    if (this.translateOn) {
      this.secondColSpinner = true;
    }
    this.getSearchResults();
    if (this.translateOn) {
      console.log(this.prepareSearchResults());
      this.searchResults = this.prepareSearchResults();
      console.log(this.searchResults);
    }
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

  displaySpinner() {
    if (this.translateOn) {
      return this.showSpinner || this.secondColSpinner;
    } else {
      return this.showSpinner;
    }
  }

  prepareSearchResults() {
    // this.searchResults.forEach(function(value) {
    //   console.log("Word: " + value.word + " Term Id: " + value.termID);
    // });
    // this.searchResultsTwo.forEach(function(value) {
    //   console.log("Word: " + value.word + " Term Id: " + value.termID);
    // });

    let result = this.searchResults.map(a => {
      let obj2 = this.searchResultsTwo.find(b => a.termID === b.termID);
      if (obj2) {
        const newSearchResultsTwo: SearchResultRow = {
          termID: obj2.termID,
          word: a.word,
          description: a.description,
          pinyin: a.pinyin,
          translatedLangWord: obj2.word,
          translatedLangDescription: obj2.description
        };
        // newSearchResultsTwo.translatedLangWord = obj2.word;
        // newSearchResultsTwo.translatedLangDescription = obj2.description;
        Object.assign(a, newSearchResultsTwo);
      }
      return a;
    });

    console.log(result);

    // var arrayResult: SearchResultRow[this.searchResults.length];

    // result.forEach(function(value) {
    //   const updatedSearchResult: SearchResultRow = {
    //     termID: value.termID,
    //     word: value.word,
    //     description: value.description,
    //     pinyin: value.pinyin,
    //     translatedLangWord: value.word,
    //     translatedLangDescription: value.description
    //   };
    //   arrayResult.push(updatedSearchResult);
    // });

    return result;
  }
}
