import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss'],
})
export class MenuTabComponent {
  public pages = ['home', 'platrerie', 'electricite', 'peinture'];
  public pageActive: WritableSignal<string> = signal('');
  constructor(private router: Router) {}

  public goToPage(page: string): void {
    this.pageActive.update((p) => (p = page));
    this.router.navigate([`/${page}`]);
  }
}
