import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalchatComponent } from './portalchat.component';

describe('PortalchatComponent', () => {
  let component: PortalchatComponent;
  let fixture: ComponentFixture<PortalchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
