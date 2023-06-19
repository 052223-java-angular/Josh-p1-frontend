import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterPayload } from 'src/app/models/register-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService) {}
  
  ngOnInit(): void{
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

submitForm(): void {
  if (this.registerForm.invalid) {
    const username = this.registerForm.controls['username'].value;
    if (username.length === 0) {
      this.registerForm.controls['username'].markAsTouched();
    }

    this.registerForm.controls['username'].markAsTouched();
    this.registerForm.controls['password'].markAsTouched();
    this.registerForm.controls['confirmPassword'].markAsTouched();
    this.registerForm.reset();
    return;
  }

  const payload: RegisterPayload = {
    username: this.registerForm.controls['username'].value,
    password: this.registerForm.controls['password'].value,
    confirmPassword: this.registerForm.controls['confirmPassword'].value,
  }

  this.authService.register(payload).subscribe({
    next: value => {
      // Handle the success response
      this.toastr.success("Registration Successful");
      this.router.navigate(['/login'])
    },
    error: error => {
      // Handle the error response
      console.log(error.error.message);
      this.toastr.error(error.error.message);
      
    }
  })
}

}
