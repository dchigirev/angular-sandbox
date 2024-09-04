import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from '@layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { SideNavLayoutComponent } from '@layouts/side-nav-layout/side-nav-layout.component';
import { DebugService } from '@services/debug/debug.service';
import { LogoComponent } from '@ui/logo/logo.component';
import { NavigationComponent, INavigationItem } from '@ui/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PageLayoutComponent,
    SideNavLayoutComponent,
    HeaderLayoutComponent,
    LogoComponent,
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  debug = inject(DebugService);
  title = 'angular-sandbox';

  baseNavigationItems: INavigationItem[] = [
    {
      label: "Home",
      routerLink: "home"
    },
    {
      label: "Contacts",
      routerLink: "contacts"
    }
  ];

  navigationItems: INavigationItem[] = [
    {
      label: "Form Controls",
      routerLink: "form-controls"
    },
  ]
}
