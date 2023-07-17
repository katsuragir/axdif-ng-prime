import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SuccessComponent } from './success/success.component';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ],
    declarations: [
      RegisterComponent,
      SuccessComponent
    ]
})
export class AuthModule { }
