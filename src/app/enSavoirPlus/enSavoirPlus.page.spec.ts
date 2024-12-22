import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnSavoirPlusPage } from './enSavoirPlus.page';

describe('EnSavoirPlusPage', () => {
  let component: EnSavoirPlusPage;
  let fixture: ComponentFixture<EnSavoirPlusPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnSavoirPlusPage],
      schemas: [],
    }).compileComponents();

    fixture = TestBed.createComponent(EnSavoirPlusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
