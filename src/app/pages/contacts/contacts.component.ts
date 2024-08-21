import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../shared/layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    PageLayoutComponent,
    HeaderLayoutComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
