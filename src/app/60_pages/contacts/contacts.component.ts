import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '@layouts/header-layout';
import { PageLayoutComponent } from '@layouts/page-layout';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    PageLayoutComponent,
    HeaderLayoutComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
