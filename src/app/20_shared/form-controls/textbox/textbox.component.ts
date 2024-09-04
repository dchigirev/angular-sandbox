import { ChangeDetectionStrategy, Component, forwardRef, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { filter, takeUntil, tap } from 'rxjs';
import { AbsctractFormControl } from '../abstract-form-control';

@Component({
  selector: 'app-textbox',
  standalone: true,
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    },
  ],
})
export class TextboxComponent extends AbsctractFormControl<string | null> implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() maxlength?: number;

  formControl = new FormControl('');

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.formControl.valueChanges
      .pipe(
        filter((value) => value !== this.value()),
        tap((value) => {
          this.value.set(value);
          this.propagateChange(value);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  override writeValue(value: string): void {
    this.value.set(value);
    this.formControl.setValue(value);
  }

  onBlur(): void {
    this.propagateTouched();
  }
}
