import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DebugService } from '../../services/debug/debug.service';

@Component({
  selector: 'app-page-layout',
  standalone: true,
  imports: [],
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLayoutComponent {
  debug = inject(DebugService);
}
