import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DebugService } from '../../services/debug/debug.service';

@Component({
  selector: 'app-side-nav-layout',
  standalone: true,
  imports: [],
  templateUrl: './side-nav-layout.component.html',
  styleUrl: './side-nav-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavLayoutComponent {
  debug = inject(DebugService);
}
