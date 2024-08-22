import { Directive, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export class AbsctractFormControl<T> implements OnDestroy, OnInit {
  /**
   * Input label
   */
  @Input() label = '';
  /**
   * Input placeholder
   */
  @Input() placeholder = '';

  isDisabled = false;
  value = signal<T>(null as T);
  destroy$ = new Subject<null>();

  constructor() {
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  /** ControlValueAccessor begin */

  propagateChange: any = () => { };
  propagateTouched: any = () => { };

  writeValue(value: T): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  /** ControlValueAccessor end */
}
