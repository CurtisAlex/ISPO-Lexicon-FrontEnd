import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { SearchResultRow } from "src/app/models/searchResultRow";
import { SearchService } from "src/app/services/search-service/search.service";

@Component({
  selector: "app-search-result-row",
  templateUrl: "./search-result-row.component.html",
  styleUrls: ["./search-result-row.component.scss"]
})
export class SearchResultRowComponent implements OnInit, DoCheck {
  constructor(
    public breakpointObserver: BreakpointObserver,
    private searchService: SearchService
  ) {}

  @Input() row: SearchResultRow[];
  @Input() searchResultNumber: number;
  // Most likely going to remove
  @Input() totalResultsNumber: number;

  firstResult = false;
  lastResult = false;
  oddResult = false;
  tabletSizeAndAbove = true;
  translateOn: boolean;

  panelOpenState = false;

  ngOnInit() {
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
  }

  ngDoCheck() {
    this.getTranslateValue();
  }

  getTranslateValue() {
    this.translateOn = this.searchService.translate;
  }
}
