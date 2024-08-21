import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from './shared/layouts/page-layout/page-layout.component';
import { SideNavLayoutComponent } from './shared/layouts/side-nav-layout/side-nav-layout.component';
import { DebugService } from './shared/services/debug/debug.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageLayoutComponent, SideNavLayoutComponent, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  debug = inject(DebugService);
  title = 'angular-sandbox';
}
