import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Auth } from 'src/app/models/auth';
import { LoginPayload } from 'src/app/models/login-payload';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup

  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  
  submitForm(): void {
    if (this.loginForm.invalid) {
      this.loginForm.controls['username'].markAsTouched();
      this.loginForm.controls['password'].markAsTouched();
      this.loginForm.reset();
      return;
    }
  
    const payload: LoginPayload = {
      username: this.loginForm.controls['username'].value,
      password: this.loginForm.controls['password'].value,
    }
  
    this.authService.login(payload).subscribe({
      next: value => {
        // Handle the success response
        const auth: Auth = { ...value };
        localStorage.setItem('auth', JSON.stringify(auth));
        this.toastr.success("Login Successful");
        this.router.navigate(['/home'])
      },
      error: error => {
        // Handle the error response
        this.toastr.error(error.error.message);
        
      }
    })
  }
  
  }
  
