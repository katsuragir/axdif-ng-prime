import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {

    @Input() label!: string;
    @Input() placeHolder!: string;
    @Input() type!: 'text' | 'password' | 'phone' | 'number' | 'email';
    @Input() controlName!: FormControl;
    @Input() disabled!: boolean;
    @Input() maxLength!: string;
    @Input() name!: string;
    @Input() id!: string;
    codeCountry!: string;

    constructor( ) {}


}
