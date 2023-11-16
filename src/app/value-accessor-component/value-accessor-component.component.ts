import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-value-accessor-component',
  templateUrl: './value-accessor-component.component.html',
  styleUrls: ['./value-accessor-component.component.scss']
})
export class ValueAccessorComponent implements OnInit  {
  form!:FormGroup;

  get locked(){
    return this.form.get('locked');
  }
  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      itemName:'',
      locked: new FormControl({value:true, disabled:false})
    })
  }

  onAddItem(){
    console.log('>> form',this.form.value);
  }

  onLockToggle(){
    this.locked?.setValue(!this.locked.value);
  }
}
