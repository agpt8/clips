import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = new UntypedFormControl('', [Validators.required, Validators.minLength(3)]);
  email = new UntypedFormControl('', [Validators.required, Validators.email]);
  age = new UntypedFormControl('', [
    Validators.required,
    Validators.min(18),
    Validators.max(120),
  ]);
  password = new UntypedFormControl('', [
    Validators.required,
    // - at least 8 characters
    // - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
    // - Can contain special characters
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
  ]);
  confirmPassword = new UntypedFormControl('', [Validators.required]);
  phoneNumber = new UntypedFormControl('', [
    Validators.required,
    Validators.min(13),
    Validators.max(13),
  ]);

  registerForm: UntypedFormGroup = new UntypedFormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber,
  });

  showAlert = false;
  alertMsg = 'Please wait while we create your account.';
  alertColor = 'blue';

  registerUser(): void {
    this.showAlert = true;
    this.alertMsg = 'Please wait while we create your account.';
    this.alertColor = 'blue';
  }
}
