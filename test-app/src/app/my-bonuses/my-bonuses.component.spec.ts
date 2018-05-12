/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyBonusesComponent } from './my-bonuses.component';

describe('MyBonusesComponent', () => {
  let component: MyBonusesComponent;
  let fixture: ComponentFixture<MyBonusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBonusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBonusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
