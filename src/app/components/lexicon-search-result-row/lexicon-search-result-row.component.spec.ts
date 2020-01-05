import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LexiconSearchResultRowComponent } from "./lexicon-search-result-row.component";

describe("LexiconSearchResultRowComponent", () => {
  let component: LexiconSearchResultRowComponent;
  let fixture: ComponentFixture<LexiconSearchResultRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LexiconSearchResultRowComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexiconSearchResultRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
