import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( private fb: FormBuilder,private router:Router){}

  registerForm!:FormGroup
  ngOnInit(): void {
    this.registerForm= this.fb.group({
      name:['', Validators.required],
      email:['', Validators.required, Validators.email],
      password:['', Validators.required],
      confirm_password:['', Validators.required]  
    })
  }

  register(){
    console.log("wueh")
  }
}
