import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithHelpersComponent } from './with-helpers.component';

describe('WithHelpersComponent', () => {
  let component: WithHelpersComponent;
  let fixture: ComponentFixture<WithHelpersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithHelpersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithHelpersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
