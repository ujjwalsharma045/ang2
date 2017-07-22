/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FrontuserComponent } from './frontuser.component';

describe('FrontuserComponent', () => {
  let component: FrontuserComponent;
  let fixture: ComponentFixture<FrontuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
