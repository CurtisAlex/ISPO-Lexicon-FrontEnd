import { Component, OnInit, DoCheck } from "@angular/core";
import { SearchService } from "src/app/services/search-service/search.service";
import { Language } from "src/app/models/enums";

@Component({
  selector: "app-language-bar",
  templateUrl: "./language-bar.component.html",
  styleUrls: ["./language-bar.component.scss"]
})
export class LanguageBarComponent implements OnInit, DoCheck {
  constructor(private searchService: SearchService) {}
  translateOn: boolean;

  languages: Language[] = [
    Language.English,
    Language.French,
    Language.Spanish,
    Language.German,
    Language.Vietnamese,
    Language.Chinese,
    Language.Turkish,
    Language.Japanse
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
    this.searchService.firstLang = this.activeLanguage;
  }

  translatedLanguageClicked(language) {
    this.activeTranslatedLanguage = language;
    this.searchService.secondLang = this.activeTranslatedLanguage;
  }
}
