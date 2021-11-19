import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectportalComponent } from './selectportal.component';

describe('SelectportalComponent', () => {
  let component: SelectportalComponent;
  let fixture: ComponentFixture<SelectportalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectportalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
