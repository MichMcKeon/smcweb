import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickshowComponent } from './clickshow.component';

describe('ClickshowComponent', () => {
  let component: ClickshowComponent;
  let fixture: ComponentFixture<ClickshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
