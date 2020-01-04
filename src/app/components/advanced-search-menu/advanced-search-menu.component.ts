import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  DoCheck
} from "@angular/core";
import {
  transition,
  trigger,
  state,
  style,
  animate,
  AnimationEvent
} from "@angular/animations";
import { FormControl, Validators } from "@angular/forms";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { SearchService } from "src/app/services/search-service/search.service";
import { MatSelectChange } from "@angular/material/select";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { SearchCriteria } from "src/app/models/enums";

@Component({
  selector: "app-advanced-search-menu",
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          height: "147px",
          opacity: 1.0
        })
      ),
      state(
        "closed",
        style({
          height: "0",
          opacity: 0.0
        })
      ),
      transition("open => closed", [animate("0.2s")]),
      transition("closed => open", [animate("0.2s")])
    ])
  ],
  templateUrl: "./advanced-search-menu.component.html",
  styleUrls: ["./advanced-search-menu.component.scss"]
})
export class AdvancedSearchMenuComponent implements OnInit, DoCheck {
  constructor(
    public breakpointObserver: BreakpointObserver,
    private searchService: SearchService
  ) {}

  @Input() isOpen;
  @Output() closed = new EventEmitter<boolean>();

  // Used to remove the options from the dom when the advanced search is closed
  // Allows for the options to smoothly disappear
  optionVisibility: boolean;

  tabletSizeAndAbove = true;

  criteriaControl = new FormControl("", [Validators.required]);
  targetControl = new FormControl("", [Validators.required]);

  // criteria: string[] = ["Begins with", "Ends with", "Contains", "Equals"];
  criteria: string[] = [
    SearchCriteria.StartsWith,
    SearchCriteria.Contains,
    SearchCriteria.Equals
  ];

  targets: string[];

  translateOn: boolean;
  isoStandardOnlyOn: boolean;

  ngOnInit() {
    this.getTargetValue();

    // Changes the view if the size is tablet and above
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tabletSizeAndAbove = false;
          // Translate toggle only in advanced search when in tablet view and smaller
          this.translateOn = this.searchService.translate;
          this.isoStandardOnlyOn = this.searchService.isoStandardOnly;
        } else {
          this.tabletSizeAndAbove = true;
        }
      });
  }

  ngDoCheck() {
    this.getTargetValue();
  }

  getTargetValue() {
    this.targets = this.searchService.getSearchTargetValues();
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

  // Set value of the criteria selected
  criteriaSelected(event: MatSelectChange) {
    console.log(event.value);
    this.searchService.searchCriteria = event.value;
  }

  // Set value of the target selected
  targetSelected(event: MatSelectChange) {
    console.log(event.value);
    this.searchService.searchTarget = event.value;
  }

  onAnimationEventDone(event: AnimationEvent) {
    if (event.toState === "closed") {
      this.closed.emit(true);
      this.optionVisibility = false;
    } else {
      this.optionVisibility = true;
    }
  }
}
