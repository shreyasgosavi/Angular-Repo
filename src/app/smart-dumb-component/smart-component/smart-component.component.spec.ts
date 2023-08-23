import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Smar-C-Component } from './smart-component.component';

describe('SmartComponentComponent', () => {
  let component: Smar-C-Component;
  let fixture: ComponentFixture<Smar-C-Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Smar-C-Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Smar-C-Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
