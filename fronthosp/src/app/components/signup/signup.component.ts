import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

role=['admin','medecin','psycho','aps'];


  generalInfoForm: FormGroup;
  additionalInfoForm: FormGroup;
  facebookForm: FormGroup;

  constructor(private formBuilder:FormBuilder,private Route:Router) {

    this.generalInfoForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      nickname : ['', Validators.required],
      username : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
    this.additionalInfoForm = this.formBuilder.group({
       code: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.pattern('[a-z0-9]*')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role : ['', Validators.required]
    });
    this.facebookForm = this.formBuilder.group({
        'access_token': ['', Validators.required],
        'account_type': ['', Validators.required],
        'country' : ['', Validators.required]
      })
  }

  ngOnInit() {
  }

  submit(){
    this.role.forEach((element)=>{
       if(element=='admin'){
        this.Route.navigate(['billet']);
       }
    })
      //
  }
}
