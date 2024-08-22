import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '@layouts/header-layout';
import { PageLayoutComponent } from '@layouts/page-layout';

@Component({
  selector: 'app-form-controls',
  standalone: true,
  imports: [
    PageLayoutComponent,
    HeaderLayoutComponent,
  ],
  templateUrl: './form-controls.component.html',
  styleUrl: './form-controls.component.scss'
})
export class FormControlsComponent {

}
