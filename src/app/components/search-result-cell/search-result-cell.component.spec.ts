import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultCellComponent } from './search-result-cell.component';

describe('SearchResultCellComponent', () => {
  let component: SearchResultCellComponent;
  let fixture: ComponentFixture<SearchResultCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
