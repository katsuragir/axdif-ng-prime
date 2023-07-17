import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerAuthComponent } from './components/banner-auth/banner-auth.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SliderModule } from 'primeng/slider';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { ButtonComponent } from './components/button/button.component';
import { FormControlPipe } from './pipe/formControl.pipe';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';

@NgModule({
    declarations: [BannerAuthComponent, InputFieldComponent, CheckboxFieldComponent, ButtonComponent, FormControlPipe],
    imports: [
        CommonModule,
        InputTextModule,
        PasswordModule,
        InputMaskModule,
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        ColorPickerModule,
        CascadeSelectModule,
        MultiSelectModule,
        ToggleButtonModule,
        SliderModule,
        InputTextareaModule,
        RadioButtonModule,
        InputTextModule,
        RatingModule,
        ChipModule,
        KnobModule,
        InputSwitchModule,
        ListboxModule,
        SelectButtonModule,
        CheckboxModule,
        ButtonModule,
        ReactiveFormsModule,
        DividerModule,
        MessagesModule
    ],
    providers: [
        FormControlPipe,
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputFieldComponent),
            multi: true,
        }
    ],
    exports: [
        BannerAuthComponent,
        InputTextModule,
        InputFieldComponent,
        PasswordModule,
        InputMaskModule,
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        ColorPickerModule,
        CascadeSelectModule,
        MultiSelectModule,
        ToggleButtonModule,
        SliderModule,
        InputTextareaModule,
        RadioButtonModule,
        InputTextModule,
        RatingModule,
        ChipModule,
        KnobModule,
        InputSwitchModule,
        ListboxModule,
        SelectButtonModule,
        CheckboxModule,
        ButtonModule,
        ReactiveFormsModule,
        CheckboxFieldComponent,
        ButtonComponent,
        FormControlPipe,
        DividerModule,
        MessagesModule
    ],
})
export class SharedModule {}
