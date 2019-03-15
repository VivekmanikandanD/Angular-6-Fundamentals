import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinteractionchildComponent } from './componentinteractionchild.component';

describe('ComponentinteractionchildComponent', () => {
  let component: ComponentinteractionchildComponent;
  let fixture: ComponentFixture<ComponentinteractionchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentinteractionchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinteractionchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
