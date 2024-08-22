import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(
        (m) => m.HomeComponent,
      ),
  },
  {
    path: 'contacts',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (m) => m.ContactsComponent,
      ),
  },
  {
    path: 'form-controls',
    loadComponent: () =>
      import('./pages/form-controls/form-controls.component').then(
        (m) => m.FormControlsComponent,
      ),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
