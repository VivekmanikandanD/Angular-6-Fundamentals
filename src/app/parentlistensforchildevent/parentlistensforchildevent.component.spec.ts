import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentlistensforchildeventComponent } from './parentlistensforchildevent.component';

describe('ParentlistensforchildeventComponent', () => {
  let component: ParentlistensforchildeventComponent;
  let fixture: ComponentFixture<ParentlistensforchildeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentlistensforchildeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentlistensforchildeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
