import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../services/auth/auth.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  constructor( private fb: FormBuilder,private router:Router, private userService:AuthService){}
 

  registerForm!:FormGroup
  ngOnInit(): void {
    this.registerForm= this.fb.group({
      name:[null, [Validators.required, Validators.min(1)]],
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required, Validators.min(1)]],
      confirmPassword:[null, [Validators.required, Validators.min(1)]]  
    })
  }

  register(){
    let user:User = this.registerForm.value
    let users: User[] = [];
    console.log(this.registerForm.value)
     this.userService.postUser(user)
      .subscribe((response: User) => {
        console.log(response);

      //  console.log()
        // users.push({ name: response.name, email: response.email, password: response.password, isAdmin: response.isAdmin=false});
      });
 
  }
}
