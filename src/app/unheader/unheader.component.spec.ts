/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnheaderComponent } from './unheader.component';

describe('UnheaderComponent', () => {
  let component: UnheaderComponent;
  let fixture: ComponentFixture<UnheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
