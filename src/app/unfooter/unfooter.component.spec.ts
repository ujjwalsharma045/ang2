/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnfooterComponent } from './unfooter.component';

describe('UnfooterComponent', () => {
  let component: UnfooterComponent;
  let fixture: ComponentFixture<UnfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
