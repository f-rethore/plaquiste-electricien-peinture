import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatreriePage } from './platrerie.page';

describe('PlatreriePage', () => {
  let component: PlatreriePage;
  let fixture: ComponentFixture<PlatreriePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatreriePage],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatreriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
