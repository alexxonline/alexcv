import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeaderContainerComponent } from './section-header-container.component';

describe('SectionHeaderContainerComponent', () => {
  let component: SectionHeaderContainerComponent;
  let fixture: ComponentFixture<SectionHeaderContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHeaderContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHeaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
