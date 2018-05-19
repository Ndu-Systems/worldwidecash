/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CashOutDreamComponent } from './cash-out-dream.component';

describe('CashOutDreamComponent', () => {
  let component: CashOutDreamComponent;
  let fixture: ComponentFixture<CashOutDreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashOutDreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashOutDreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
