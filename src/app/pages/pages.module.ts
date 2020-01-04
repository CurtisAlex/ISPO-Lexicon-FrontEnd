import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { LexiconPageComponent } from "./lexicon-page/lexicon-page.component";
import { AcknowledgementPageComponent } from "./acknowledgement-page/acknowledgement-page.component";
import { HeaderComponent } from "./header/header.component";
import { ComponentModule } from "../components/components.module";

@NgModule({
  declarations: [
    HeaderComponent,
    LexiconPageComponent,
    AcknowledgementPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ComponentModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HeaderComponent, LexiconPageComponent, AcknowledgementPageComponent]
})
export class PagesModule {}
