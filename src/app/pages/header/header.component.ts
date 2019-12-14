import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { LanguageShort } from "src/app/models/enums";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(public breakpointObserver: BreakpointObserver) {}

  @Output() buttonClicked = new EventEmitter<number>();
  buttonSelected = 1;
  currentLang = "En";

  tabletSizeAndAbove = true;

  ngOnInit() {
    // Changes the view if the size is tablet and above
    this.breakpointObserver
      .observe(["(max-width: 768px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.tabletSizeAndAbove = false;
        } else {
          this.tabletSizeAndAbove = true;
        }
      });
  }

  navigateToHome() {
    this.buttonClicked.emit(0);
    window.location.href = "https://www.ispoint.org/";
  }

  navigateToLexicon() {
    this.buttonClicked.emit(1);
    this.buttonSelected = 1;
  }

  navigateToAcknowledgement() {
    this.buttonClicked.emit(2);
    this.buttonSelected = 2;
  }

  // TODO add a method in for the language selector
  changeWebsiteLanguage(language: string) {
    this.currentLang = language;
  }
}
