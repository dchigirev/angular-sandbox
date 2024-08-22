import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugService {
  public isDebug = signal(false);

  toggle(): void {
    this.isDebug.set(!this.isDebug());
  }
}
