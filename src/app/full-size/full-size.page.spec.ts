import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSizePage } from './full-size.page';

describe('PlatreriePage', () => {
  let component: FullSizePage;
  let fixture: ComponentFixture<FullSizePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullSizePage],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(FullSizePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
