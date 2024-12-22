import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BeforeAfterComponent } from './before-after.component';

describe('ReturnHeaderComponent', () => {
  let component: BeforeAfterComponent;
  let fixture: ComponentFixture<BeforeAfterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BeforeAfterComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
