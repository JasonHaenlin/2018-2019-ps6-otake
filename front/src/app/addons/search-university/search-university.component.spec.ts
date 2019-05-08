import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniversityComponent } from './search-university.component';

describe('SearchUniversityComponent', () => {
  let component: SearchUniversityComponent;
  let fixture: ComponentFixture<SearchUniversityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUniversityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
