import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "@angular/cdk/layout";

import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from "./app.component";

// Feature modules
import { ComponentModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    LayoutModule,
    ComponentModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
