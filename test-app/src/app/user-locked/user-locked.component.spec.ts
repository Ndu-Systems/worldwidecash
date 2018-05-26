/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserLockedComponent } from './user-locked.component';

describe('UserLockedComponent', () => {
  let component: UserLockedComponent;
  let fixture: ComponentFixture<UserLockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
