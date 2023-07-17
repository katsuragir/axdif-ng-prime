import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    valCheck: string[] = ['remember'];

    loginFormGroup!: FormGroup;

    constructor(
        public layoutService: LayoutService,
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() {
        this.createForm();
    }

    /**
   * @summary : create form with validator
   * @type {function} createForm
   */
  createForm() {
    this.loginFormGroup = this.fb.group(
      {
        email: ['', Validators.email],
        password: ['', Validators.required],
      }
    );
  }

  handleSubmit() {
    console.log(this.loginFormGroup);
    if (this.loginFormGroup.invalid) {
        return;
    }

    const { email, password } = this.loginFormGroup.value;

    const user = {
        email, password
    }

    const result = this.authService.login(user);

    if (result === true) {
        this.router.navigateByUrl('/dashboard');
    }

  }
}
