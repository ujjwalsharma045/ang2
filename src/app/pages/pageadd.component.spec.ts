/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageaddComponent } from './pageadd.component';

describe('PageaddComponent', () => {
  let component: PageaddComponent;
  let fixture: ComponentFixture<PageaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
