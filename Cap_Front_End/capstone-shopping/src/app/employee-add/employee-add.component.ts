import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  registerRef = new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required])
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  register(){
    let registerForm = this.registerRef.value;

    /*let data = new employeeModel({
    firstName:registerForm.firstName,
    lastName:registerForm.lastName,
    email:registerForm.email,
    password:registerForm.password,})*/

    this.registerRef.reset();
  }
}
