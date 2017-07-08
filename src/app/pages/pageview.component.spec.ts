/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageviewComponent } from './pageview.component';

describe('PageviewComponent', () => {
  let component: PageviewComponent;
  let fixture: ComponentFixture<PageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
