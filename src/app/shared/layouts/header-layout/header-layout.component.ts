import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { DebugService } from '../../services/debug/debug.service';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderLayoutComponent {
  debug = inject(DebugService);
}
