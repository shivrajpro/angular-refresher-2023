import { Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-lock-input',
  templateUrl: './lock-input.component.html',
  styleUrls: ['./lock-input.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: LockInputComponent,
      multi: true
    }
  ]
})
export class LockInputComponent implements ControlValueAccessor {

  onChanged = (value:boolean)=>{};
  onTouched = ()=>{};
  value = false;
  disabled = false;

  writeValue(obj: any): void {
    this.value = obj;
    // console.log('>> in write value',this.value);
    // at the time of initialization and whenever the value changes
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
    // console.log('>> in registerOnChange');
    // at initialization only
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // console.log('>> in registerOnTouched');
    // at initialization only
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    console.log('>> in setDisabledState');
    // at initialization only
  }

  setValue(){
    if(this.disabled) return;
    this.value = !this.value;
    console.log('>> in setvalue',this.value);
    this.onChanged(this.value);
    this.onTouched();
  }

}
