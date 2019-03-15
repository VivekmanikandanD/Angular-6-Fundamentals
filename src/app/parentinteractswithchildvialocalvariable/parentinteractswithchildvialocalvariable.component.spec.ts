import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentinteractswithchildvialocalvariableComponent } from './parentinteractswithchildvialocalvariable.component';

describe('ParentinteractswithchildvialocalvariableComponent', () => {
  let component: ParentinteractswithchildvialocalvariableComponent;
  let fixture: ComponentFixture<ParentinteractswithchildvialocalvariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentinteractswithchildvialocalvariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentinteractswithchildvialocalvariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
