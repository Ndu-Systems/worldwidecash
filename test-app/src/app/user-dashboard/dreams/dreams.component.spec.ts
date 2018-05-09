/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DreamsComponent } from './dreams.component';

describe('DreamsComponent', () => {
  let component: DreamsComponent;
  let fixture: ComponentFixture<DreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
