import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxZoneComponent } from './box-zone.component';

describe('BoxZoneComponent', () => {
  let component: BoxZoneComponent;
  let fixture: ComponentFixture<BoxZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
