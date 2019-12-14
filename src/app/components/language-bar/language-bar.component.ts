import { Component, OnInit, DoCheck } from "@angular/core";
import { SearchService } from "src/app/services/search-service/search.service";

@Component({
  selector: "app-language-bar",
  templateUrl: "./language-bar.component.html",
  styleUrls: ["./language-bar.component.scss"]
})
export class LanguageBarComponent implements OnInit, DoCheck {
  constructor(private searchService: SearchService) {}
  translateOn: boolean;
  // TODO:: Make this language list a global list
  languages = [
    "English",
    "French",
    "Spanish",
    "German",
    "Vietnamese",
    "Chinese",
    "Turkish",
    "Japanese"
  ];
  activeLanguage = this.languages[0];

  activeTranslatedLanguage = this.languages[1];

  ngOnInit() {
    this.getTranslateValue();
  }

  ngDoCheck() {
    this.getTranslateValue();
  }

  getTranslateValue() {
    this.translateOn = this.searchService.translate;
  }

  firstLanguageTabDisabled(language) {
    if (this.translateOn && this.activeTranslatedLanguage === language) {
      return true;
    } else {
      return false;
    }
  }

  firstLanguageClicked(language) {
    this.activeLanguage = language;
    console.log("First Language Currently Selected: " + this.activeLanguage);
  }

  translatedLanguageClicked(language) {
    this.activeTranslatedLanguage = language;
    console.log(
      "Translated Language Currently Selected: " + this.activeTranslatedLanguage
    );
  }
}
