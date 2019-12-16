(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-bar\">\r\n  <app-header (buttonClicked)=\"onButtonClick($event)\"></app-header>\r\n</div>\r\n\r\n<div *ngIf=\"lexiconPageSelected; else ackPage\">\r\n  <!-- <mat-toolbar class=\"title-bar\"><p class=\"title\">LEXICON</p></mat-toolbar> -->\r\n\r\n  <div class=\"main-page-contents\">\r\n    <app-lexicon-page></app-lexicon-page>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #ackPage>\r\n  <!-- <mat-toolbar class=\"title-bar\"\r\n      ><p class=\"title\">ACKNOWLEDGEMENT</p></mat-toolbar\r\n    > -->\r\n  <div class=\"main-page-contents\">\r\n    <app-acknowledgement-page></app-acknowledgement-page>\r\n  </div>\r\n</ng-template>\r\n<!-- Footer -->\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/advanced-search-menu/advanced-search-menu.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/advanced-search-menu/advanced-search-menu.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  [@openClose]=\"isOpen ? 'open' : 'closed'\"\n  class=\"open-close-container\"\n  (@openClose.done)=\"onAnimationEventDone($event)\"\n>\n  <div class=\"options\" *ngIf=\"optionVisibility || isOpen\">\n    <div class=\"toggles\" *ngIf=\"!tabletSizeAndAbove\">\n      <mat-slide-toggle\n        labelPosition=\"before\"\n        [checked]=\"isoStandardOnlyOn\"\n        (change)=\"toggleIsoStandardOnly($event)\"\n        >ISO Standard Only</mat-slide-toggle\n      >\n      <mat-slide-toggle\n        labelPosition=\"before\"\n        [checked]=\"translateOn\"\n        (change)=\"toggleTranslate($event)\"\n        >Translate</mat-slide-toggle\n      >\n    </div>\n\n    <mat-form-field>\n      <mat-label>Search Criteria:</mat-label>\n      <mat-select\n        [formControl]=\"criteriaControl\"\n        (selectionChange)=\"criteriaSelected($event)\"\n      >\n        <mat-option *ngFor=\"let criterion of criteria\" [value]=\"criterion\">\n          {{ criterion }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Search Target:</mat-label>\n      <mat-select\n        [formControl]=\"targetControl\"\n        (selectionChange)=\"targetSelected($event)\"\n      >\n        <mat-option *ngFor=\"let target of targets\" [value]=\"target\">\n          {{ target }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n  <p>All Content Copyright &copy; ISPO Canada. 2002-{{ currentYear }}</p>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/language-bar/language-bar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/language-bar/language-bar.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"language-bar\">\r\n  <nav mat-tab-nav-bar class=\"first-language\" [class.full-width]=\"!translateOn\">\r\n    <a\r\n      mat-tab-link\r\n      *ngFor=\"let language of languages\"\r\n      (click)=\"firstLanguageClicked(language)\"\r\n      [disabled]=\"firstLanguageTabDisabled(language)\"\r\n      [active]=\"activeLanguage == language\"\r\n    >\r\n      {{ language }}\r\n    </a>\r\n  </nav>\r\n  <nav mat-tab-nav-bar *ngIf=\"translateOn\" class=\"translated-language\">\r\n    <a\r\n      mat-tab-link\r\n      *ngFor=\"let language of languages\"\r\n      (click)=\"translatedLanguageClicked(language)\"\r\n      [disabled]=\"activeLanguage == language\"\r\n      [active]=\"activeTranslatedLanguage == language\"\r\n    >\r\n      {{ language }}\r\n    </a>\r\n  </nav>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-cell/search-result-cell.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-cell/search-result-cell.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"search-cell\">\r\n  <div class=\"title\">\r\n    <p class=\"languageWord\">{{ word }}</p>\r\n    <img\r\n      *ngIf=\"isoStandard\"\r\n      src=\"https://cdn.iso.org/resources/wood/3.0.8/img/iso/iso-logo-print.gif\"\r\n      alt=\"ISO Standard\"\r\n      class=\"iso-standard-icon\"\r\n    />\r\n  </div>\r\n  <p class=\"wordDescription\">{{ description }}</p>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-row/search-result-row.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-row/search-result-row.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"tabletSizeAndAbove; else mobileViewPage\">\r\n  <div\r\n    class=\"search-row\"\r\n    [class.background]=\"oddResult\"\r\n    [class.rounded-top]=\"firstResult\"\r\n    [class.rounded-bottom]=\"lastResult\"\r\n  >\r\n    <app-search-result-cell\r\n      class=\"cell\"\r\n      [class.first-col]=\"translateOn\"\r\n      [word]=\"row.knownLangWord\"\r\n      [description]=\"row.knownLangDescription\"\r\n      [isoStandard]=\"row.isoStandard\"\r\n    ></app-search-result-cell>\r\n    <app-search-result-cell\r\n      *ngIf=\"translateOn\"\r\n      class=\"cell\"\r\n      [word]=\"row.unknownLangWord\"\r\n      [description]=\"row.unknownLangDescription\"\r\n      [isoStandard]=\"row.isoStandard\"\r\n    ></app-search-result-cell>\r\n  </div>\r\n</div>\r\n<ng-template #mobileViewPage>\r\n  <mat-accordion>\r\n    <mat-expansion-panel\r\n      [class.background]=\"oddResult\"\r\n      [class.rounded-top]=\"firstResult\"\r\n      [class.rounded-bottom]=\"lastResult\"\r\n      [class.expansion-row]=\"!firstResult && !lastResult\"\r\n      (opened)=\"panelOpenState = true\"\r\n      (closed)=\"panelOpenState = false\"\r\n    >\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title class=\"panel-title-text\">\r\n          {{ row.knownLangWord }}\r\n        </mat-panel-title>\r\n        <img\r\n          *ngIf=\"row.isoStandard\"\r\n          src=\"https://cdn.iso.org/resources/wood/3.0.8/img/iso/iso-logo-print.gif\"\r\n          alt=\"ISO Standard\"\r\n          class=\"iso-standard-icon\"\r\n        />\r\n        <mat-panel-title\r\n          *ngIf=\"!panelOpenState && translateOn\"\r\n          class=\"panel-title-text-second-language\"\r\n        >\r\n          {{ row.unknownLangWord }}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      {{ row.knownLangDescription }}\r\n      <p\r\n        *ngIf=\"panelOpenState && translateOn\"\r\n        class=\"panel-second-language-word\"\r\n      >\r\n        {{ row.unknownLangWord }}\r\n      </p>\r\n      <p *ngIf=\"panelOpenState && translateOn\">\r\n        {{ row.unknownLangDescription }}\r\n      </p>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acknowledgement-page/acknowledgement-page.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acknowledgement-page/acknowledgement-page.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"card-holder\">\r\n    <mat-card class=\"card\" *ngFor=\"let acknowledgement of acknowledgements\">\r\n      <mat-card-title> {{ acknowledgement.name }} </mat-card-title>\r\n      <mat-card-subtitle> {{ acknowledgement.titles }} </mat-card-subtitle>\r\n      <mat-card-subtitle>\r\n        {{ acknowledgement.roles }}\r\n      </mat-card-subtitle>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"banner\">\r\n  <div class=\"title-bar\">\r\n    <img\r\n      src=\"https://cdn.ymaws.com/www.ispoint.org/graphics/logo.png\"\r\n      alt=\"ISPO Title Image\"\r\n      class=\"title-image\"\r\n    />\r\n  </div>\r\n  <div *ngIf=\"tabletSizeAndAbove; else mobileViewMenu\">\r\n    <div class=\"nav-btns-bar\">\r\n      <button mat-button class=\"nav-btn\" (click)=\"navigateToHome()\">\r\n        Home\r\n      </button>\r\n      <button\r\n        mat-button\r\n        class=\"nav-btn lexicon-btn\"\r\n        (click)=\"navigateToLexicon()\"\r\n        [class.background]=\"1 === buttonSelected\"\r\n      >\r\n        Lexicon\r\n      </button>\r\n      <button\r\n        mat-button\r\n        class=\"nav-btn acknowledgement-btn\"\r\n        (click)=\"navigateToAcknowledgement()\"\r\n        [class.background]=\"2 === buttonSelected\"\r\n      >\r\n        Acknowledgement\r\n      </button>\r\n      <!-- Uncomment below code to add a website language menu selector -->\r\n      <!-- <button\r\n        mat-button\r\n        [matMenuTriggerFor]=\"pageLanguageSelector\"\r\n        class=\"nav-btn\"\r\n      >\r\n        {{ currentLang }}\r\n      </button>\r\n      <mat-menu\r\n        #pageLanguageSelector=\"matMenu\"\r\n        yPosition=\"below\"\r\n        xPosition=\"before\"\r\n      >\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('En')\">\r\n          English\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Fr')\">\r\n          French\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Es')\">\r\n          Spanish\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('De')\">\r\n          German\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Vi')\">\r\n          Vietnamese\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Zh')\">\r\n          Chinese\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Tr')\">\r\n          Turkish\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Ja')\">\r\n          Japanse\r\n        </button>\r\n      </mat-menu> -->\r\n    </div>\r\n  </div>\r\n  <ng-template #mobileViewMenu>\r\n    <div class=\"nav-btns-bar-mobile\">\r\n      <button mat-button [matMenuTriggerFor]=\"mainMenu\" class=\"main-menu-btn\">\r\n        MENU\r\n        <!-- <mat-icon></mat-icon> get hamburger menu in white icon -->\r\n      </button>\r\n      <mat-menu #mainMenu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"navigateToHome()\">Home</button>\r\n        <button mat-menu-item (click)=\"navigateToLexicon()\">Lexicon</button>\r\n        <button mat-menu-item (click)=\"navigateToAcknowledgement()\">\r\n          Acknowledgement\r\n        </button>\r\n        <!-- Uncomment below code to add a website language menu selector -->\r\n        <!-- <button mat-menu-item [matMenuTriggerFor]=\"pageLanguageSelector\">\r\n          {{ currentLang }}\r\n        </button> -->\r\n      </mat-menu>\r\n\r\n      <!-- Uncomment below code to add a website language menu selector -->\r\n      <!-- <mat-menu #pageLanguageSelector=\"matMenu\">\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('En')\">\r\n          English\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Fr')\">\r\n          French\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Es')\">\r\n          Spanish\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('De')\">\r\n          German\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Vi')\">\r\n          Vietnamese\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Zh')\">\r\n          Chinese\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Tr')\">\r\n          Turkish\r\n        </button>\r\n        <button mat-menu-item (click)=\"changeWebsiteLanguage('Ja')\">\r\n          Japanse\r\n        </button>\r\n      </mat-menu> -->\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lexicon-page/lexicon-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lexicon-page/lexicon-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"content\">\r\n  <div class=\"search-div\">\r\n    <!-- <div class=\"search-display\"> -->\r\n    <!-- <form class=\"basic-search-form\"> -->\r\n    <div class=\"basic-search-form\">\r\n      <mat-form-field class=\"user-input\">\r\n        <!-- <mat-icon matSuffix></mat-icon> -->\r\n        <input\r\n          matInput\r\n          placeholder=\"Search\"\r\n          [value]=\"searchInput\"\r\n          (input)=\"searchInput = $event.target.value\"\r\n        />\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- </form> -->\r\n    <div class=\"toggles\" *ngIf=\"tabletSizeAndAbove\">\r\n      <mat-slide-toggle\r\n        labelPosition=\"before\"\r\n        [checked]=\"isoStandardOnlyOn\"\r\n        (change)=\"toggleIsoStandardOnly($event)\"\r\n        >ISO Standard Only</mat-slide-toggle\r\n      >\r\n      <mat-slide-toggle\r\n        labelPosition=\"before\"\r\n        [checked]=\"translateOn\"\r\n        (change)=\"toggleTranslate($event)\"\r\n        >Translate</mat-slide-toggle\r\n      >\r\n    </div>\r\n    <!-- <div *ngIf=\"advancedSearchOn\"> -->\r\n\r\n    <!-- </div> -->\r\n    <div\r\n      [class.search-buttons]=\"advancedSearchClosedAnimationComplete\"\r\n      [class.advancedSearchSettings]=\"advancedSearchOpen()\"\r\n    >\r\n      <button\r\n        mat-button\r\n        class=\"link-button\"\r\n        (click)=\"toggleAdvancedSearch()\"\r\n        [class.advancedSearch]=\"advancedSearchOpen()\"\r\n      >\r\n        Advanced Search\r\n      </button>\r\n      <app-advanced-search-menu\r\n        [isOpen]=\"advancedSearchOn\"\r\n        (closed)=\"advancedSearchClosed($event)\"\r\n      ></app-advanced-search-menu>\r\n      <button\r\n        mat-raised-button\r\n        [class.search]=\"advancedSearchOpen()\"\r\n        (click)=\"search()\"\r\n      >\r\n        Search\r\n      </button>\r\n    </div>\r\n    <!-- </div> -->\r\n  </div>\r\n\r\n  <div class=\"language-selectors\">\r\n    <app-language-bar></app-language-bar>\r\n  </div>\r\n\r\n  <div class=\"search-results\">\r\n    <app-search-result-row\r\n      *ngFor=\"let row of searchResults; index as i\"\r\n      [row]=\"row\"\r\n      [searchResultNumber]=\"i\"\r\n      [totalResultsNumber]=\"searchResults.length\"\r\n    ></app-search-result-row>\r\n  </div>\r\n</div>\r\n\r\n<h2>Temp List</h2>\r\n<ul>\r\n  <li *ngFor=\"let item of searchResults\">\r\n    {{ item }}\r\n  </li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-bar {\n  width: 100%;\n}\n\n.title-bar {\n  margin-top: 0.5rem;\n  display: flex;\n  box-sizing: border-box;\n  padding: 0;\n  width: 100%;\n  flex-direction: row;\n  align-items: center;\n  white-space: nowrap;\n}\n\n.title {\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n}\n\n.main-page-contents {\n  margin-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  background-color: white;\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n}\n\n@media (max-width: 768px) {\n  .main-page-contents {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxjdXJ0aVxcRGVza3RvcFxcSVNQTy1MZXhpY29uLUZyb250RW5kXFxpc3BvcHJvamVjdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREVFO0VBVEY7SUFVSSxXQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5tYWluLXBhZ2UtY29udGVudHMge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5uYXYtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50aXRsZS1iYXIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xufVxuXG4ubWFpbi1wYWdlLWNvbnRlbnRzIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbi1wYWdlLWNvbnRlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "ISPO-Lexicon";
        this.lexiconPageSelected = true;
    }
    onButtonClick(btnClicked) {
        if (btnClicked === 0) {
            // Return Home
        }
        else if (btnClicked === 1) {
            // Display Lexicon Page
            if (!this.lexiconPageSelected) {
                this.lexiconPageSelected = true;
            }
        }
        else if (btnClicked === 2) {
            // Display Acknowledgement Page
            if (this.lexiconPageSelected) {
                this.lexiconPageSelected = false;
            }
        }
        else if (btnClicked === 3) {
            // Change website language selected
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/pages.module */ "./src/app/pages/pages.module.ts");







// Feature modules


let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/advanced-search-menu/advanced-search-menu.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/advanced-search-menu/advanced-search-menu.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".open-close-container {\n  padding: 0.5rem 0 0.5rem 0;\n}\n\n.toggles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-content: flex-start;\n  margin-bottom: 0.5rem;\n}\n\n.options {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZHZhbmNlZC1zZWFyY2gtbWVudS9DOlxcVXNlcnNcXGN1cnRpXFxEZXNrdG9wXFxJU1BPLUxleGljb24tRnJvbnRFbmRcXGlzcG9wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZHZhbmNlZC1zZWFyY2gtbWVudVxcYWR2YW5jZWQtc2VhcmNoLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYWR2YW5jZWQtc2VhcmNoLW1lbnUvYWR2YW5jZWQtc2VhcmNoLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkdmFuY2VkLXNlYXJjaC1tZW51L2FkdmFuY2VkLXNlYXJjaC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wZW4tY2xvc2UtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcclxufVxyXG5cclxuLnRvZ2dsZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIub3Blbi1jbG9zZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMCAwLjVyZW0gMDtcbn1cblxuLnRvZ2dsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/advanced-search-menu/advanced-search-menu.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/advanced-search-menu/advanced-search-menu.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AdvancedSearchMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchMenuComponent", function() { return AdvancedSearchMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search-service/search.service */ "./src/app/services/search-service/search.service.ts");






let AdvancedSearchMenuComponent = class AdvancedSearchMenuComponent {
    constructor(breakpointObserver, searchService) {
        this.breakpointObserver = breakpointObserver;
        this.searchService = searchService;
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.tabletSizeAndAbove = true;
        this.criteriaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.targetControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.criteria = ["Begins with", "Ends with", "Contains", "Equals"];
    }
    ngOnInit() {
        this.getTargetValue();
        // Changes the view if the size is tablet and above
        this.breakpointObserver
            .observe(["(max-width: 768px)"])
            .subscribe((state) => {
            if (state.matches) {
                this.tabletSizeAndAbove = false;
                // Translate toggle only in advanced search when in tablet view and smaller
                this.translateOn = this.searchService.translate;
                this.isoStandardOnlyOn = this.searchService.isoStandardOnly;
            }
            else {
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
    toggleTranslate(matSlideToggleChange) {
        this.translateOn = matSlideToggleChange.checked.valueOf();
        this.searchService.translate = this.translateOn;
    }
    toggleIsoStandardOnly(matSlideToggleChange) {
        this.isoStandardOnlyOn = matSlideToggleChange.checked.valueOf();
        this.searchService.isoStandardOnly = this.isoStandardOnlyOn;
        this.searchService.dummySearch(); // Make new query call with the updated value of ISO Standard Only toggle
    }
    // Set value of the criteria selected
    criteriaSelected(event) {
        console.log(event.value);
        this.searchService.searchCriteria = event.value;
    }
    // Set value of the target selected
    targetSelected(event) {
        console.log(event.value);
        this.searchService.searchTarget = event.value;
    }
    onAnimationEventDone(event) {
        if (event.toState === "closed") {
            this.closed.emit(true);
            this.optionVisibility = false;
        }
        else {
            this.optionVisibility = true;
        }
    }
};
AdvancedSearchMenuComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["BreakpointObserver"] },
    { type: src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AdvancedSearchMenuComponent.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AdvancedSearchMenuComponent.prototype, "closed", void 0);
AdvancedSearchMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-advanced-search-menu",
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("openClose", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: "147px",
                    opacity: 1.0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    height: "0",
                    opacity: 0.0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("open => closed", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("closed => open", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("0.2s")])
            ])
        ],
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advanced-search-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/advanced-search-menu/advanced-search-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advanced-search-menu.component.scss */ "./src/app/components/advanced-search-menu/advanced-search-menu.component.scss")).default]
    })
], AdvancedSearchMenuComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentModule", function() { return ComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./language-bar/language-bar.component */ "./src/app/components/language-bar/language-bar.component.ts");
/* harmony import */ var _search_result_row_search_result_row_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-result-row/search-result-row.component */ "./src/app/components/search-result-row/search-result-row.component.ts");
/* harmony import */ var _search_result_cell_search_result_cell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search-result-cell/search-result-cell.component */ "./src/app/components/search-result-cell/search-result-cell.component.ts");
/* harmony import */ var _advanced_search_menu_advanced_search_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./advanced-search-menu/advanced-search-menu.component */ "./src/app/components/advanced-search-menu/advanced-search-menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");















let ComponentModule = class ComponentModule {
};
ComponentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__["LanguageBarComponent"],
            _search_result_row_search_result_row_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultRowComponent"],
            _search_result_cell_search_result_cell_component__WEBPACK_IMPORTED_MODULE_12__["SearchResultCellComponent"],
            _advanced_search_menu_advanced_search_menu_component__WEBPACK_IMPORTED_MODULE_13__["AdvancedSearchMenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [],
        exports: [
            _language_bar_language_bar_component__WEBPACK_IMPORTED_MODULE_10__["LanguageBarComponent"],
            _search_result_row_search_result_row_component__WEBPACK_IMPORTED_MODULE_11__["SearchResultRowComponent"],
            _search_result_cell_search_result_cell_component__WEBPACK_IMPORTED_MODULE_12__["SearchResultCellComponent"],
            _advanced_search_menu_advanced_search_menu_component__WEBPACK_IMPORTED_MODULE_13__["AdvancedSearchMenuComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
        ]
    })
], ComponentModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\n  display: flex;\n  justify-content: center;\n  padding: 0.4rem;\n}\n\np {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxjdXJ0aVxcRGVza3RvcFxcSVNQTy1MZXhpY29uLUZyb250RW5kXFxpc3BvcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNHJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-footer",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/language-bar/language-bar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/language-bar/language-bar.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language-bar {\n  display: flex;\n}\n@media (max-width: 768px) {\n  .language-bar {\n    flex-direction: column;\n  }\n}\n@media (min-width: 769px) {\n  .language-bar {\n    width: 100%;\n    flex-direction: row;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 25px;\n  }\n}\n@media (min-width: 769px) {\n  .first-language {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .first-language {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 25px;\n    margin-top: 0.5rem;\n  }\n}\n@media (min-width: 769px) {\n  .translated-language {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .translated-language {\n    width: 100%;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 25px;\n    margin-top: 0.5rem;\n  }\n}\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5ndWFnZS1iYXIvQzpcXFVzZXJzXFxjdXJ0aVxcRGVza3RvcFxcSVNQTy1MZXhpY29uLUZyb250RW5kXFxpc3BvcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbGFuZ3VhZ2UtYmFyXFxsYW5ndWFnZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2UtYmFyL2xhbmd1YWdlLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBRENFO0VBSEY7SUFJSSxzQkFBQTtFQ0VGO0FBQ0Y7QURDRTtFQVJGO0lBU0ksV0FBQTtJQUNBLG1CQUFBO0lBQ0EsNEVBQUE7SUFDQSxtQkFBQTtFQ0VGO0FBQ0Y7QURJRTtFQURGO0lBRUksVUFBQTtFQ0FGO0FBQ0Y7QURFRTtFQUxGO0lBTUksV0FBQTtJQUNBLDRFQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0NGO0FBQ0Y7QURHRTtFQURGO0lBRUksVUFBQTtFQ0NGO0FBQ0Y7QURDRTtFQUxGO0lBTUksV0FBQTtJQUNBLDRFQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0Y7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZ3VhZ2UtYmFyL2xhbmd1YWdlLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1iYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gVGFibGV0IGFuZCBzbWFsbGVyXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLy8gVGFibGV0IGFuZCBiaWdnZXJcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWF5IGNvbWJpbmUgZmlyc3QtbGFuZ3VhZ2UgYW5kIHNlY29uZC1sYW5ndWFnZSBpbnRvIHRoZXJlIG93biBjbGFzc2lmaWVyXHJcbi8vIERlcGVuZGluZyBvbiBob3cgdGhlIGRpY3Rvcnkgb3B0aW9uIHdpbGwgYmUgaGFuZGVkIChvbmx5IHNob3cgb25lIGxhbmd1YWdlKVxyXG4uZmlyc3QtbGFuZ3VhZ2Uge1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50cmFuc2xhdGVkLWxhbmd1YWdlIHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwiLmxhbmd1YWdlLWJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxhbmd1YWdlLWJhciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5sYW5ndWFnZS1iYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAuZmlyc3QtbGFuZ3VhZ2Uge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZmlyc3QtbGFuZ3VhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC50cmFuc2xhdGVkLWxhbmd1YWdlIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnRyYW5zbGF0ZWQtbGFuZ3VhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIH1cbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/language-bar/language-bar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/language-bar/language-bar.component.ts ***!
  \*******************************************************************/
/*! exports provided: LanguageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageBarComponent", function() { return LanguageBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/search-service/search.service */ "./src/app/services/search-service/search.service.ts");
/* harmony import */ var src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/enums */ "./src/app/models/enums.ts");




let LanguageBarComponent = class LanguageBarComponent {
    constructor(searchService) {
        this.searchService = searchService;
        this.languages = [
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].English,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].French,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].Spanish,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].German,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].Vietnamese,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].Chinese,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].Turkish,
            src_app_models_enums__WEBPACK_IMPORTED_MODULE_3__["Language"].Japanse
        ];
        this.activeLanguage = this.languages[0];
        this.activeTranslatedLanguage = this.languages[1];
    }
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
        }
        else {
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
};
LanguageBarComponent.ctorParameters = () => [
    { type: src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }
];
LanguageBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-language-bar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./language-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/language-bar/language-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./language-bar.component.scss */ "./src/app/components/language-bar/language-bar.component.scss")).default]
    })
], LanguageBarComponent);



/***/ }),

/***/ "./src/app/components/search-result-cell/search-result-cell.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/search-result-cell/search-result-cell.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-cell {\n  width: 100%;\n}\n\n.languageWord {\n  font-size: 18px;\n  font-weight: bold;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.wordDescription {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.iso-standard-icon {\n  height: 18px;\n  width: 18px;\n}\n\n.title {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0LWNlbGwvQzpcXFVzZXJzXFxjdXJ0aVxcRGVza3RvcFxcSVNQTy1MZXhpY29uLUZyb250RW5kXFxpc3BvcHJvamVjdC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2VhcmNoLXJlc3VsdC1jZWxsXFxzZWFyY2gtcmVzdWx0LWNlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC1jZWxsL3NlYXJjaC1yZXN1bHQtY2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0LWNlbGwvc2VhcmNoLXJlc3VsdC1jZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1jZWxsIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxhbmd1YWdlV29yZCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLndvcmREZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uaXNvLXN0YW5kYXJkLWljb24ge1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCIuc2VhcmNoLWNlbGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxhbmd1YWdlV29yZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG59XG5cbi53b3JkRGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xufVxuXG4uaXNvLXN0YW5kYXJkLWljb24ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/search-result-cell/search-result-cell.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/search-result-cell/search-result-cell.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchResultCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultCellComponent", function() { return SearchResultCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchResultCellComponent = class SearchResultCellComponent {
    constructor() {
        this.isoStandard = false; // if no input, default value is fale
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultCellComponent.prototype, "word", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultCellComponent.prototype, "description", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultCellComponent.prototype, "isoStandard", void 0);
SearchResultCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-result-cell",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result-cell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-cell/search-result-cell.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result-cell.component.scss */ "./src/app/components/search-result-cell/search-result-cell.component.scss")).default]
    })
], SearchResultCellComponent);



/***/ }),

/***/ "./src/app/components/search-result-row/search-result-row.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/search-result-row/search-result-row.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-row {\n  display: flex;\n  flex-direction: row;\n}\n\n.cell {\n  flex: 1 1 0;\n}\n\n.background {\n  background-color: #e7e7e7;\n}\n\n.first-col {\n  border-right: 0.2px solid lightgray;\n}\n\n.rounded-top {\n  border-top-left-radius: 25px !important;\n  border-top-right-radius: 25px !important;\n  border-bottom-left-radius: 0 !important;\n  border-bottom-right-radius: 0 !important;\n}\n\n.rounded-bottom {\n  border-top-left-radius: 0 !important;\n  border-top-right-radius: 0 !important;\n  border-bottom-left-radius: 25px !important;\n  border-bottom-right-radius: 25px !important;\n}\n\n.expansion-row {\n  border-radius: 0 !important;\n}\n\n.panel-title-text {\n  font-weight: bold;\n}\n\n.panel-title-text-second-language {\n  font-weight: bold;\n  justify-content: flex-end;\n  text-align: right;\n}\n\n.panel-second-language-word {\n  padding-top: 0.5rem;\n  font-weight: bold;\n}\n\n.iso-standard-icon {\n  height: 18px;\n  width: 18px;\n  margin-right: 16px;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtcmVzdWx0LXJvdy9DOlxcVXNlcnNcXGN1cnRpXFxEZXNrdG9wXFxJU1BPLUxleGljb24tRnJvbnRFbmRcXGlzcG9wcm9qZWN0L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2gtcmVzdWx0LXJvd1xcc2VhcmNoLXJlc3VsdC1yb3cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoLXJlc3VsdC1yb3cvc2VhcmNoLXJlc3VsdC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQ0FBQTtBQ0NGOztBREVBO0VBQ0UsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLHVDQUFBO0VBQ0Esd0NBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC1yZXN1bHQtcm93L3NlYXJjaC1yZXN1bHQtcm93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLmNlbGwge1xyXG4gIGZsZXg6IDEgMSAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpO1xyXG59XHJcblxyXG4uZmlyc3QtY29sIHtcclxuICBib3JkZXItcmlnaHQ6IDAuMnB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnJvdW5kZWQtdG9wIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJvdW5kZWQtYm90dG9tIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4cGFuc2lvbi1yb3cge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhbmVsLXRpdGxlLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAmLXNlY29uZC1sYW5ndWFnZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi5wYW5lbC1zZWNvbmQtbGFuZ3VhZ2Utd29yZCB7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmlzby1zdGFuZGFyZC1pY29uIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4iLCIuc2VhcmNoLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jZWxsIHtcbiAgZmxleDogMSAxIDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNztcbn1cblxuLmZpcnN0LWNvbCB7XG4gIGJvcmRlci1yaWdodDogMC4ycHggc29saWQgbGlnaHRncmF5O1xufVxuXG4ucm91bmRlZC10b3Age1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtYm90dG9tIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5leHBhbnNpb24tcm93IHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4ucGFuZWwtdGl0bGUtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnBhbmVsLXRpdGxlLXRleHQtc2Vjb25kLWxhbmd1YWdlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGFuZWwtc2Vjb25kLWxhbmd1YWdlLXdvcmQge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlzby1zdGFuZGFyZC1pY29uIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/search-result-row/search-result-row.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/search-result-row/search-result-row.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SearchResultRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultRowComponent", function() { return SearchResultRowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search-service/search.service */ "./src/app/services/search-service/search.service.ts");




let SearchResultRowComponent = class SearchResultRowComponent {
    constructor(breakpointObserver, searchService) {
        this.breakpointObserver = breakpointObserver;
        this.searchService = searchService;
        this.firstResult = false;
        this.lastResult = false;
        this.oddResult = false;
        this.tabletSizeAndAbove = true;
        this.panelOpenState = false;
    }
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
            .subscribe((state) => {
            if (state.matches) {
                this.tabletSizeAndAbove = false;
                this.panelOpenState = false;
            }
            else {
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
};
SearchResultRowComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultRowComponent.prototype, "row", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultRowComponent.prototype, "searchResultNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchResultRowComponent.prototype, "totalResultsNumber", void 0);
SearchResultRowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-result-row",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-result-row.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-result-row/search-result-row.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-result-row.component.scss */ "./src/app/components/search-result-row/search-result-row.component.scss")).default]
    })
], SearchResultRowComponent);



/***/ }),

/***/ "./src/app/mock-language-database.ts":
/*!*******************************************!*\
  !*** ./src/app/mock-language-database.ts ***!
  \*******************************************/
/*! exports provided: ROWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROWS", function() { return ROWS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const ROWS = [
    // {
    //   id: 1,
    //   knownLangWord: "abdomen",
    //   unknownLangWord: "abdomen",
    //   knownLangDescription: "area of the body between thorax and plevis",
    //   unknownLangDescription:
    //     "partie du corps limitée en haut par le diaphragme,qui le sépare du thorax et en bas par le bassin"
    // },
    // {
    //   id: 2,
    //   knownLangWord: "abdominal",
    //   unknownLangWord: "abdominal",
    //   knownLangDescription: "pertaining to the abdomen",
    //   unknownLangDescription: "relatif à l'abdomen"
    // },
    // {
    //   id: 3,
    //   knownLangWord: "abduct, abduction ",
    //   unknownLangWord: "abduction",
    //   knownLangDescription:
    //     "movement of a body part away from the midline of the body",
    //   unknownLangDescription:
    //     "mouvement qui écarte un membre ou un segment de membre de l'axe médian du corps"
    // },
    // {
    //   id: 4,
    //   knownLangWord: "abducted gait",
    //   unknownLangWord: "marche en abduction",
    //   knownLangDescription: "walking with the legs spread away from the midline",
    //   unknownLangDescription:
    //     "marche avec les jambes écartées par rapport à l'axe médian du corps"
    // },
    // {
    //   id: 5,
    //   knownLangWord: "abductor",
    //   unknownLangWord: "abducteur",
    //   knownLangDescription:
    //     "muscle that moves a body part away from the midline of the body",
    //   unknownLangDescription:
    //     "se dit de tout muscle qui provoque un mouvement d'abduction"
    // },
    // {
    //   id: 6,
    //   knownLangWord: "ability to walk",
    //   unknownLangWord: "aptitude à la marche",
    //   knownLangDescription: "walking, mobility, quality of life factor",
    //   unknownLangDescription: "marche,mobilité,facteur de qualité de vie"
    // },
    // {
    //   id: 7,
    //   knownLangWord: "ablatio mammae (mastectomy)",
    //   unknownLangWord: "mastectomie",
    //   knownLangDescription: "surgical removal of  breast",
    //   unknownLangDescription: "ablation chirurgicale d'un sein"
    // },
    // {
    //   id: 8,
    //   knownLangWord: "ablation",
    //   unknownLangWord: "ablation",
    //   knownLangDescription: "surgical removal",
    //   unknownLangDescription: "synonyme d'élimination, d'ablation (amputation)"
    // },
    // {
    //   id: 9,
    //   knownLangWord: "above elbow (AE) amputation",
    //   unknownLangWord: "ISO Term: Only Available in English",
    //   knownLangDescription:
    //     "amputation through the humerus between the shoulder joint and the elbow joint ",
    //   unknownLangDescription: ""
    // },
    // {
    //   id: 10,
    //   knownLangWord: "above elbow (AE) prosthesis",
    //   unknownLangWord: "aptitude à la marche",
    //   knownLangDescription:
    //     "prosthesis for a person with a trans-humeral amputation ",
    //   unknownLangDescription: "prothèse pour une amputation trans-humérale"
    // },
    // {
    //   id: 11,
    //   knownLangWord: "above the knee (AK) amputation",
    //   unknownLangWord: "ISO Term: Only Available in English",
    //   knownLangDescription:
    //     "amputation through the femur (thigh bone) between the hip joint and the knee joint",
    //   unknownLangDescription: ""
    // },
    // {
    //   id: 12,
    //   knownLangWord: "above the knee (AK) prosthesis",
    //   unknownLangWord: "prothèse trans-fémorale",
    //   knownLangDescription: "prosthesis for transfemoral amputation - (AK)",
    //   unknownLangDescription: "prothèse pour une amputation trans-fémorale"
    // },
    {
        id: 1,
        knownLangWord: "abdomen",
        unknownLangWord: "Bauch, der",
        knownLangDescription: "area of the body between thorax and plevis",
        unknownLangDescription: "Körperregion zwischen Brustkorb und Becken",
        isoStandard: false
    },
    {
        id: 2,
        knownLangWord: "abdominal",
        unknownLangWord: "abdominal",
        knownLangDescription: "pertaining to the abdomen",
        unknownLangDescription: "in Bezug zum Abdomen (Bauch)",
        isoStandard: true
    },
    {
        id: 3,
        knownLangWord: "abduct, abduction ",
        unknownLangWord: "abspreizen, abduzieren",
        knownLangDescription: "movement of a body part away from the midline of the body",
        unknownLangDescription: "(ein Glied) von der Körpermittellinie weg bewegen",
        isoStandard: true
    },
    {
        id: 4,
        knownLangWord: "abducted gait",
        unknownLangWord: "abduzierter Gang, der",
        knownLangDescription: "walking with the legs spread away from the midline",
        unknownLangDescription: "abgespreiztes Gehen",
        isoStandard: false
    },
    {
        id: 5,
        knownLangWord: "abductor",
        unknownLangWord: "Abduktor, der",
        knownLangDescription: "muscle that moves a body part away from the midline of the body",
        unknownLangDescription: "abduzierender Muskel",
        isoStandard: false
    }
];


/***/ }),

/***/ "./src/app/models/enums.ts":
/*!*********************************!*\
  !*** ./src/app/models/enums.ts ***!
  \*********************************/
/*! exports provided: Language, LanguageShort, SearchCriteria, SearchTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageShort", function() { return LanguageShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchCriteria", function() { return SearchCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTarget", function() { return SearchTarget; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Language;
(function (Language) {
    Language["English"] = "English";
    Language["French"] = "French";
    Language["Spanish"] = "Spanish";
    Language["German"] = "German";
    Language["Vietnamese"] = "Vietnamese";
    Language["Chinese"] = "Chinese";
    Language["Turkish"] = "Turkish";
    Language["Japanse"] = "Japanse";
})(Language || (Language = {}));
var LanguageShort;
(function (LanguageShort) {
    LanguageShort["English"] = "en";
    LanguageShort["French"] = "fr";
    LanguageShort["Spanish"] = "es";
    LanguageShort["German"] = "de";
    LanguageShort["Vietnamese"] = "vi";
    LanguageShort["Chinese"] = "zh";
    LanguageShort["Turkish"] = "tr";
    LanguageShort["Japanse"] = "ja";
})(LanguageShort || (LanguageShort = {}));
var SearchCriteria;
(function (SearchCriteria) {
    SearchCriteria["BeginsWith"] = "Begins With";
    SearchCriteria["EndsWith"] = "Ends With";
    SearchCriteria["Contains"] = "Contains";
    SearchCriteria["Equals"] = "Equals";
})(SearchCriteria || (SearchCriteria = {}));
var SearchTarget;
(function (SearchTarget) {
    SearchTarget["FLWord"] = "First Language Word";
    SearchTarget["FLDefinition"] = "First Language Definition";
    SearchTarget["SLWord"] = "Second Language Word";
    SearchTarget["SLDefinition"] = "Second Language Definition";
})(SearchTarget || (SearchTarget = {}));


/***/ }),

/***/ "./src/app/pages/acknowledgement-page/acknowledgement-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/acknowledgement-page/acknowledgement-page.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.card-holder {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: center;\n}\n\n.card {\n  margin: 0.5rem;\n  max-width: 10rem;\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNrbm93bGVkZ2VtZW50LXBhZ2UvQzpcXFVzZXJzXFxjdXJ0aVxcRGVza3RvcFxcSVNQTy1MZXhpY29uLUZyb250RW5kXFxpc3BvcHJvamVjdC9zcmNcXGFwcFxccGFnZXNcXGFja25vd2xlZGdlbWVudC1wYWdlXFxhY2tub3dsZWRnZW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNrbm93bGVkZ2VtZW50LXBhZ2UvYWNrbm93bGVkZ2VtZW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2tub3dsZWRnZW1lbnQtcGFnZS9hY2tub3dsZWRnZW1lbnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtaG9sZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMC41cmVtO1xyXG4gIG1heC13aWR0aDogMTByZW07XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbiIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkLWhvbGRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgZmxleC1ncm93OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/acknowledgement-page/acknowledgement-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/acknowledgement-page/acknowledgement-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: AcknowledgementPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcknowledgementPageComponent", function() { return AcknowledgementPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AcknowledgementPageComponent = class AcknowledgementPageComponent {
    constructor() {
        this.acknowledgements = [
            {
                name: "Wieland Kaphingst",
                titles: "Dipl.-Ing., BMT, CPO",
                roles: "Author, Translator: English, German"
            },
            {
                name: "René Baumgartner",
                titles: "MD, Prof. emeritus, Orthopaedic Surgeon",
                roles: "Author, Translator: German"
            },
            {
                name: "Wilfred Raab",
                titles: "CPO",
                roles: "Author, Translator: German, Vietnamese"
            },
            {
                name: "Edward Lemaire",
                titles: "PhD",
                roles: "Editing/Web, Translator: English"
            },
            {
                name: "Fangwei Zeng",
                titles: "BSc",
                roles: "Editing/Web"
            },
            {
                name: "Alexander Curtis",
                titles: "BSc",
                roles: "Web"
            },
            {
                name: "Rhya Burnet",
                titles: "BSc",
                roles: "Web"
            },
            {
                name: "Aaron Leung",
                titles: "",
                roles: "Translator: Chinese"
            },
            {
                name: "Lingzhen Dong",
                titles: "",
                roles: "Translator: Chinese"
            },
            {
                name: "JSPO and ISPO Japan",
                titles: "Japanese Society for Prosthetics and Orthotics",
                roles: "Translator: Japanese"
            },
            {
                name: "Monica Castaneda",
                titles: "",
                roles: "Translator: Spanish"
            },
            {
                name: "Heinz Trebbin",
                titles: "",
                roles: "Translator: Spanish"
            },
            {
                name: "Serap Alsancak",
                titles: "",
                roles: "Translator: Turkish"
            },
            {
                name: "Pham Thuy",
                titles: "",
                roles: "Translator: Vietnamese"
            },
            {
                name: "Pierre Huet",
                titles: "",
                roles: "Translator: French"
            }
        ];
    }
    ngOnInit() { }
};
AcknowledgementPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-acknowledgement-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./acknowledgement-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/acknowledgement-page/acknowledgement-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./acknowledgement-page.component.scss */ "./src/app/pages/acknowledgement-page/acknowledgement-page.component.scss")).default]
    })
], AcknowledgementPageComponent);



/***/ }),

/***/ "./src/app/pages/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/header/header.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".banner {\n  width: 100%;\n  background-color: rgba(40, 32, 86, 0.93);\n  margin: 0;\n}\n\n.title-bar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n  display: flex;\n  flex-direction: row;\n}\n\n.title-image {\n  max-width: 600px;\n  width: 100%;\n}\n\n.title-text-bar {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: white;\n}\n\n.title {\n  margin: 0;\n}\n\n.sub-title {\n  margin: 0;\n}\n\n.nav-btns-bar {\n  margin-left: auto;\n  margin-right: auto;\n  width: 75%;\n  display: flex;\n}\n\n.nav-btns-bar-mobile {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  color: white;\n}\n\n.main-menu-btn {\n  margin-right: 0.5rem;\n}\n\n.nav-btn {\n  color: white;\n  text-align: center;\n  flex-grow: 1;\n}\n\n.icon {\n  height: 42px;\n  width: 42px;\n  padding: 1rem;\n}\n\n.background {\n  background-color: #9fbf37;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhZGVyL0M6XFxVc2Vyc1xcY3VydGlcXERlc2t0b3BcXElTUE8tTGV4aWNvbi1Gcm9udEVuZFxcaXNwb3Byb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFFQSx3Q0FBQTtFQUNBLFNBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQTtFQUVFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDMyLCA4NiwgMC45Myk7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udGl0bGUtYmFyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi50aXRsZS1pbWFnZSB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlLXRleHQtYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmF2LWJ0bnMtYmFyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2LWJ0bnMtYmFyLW1vYmlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1haW4tbWVudS1idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4ubmF2LWJ0biB7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8vIG1hcmdpbjogMCAwLjVyZW0gMCAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGhlaWdodDogNDJweDtcclxuICB3aWR0aDogNDJweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYmYzNztcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIiwiLmJhbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQwLCAzMiwgODYsIDAuOTMpO1xuICBtYXJnaW46IDA7XG59XG5cbi50aXRsZS1iYXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4udGl0bGUtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRpdGxlLXRleHQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmF2LWJ0bnMtYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hdi1idG5zLWJhci1tb2JpbGUge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1tZW51LWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ubmF2LWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiA0MnB4O1xuICB3aWR0aDogNDJweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZiZjM3O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");



let HeaderComponent = class HeaderComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buttonSelected = 1;
        this.currentLang = "En";
        this.tabletSizeAndAbove = true;
    }
    ngOnInit() {
        // Changes the view if the size is tablet and above
        this.breakpointObserver
            .observe(["(max-width: 768px)"])
            .subscribe((state) => {
            if (state.matches) {
                this.tabletSizeAndAbove = false;
            }
            else {
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
    changeWebsiteLanguage(language) {
        this.currentLang = language;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HeaderComponent.prototype, "buttonClicked", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/pages/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/lexicon-page/lexicon-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/lexicon-page/lexicon-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  width: 100%;\n}\n\n.search-div {\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n}\n\n@media (min-width: 769px) {\n  .search-div {\n    width: 50%;\n  }\n}\n\n@media (max-width: 768px) {\n  .search-div {\n    margin: 0.5rem;\n  }\n}\n\n.toggles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: flex-start;\n}\n\n.search-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: flex-start;\n  margin-top: 1rem;\n}\n\n@media (max-width: 768px) {\n  .search-buttons {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0;\n  }\n}\n\n.advancedSearchSettings {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n}\n\n@media (max-width: 768px) {\n  .advancedSearchSettings {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    margin-top: 0;\n  }\n}\n\n.advancedSearch {\n  align-self: flex-start;\n}\n\n.search {\n  align-self: flex-end;\n}\n\n.link-button {\n  padding: 0;\n}\n\n.basic-search-form {\n  margin-top: 0.5rem;\n}\n\n@media (max-width: 768px) {\n  .basic-search-form {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n}\n\n.user-input {\n  width: 100%;\n}\n\n.search-results {\n  margin: 0.5rem;\n  border: 0.5px solid lightgray;\n  border-radius: 25px;\n}\n\n.language-selectors {\n  display: flex;\n  margin: 0.5rem;\n  justify-content: center;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGV4aWNvbi1wYWdlL0M6XFxVc2Vyc1xcY3VydGlcXERlc2t0b3BcXElTUE8tTGV4aWNvbi1Gcm9udEVuZFxcaXNwb3Byb2plY3Qvc3JjXFxhcHBcXHBhZ2VzXFxsZXhpY29uLXBhZ2VcXGxleGljb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGV4aWNvbi1wYWdlL2xleGljb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREFFO0VBTkY7SUFPSSxVQUFBO0VDR0Y7QUFDRjs7QURERTtFQVZGO0lBV0ksY0FBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QURIRTtFQU5GO0lBT0ksbUJBQUE7SUFDQSxvQkFBQTtJQUNBLGFBQUE7RUNNRjtBQUNGOztBREhBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURMRTtFQUpGO0lBS0ksbUJBQUE7SUFDQSxvQkFBQTtJQUNBLGFBQUE7RUNRRjtBQUNGOztBRExBO0VBQ0Usc0JBQUE7QUNRRjs7QURMQTtFQUNFLG9CQUFBO0FDUUY7O0FETEE7RUFDRSxVQUFBO0FDUUY7O0FETEE7RUFDRSxrQkFBQTtBQ1FGOztBRFBFO0VBRkY7SUFHSSxtQkFBQTtJQUNBLG9CQUFBO0VDVUY7QUFDRjs7QURQQTtFQUNFLFdBQUE7QUNVRjs7QURQQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEUEE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xleGljb24tcGFnZS9sZXhpY29uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW46IDAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi50b2dnbGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmFkdmFuY2VkU2VhcmNoU2V0dGluZ3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5hZHZhbmNlZFNlYXJjaCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5saW5rLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJhc2ljLXNlYXJjaC1mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgbWFyZ2luOiAwLjVyZW07XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXNlbGVjdG9ycyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiIsIi5jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2gtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAuc2VhcmNoLWRpdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtZGl2IHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgfVxufVxuXG4udG9nZ2xlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnNlYXJjaC1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi5hZHZhbmNlZFNlYXJjaFNldHRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYWR2YW5jZWRTZWFyY2hTZXR0aW5ncyB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi5hZHZhbmNlZFNlYXJjaCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5cbi5zZWFyY2gge1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmxpbmstYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJhc2ljLXNlYXJjaC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5iYXNpYy1zZWFyY2gtZm9ybSB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxufVxuXG4udXNlci1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5sYW5ndWFnZS1zZWxlY3RvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuNXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/lexicon-page/lexicon-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/lexicon-page/lexicon-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LexiconPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexiconPageComponent", function() { return LexiconPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/search-service/search.service */ "./src/app/services/search-service/search.service.ts");
/* harmony import */ var src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api-service/api.service */ "./src/app/services/api-service/api.service.ts");





let LexiconPageComponent = class LexiconPageComponent {
    // tempTutorial: TempTutorial[];
    // error = "";
    // success = "";
    constructor(breakpointObserver, searchService, api) {
        this.breakpointObserver = breakpointObserver;
        this.searchService = searchService;
        this.api = api;
        this.tabletSizeAndAbove = true;
        this.searchInput = "";
        this.advancedSearchClosedAnimationComplete = true;
        this.advancedSearchOn = false;
    }
    ngOnInit() {
        // Changes the view if the size is tablet and above
        this.breakpointObserver
            .observe(["(max-width: 768px)"])
            .subscribe((state) => {
            if (state.matches) {
                this.tabletSizeAndAbove = false;
            }
            else {
                this.tabletSizeAndAbove = true;
                // Translate toggle not in advanced search when in computer view
                this.translateOn = this.searchService.translate;
                this.isoStandardOnlyOn = this.searchService.isoStandardOnly;
            }
        });
        this.getTable();
        // this.getTempTutorial();
        this.getSearchResults();
    }
    getSearchResults() {
        this.api.getSearchResults().subscribe((results) => (this.searchResults = results), (error) => (this.error = error));
    }
    // getTempTutorial(): void {
    //   this.searchService.getAll().subscribe(
    //     (res: TempTutorial[]) => {
    //       this.tempTutorial = res;
    //     },
    //     err => {
    //       this.error = err;
    //     }
    //   );
    // }
    search() {
        this.searchService.searchInput = this.searchInput;
        console.log("***Search Button Clicked***");
        this.searchService.dummySearch();
        console.log("***************************");
        this.searchResults.forEach(element => {
            console.log("DatabaseResult: " + element);
            console.log("DatabaseResult: " + element.toString());
            console.log("DatabaseResult: " + element.lang_name.toString());
        });
    }
    getTable() {
        this.searchService
            .getResults()
            .subscribe(searchResults => (this.searchResults = searchResults));
    }
    toggleTranslate(matSlideToggleChange) {
        this.translateOn = matSlideToggleChange.checked.valueOf();
        this.searchService.translate = this.translateOn;
    }
    toggleIsoStandardOnly(matSlideToggleChange) {
        this.isoStandardOnlyOn = matSlideToggleChange.checked.valueOf();
        this.searchService.isoStandardOnly = this.isoStandardOnlyOn;
        this.searchService.dummySearch(); // Make new query call with the updated value of ISO Standard Only toggle
    }
    toggleAdvancedSearch() {
        this.advancedSearchOn = !this.advancedSearchOn;
        if (this.advancedSearchOn) {
            this.advancedSearchClosedAnimationComplete = false;
        }
    }
    advancedSearchClosed(event) {
        this.advancedSearchClosedAnimationComplete = event;
    }
    advancedSearchOpen() {
        if (this.advancedSearchOn || !this.advancedSearchClosedAnimationComplete) {
            return true;
        }
        else {
            return false;
        }
    }
};
LexiconPageComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: src_app_services_search_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"] },
    { type: src_app_services_api_service_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
LexiconPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lexicon-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lexicon-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lexicon-page/lexicon-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lexicon-page.component.scss */ "./src/app/pages/lexicon-page/lexicon-page.component.scss")).default]
    })
], LexiconPageComponent);



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _lexicon_page_lexicon_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lexicon-page/lexicon-page.component */ "./src/app/pages/lexicon-page/lexicon-page.component.ts");
/* harmony import */ var _acknowledgement_page_acknowledgement_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./acknowledgement-page/acknowledgement-page.component */ "./src/app/pages/acknowledgement-page/acknowledgement-page.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/pages/header/header.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");















let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _lexicon_page_lexicon_page_component__WEBPACK_IMPORTED_MODULE_11__["LexiconPageComponent"],
            _acknowledgement_page_acknowledgement_page_component__WEBPACK_IMPORTED_MODULE_12__["AcknowledgementPageComponent"]
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_14__["ComponentModule"]
        ],
        providers: [],
        bootstrap: [],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _lexicon_page_lexicon_page_component__WEBPACK_IMPORTED_MODULE_11__["LexiconPageComponent"], _acknowledgement_page_acknowledgement_page_component__WEBPACK_IMPORTED_MODULE_12__["AcknowledgementPageComponent"]]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/services/api-service/api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/api-service/api.service.ts ***!
  \*****************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.apiRoot = "ec2-52-26-88-246.us-west-2.compute.amazonaws.com"; //link to django instance (make it the link to the instance on aws)
    }
    getSearchResults() {
        return this.http.get(this.apiRoot.concat("lexicon"));
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/search-service/search.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/search-service/search.service.ts ***!
  \***********************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_mock_language_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mock-language-database */ "./src/app/mock-language-database.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/enums */ "./src/app/models/enums.ts");





let SearchService = class SearchService {
    // constructor(private http: HttpClient) {}
    constructor() {
        // baseUrl =
        //   "http://ec2-44-229-252-18.us-west-2.compute.amazonaws.com/SamplePage.php";
        // tutorialResults: TempTutorial[];
        this.firstLangVal = src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["Language"].English; // Default English
        this.secondLangVal = src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["Language"].French; // Default French
        this.translateOn = true; // Default true
        this.isoStandardOnlyOn = false; // Default false
        this.criteria = src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchCriteria"].BeginsWith; // Default BeginsWith
        this.target = src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLWord; // Default First Column Word
        this.input = ""; // Default empty string
    }
    // Maybe do this a different way
    get firstLang() {
        return this.firstLangVal;
    }
    set firstLang(lang) {
        this.firstLangVal = lang;
    }
    get secondLang() {
        return this.secondLangVal;
    }
    set secondLang(lang) {
        this.secondLangVal = lang;
    }
    get translate() {
        return this.translateOn;
    }
    set translate(translate) {
        this.translateOn = translate;
    }
    get isoStandardOnly() {
        return this.isoStandardOnlyOn;
    }
    set isoStandardOnly(isoStandardOnly) {
        this.isoStandardOnlyOn = isoStandardOnly;
    }
    get searchCriteria() {
        return this.criteria;
    }
    set searchCriteria(searchCriteria) {
        this.criteria = searchCriteria;
    }
    get searchTarget() {
        return this.target;
    }
    set searchTarget(searchTarget) {
        this.target = searchTarget;
    }
    get searchInput() {
        return this.input;
    }
    set searchInput(searchInput) {
        this.input = searchInput;
    }
    // getAll(): Observable<TempTutorial[]> {
    //   return this.http.get("${this.baseUrl}/list").pipe(
    //     map(res => {
    //       this.tutorialResults = res["data"];
    //       return this.tutorialResults;
    //     }),
    //     catchError(this.handleError)
    //   );
    // }
    // private handleError(error: HttpErrorResponse) {
    //   console.log(error);
    //   return throwError("Error! something went wrong");
    // }
    // Setup for the future http.get call that will return an observable
    // For now it is just returning mock data
    getResults() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(src_app_mock_language_database__WEBPACK_IMPORTED_MODULE_2__["ROWS"]);
    }
    dummySearch() {
        // If translate on use the following search values in the backend call
        if (this.translateOn) {
            console.log("Search Text Input: " + this.input);
            console.log("First Langauge Selected: " + this.firstLangVal);
            console.log("Second Langauge Selected: " + this.secondLangVal);
            console.log("Translate: " + this.translateOn);
            console.log("ISO Standard Only: " + this.isoStandardOnlyOn);
            console.log("Criteria Selected: " + this.criteria);
            console.log("Target Selected: " + this.target);
        }
        else {
            // If translate off then use the following search values in the backend call
            console.log("Search Text Input: " + this.input);
            console.log("First Langauge Selected: " + this.firstLangVal);
            console.log("Translate: " + this.translateOn);
            console.log("ISO Standard Only: " + this.isoStandardOnlyOn);
            console.log("Criteria Selected: " + this.criteria);
            if (this.target === src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].SLDefinition ||
                this.target === src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].SLWord) {
                console.log("Target Selected: " + src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLWord); // If the target is the second lang column, use the default value
            }
            else {
                console.log("Target Selected: " + this.target);
            }
        }
    }
    // Remove second language options from drop down if translate is off
    getSearchTargetValues() {
        if (this.translate) {
            return [
                src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLWord,
                src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLDefinition,
                src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].SLWord,
                src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].SLDefinition
            ];
        }
        else {
            return [src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLWord, src_app_models_enums__WEBPACK_IMPORTED_MODULE_4__["SearchTarget"].FLDefinition];
        }
    }
};
SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SearchService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\curti\Desktop\ISPO-Lexicon-FrontEnd\ispoproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map