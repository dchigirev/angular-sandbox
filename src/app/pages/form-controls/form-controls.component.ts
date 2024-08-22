import { Component } from '@angular/core';
import { HeaderLayoutComponent } from '../../shared/layouts/header-layout/header-layout.component';
import { PageLayoutComponent } from '../../shared/layouts/page-layout/page-layout.component';

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
