import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchshowComponent } from './searchshow.component';

describe('SearchshowComponent', () => {
  let component: SearchshowComponent;
  let fixture: ComponentFixture<SearchshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
