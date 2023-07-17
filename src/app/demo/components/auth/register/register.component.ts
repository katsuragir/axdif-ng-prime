import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registFormGroup!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {

    }

    ngOnInit(): void {
        this.createForm();
    }

    /**
   * @summary : create form with validator
   * @type {function} createForm
   */
  createForm() {
    this.registFormGroup = this.fb.group(
      {
        company: ['', Validators.required],
        fullName: ['', Validators.required],
        email: ['', Validators.email],
        codeCountry: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', Validators.required],
        confirm: ['', Validators.required],
        letter: [''],
        term: ['', Validators.required]
      }
    );
  }

  handleSubmit() {
    console.log(this.registFormGroup);
    if (this.registFormGroup.invalid) {
        return;
    }

    const { company, fullName, email, codeCountry, phone, password, confirm, letter, term } = this.registFormGroup.value;

    if (password !== confirm || term === '') {
        return;
    }

    const user = {
        company, fullName, email, codeCountry, phone, password
    }

    this.authService.register(user);

    this.router.navigateByUrl('/auth/success');
  }
}
