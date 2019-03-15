import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptwithngonchangeschildComponent } from './interceptwithngonchangeschild.component';

describe('InterceptwithngonchangeschildComponent', () => {
  let component: InterceptwithngonchangeschildComponent;
  let fixture: ComponentFixture<InterceptwithngonchangeschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptwithngonchangeschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptwithngonchangeschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
