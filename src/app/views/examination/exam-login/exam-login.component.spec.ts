import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamLoginComponent } from './exam-login.component';

describe('ExamLoginComponent', () => {
  let component: ExamLoginComponent;
  let fixture: ComponentFixture<ExamLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
