import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface INavigationItem {
  label: string;
  routerLink: string;
  icon?: string;
  is_disabled?: boolean;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @Input() items: INavigationItem[] = [];
}
