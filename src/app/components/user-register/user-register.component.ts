import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerUserForm = this.formBuilder.group({
      uName:[''],
      password:[''],
      fName:[''],
      lName:[''],
      email:['']
    });
  }


  registerUser(){

  }

  checkUnique(){
    
  }
}
