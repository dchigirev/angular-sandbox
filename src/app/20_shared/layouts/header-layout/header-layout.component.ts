import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DebugService } from '../../services/debug/debug.service';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {
  debug = inject(DebugService);
}
