import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss']
})
export class CheckboxFieldComponent {

    @Input() label?:string;
    @Input() static: boolean = false;
    @Input() controlName!: FormControl;
    @Input() disabled!: boolean;
    @Input() name!: string;

    constructor() {
    }


}
