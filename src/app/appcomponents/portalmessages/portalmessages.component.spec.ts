import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalmessagesComponent } from './portalmessages.component';

describe('PortalmessagesComponent', () => {
  let component: PortalmessagesComponent;
  let fixture: ComponentFixture<PortalmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalmessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
