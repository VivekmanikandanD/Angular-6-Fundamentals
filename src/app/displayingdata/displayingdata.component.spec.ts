import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayingdataComponent } from './displayingdata.component';

describe('DisplayingdataComponent', () => {
  let component: DisplayingdataComponent;
  let fixture: ComponentFixture<DisplayingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
