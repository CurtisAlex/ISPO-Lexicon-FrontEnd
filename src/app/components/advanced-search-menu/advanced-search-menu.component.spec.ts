import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchMenuComponent } from './advanced-search-menu.component';

describe('AdvancedSearchMenuComponent', () => {
  let component: AdvancedSearchMenuComponent;
  let fixture: ComponentFixture<AdvancedSearchMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
