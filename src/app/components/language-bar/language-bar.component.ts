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
    Language.German,
    Language.Vietnamese,
    Language.Spanish,
    Language.Chinese,
    Language.French,
    Language.Japanse,
    Language.Turkish
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

  selectedLanguageIndex(language) {
    return language;
  }

  firstLanguageClicked(language) {
    this.activeLanguage = language;
    this.searchService.firstLang = this.activeLanguage;
    this.searchService.firstLangId =
      this.languages.indexOf(this.activeLanguage) + 1;
  }

  translatedLanguageClicked(language) {
    this.activeTranslatedLanguage = language;
    this.searchService.secondLang = this.activeTranslatedLanguage;
    this.searchService.secondLangId =
      this.languages.indexOf(this.activeTranslatedLanguage) + 1;
  }
}
