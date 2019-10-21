import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutHelpersComponent } from './without-helpers.component';

describe('WithoutHelpersComponent', () => {
  let component: WithoutHelpersComponent;
  let fixture: ComponentFixture<WithoutHelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithoutHelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithoutHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
