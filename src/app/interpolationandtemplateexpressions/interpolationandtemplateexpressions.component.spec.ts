import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationandtemplateexpressionsComponent } from './interpolationandtemplateexpressions.component';

describe('InterpolationandtemplateexpressionsComponent', () => {
  let component: InterpolationandtemplateexpressionsComponent;
  let fixture: ComponentFixture<InterpolationandtemplateexpressionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationandtemplateexpressionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationandtemplateexpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
