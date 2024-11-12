import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuTabComponent } from './menu-tab.component';

describe('ReturnHeaderComponent', () => {
  let component: MenuTabComponent;
  let fixture: ComponentFixture<MenuTabComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTabComponent],
      imports: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
