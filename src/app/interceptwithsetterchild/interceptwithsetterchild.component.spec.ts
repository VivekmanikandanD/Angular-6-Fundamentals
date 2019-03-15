import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptwithsetterchildComponent } from './interceptwithsetterchild.component';

describe('InterceptwithsetterchildComponent', () => {
  let component: InterceptwithsetterchildComponent;
  let fixture: ComponentFixture<InterceptwithsetterchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptwithsetterchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptwithsetterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
