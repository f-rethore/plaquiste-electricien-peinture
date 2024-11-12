import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeinturePage } from './peinture.page';

describe('PlatreriePage', () => {
  let component: PeinturePage;
  let fixture: ComponentFixture<PeinturePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeinturePage],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(PeinturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
