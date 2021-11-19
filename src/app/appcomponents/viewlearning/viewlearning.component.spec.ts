import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlearningComponent } from './viewlearning.component';

describe('ViewlearningComponent', () => {
  let component: ViewlearningComponent;
  let fixture: ComponentFixture<ViewlearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
