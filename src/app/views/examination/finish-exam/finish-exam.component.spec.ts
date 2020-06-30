import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishExamComponent } from './finish-exam.component';

describe('FinishExamComponent', () => {
  let component: FinishExamComponent;
  let fixture: ComponentFixture<FinishExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
