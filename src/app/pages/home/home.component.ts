import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../shared/layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

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
