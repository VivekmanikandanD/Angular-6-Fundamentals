import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentforviewchildComponent } from './parentforviewchild.component';

describe('ParentforviewchildComponent', () => {
  let component: ParentforviewchildComponent;
  let fixture: ComponentFixture<ParentforviewchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentforviewchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentforviewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
