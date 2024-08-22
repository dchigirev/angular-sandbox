import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '@layouts/header-layout';
import { PageLayoutComponent } from '@layouts/page-layout';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PageLayoutComponent,
    HeaderLayoutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
