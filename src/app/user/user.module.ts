import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [CommonModule, SharedModule, ReactiveFormsModule, FormsModule, AuthModalComponent, LoginComponent, RegisterComponent],
    exports: [AuthModalComponent],
})
export class UserModule {}
