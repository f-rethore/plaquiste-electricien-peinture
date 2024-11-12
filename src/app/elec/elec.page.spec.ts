import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecPage } from './elec.page';

describe('PlatreriePage', () => {
  let component: ElecPage;
  let fixture: ComponentFixture<ElecPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElecPage],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(ElecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
