import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { SearchService } from "src/app/services/search-service/search.service";
import { LexiconSearchResultRow } from "src/app/models/lexiconSearchResultRow";

@Component({
  selector: "app-lexicon-search-result-row",
  templateUrl: "./lexicon-search-result-row.component.html",
  styleUrls: ["./lexicon-search-result-row.component.scss"]
})
export class LexiconSearchResultRowComponent implements OnInit, DoCheck {
  constructor(
    public breakpointObserver: BreakpointObserver,
    private searchService: SearchService
  ) {}

  @Input() row: LexiconSearchResultRow;
  @Input() searchResultNumber: number;
  // Most likely going to remove
  @Input() totalResultsNumber: number;

  firstResult = false;
  lastResult = false;
  oddResult = false;
  tabletSizeAndAbove = true;

  translateOn: boolean;
  isoStandardOnlyOn: boolean;

  panelOpenState = false;

  ngOnInit() {
    console.log(this.row);
    // If the first row, then round the top corners
    if (this.searchResultNumber === 0) {
      this.firstResult = true;
    }
    // If the last row, then round the bottom corners
    if (this.searchResultNumber === this.totalResultsNumber - 1) {
      this.lastResult = true;
    }
    if (this.searchResultNumber % 2 === 1) {
      this.oddResult = true;
    }

    // Changes the view if the size is tablet and above
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tabletSizeAndAbove = false;
          this.panelOpenState = false;
        } else {
          this.tabletSizeAndAbove = true;
        }
      });

    this.getTranslateValue();

    console.log(this.row);
  }

  ngDoCheck() {
    this.getTranslateValue();
  }

  getTranslateValue() {
    this.translateOn = this.searchService.translate;
  }

  isIsoTerm() {
    if (
      this.row.words[0].termStd !== undefined &&
      this.row.words[0].termStd === "ISO"
    ) {
      return true;
    } else {
      return false;
    }
  }

  secondLangWordPresent() {
    if (this.row.words[1] === undefined) {
      return "N/A";
    } else {
      return this.row.words[1].word;
    }
  }

  secondLangDescriptionPresent() {
    if (this.row.words[1] === undefined) {
      return "N/A";
    } else {
      return this.row.words[1].description;
    }
  }
}
