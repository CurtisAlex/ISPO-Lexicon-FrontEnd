import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

import { LanguageBarComponent } from "./language-bar/language-bar.component";
import { LexiconSearchResultRowComponent } from "./lexicon-search-result-row/lexicon-search-result-row.component";
import { SearchResultRowComponent } from "./search-result-row/search-result-row.component";
import { SearchResultCellComponent } from "./search-result-cell/search-result-cell.component";
import { AdvancedSearchMenuComponent } from "./advanced-search-menu/advanced-search-menu.component";
import { FooterComponent } from "./footer/footer.component";
import { ErrorScreenComponent } from "./error-screen/error-screen.component";

@NgModule({
  declarations: [
    LanguageBarComponent,
    LexiconSearchResultRowComponent,
    SearchResultRowComponent,
    SearchResultCellComponent,
    AdvancedSearchMenuComponent,
    FooterComponent,
    ErrorScreenComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    LanguageBarComponent,
    LexiconSearchResultRowComponent,
    SearchResultRowComponent,
    SearchResultCellComponent,
    AdvancedSearchMenuComponent,
    FooterComponent,
    ErrorScreenComponent
  ]
})
export class ComponentModule {}
