import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { exit } from 'process';
import {sharedservice} from "../../service/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
iduser:string;
role=['admin','medecin','psycho','aps','legal'];
userole="psycho";
loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private Route:Router,private service:sharedservice) {
     this.loginForm = this.formBuilder.group({
        nom: ['', [Validators.required]
        ],
        password: ['', [Validators.required, Validators.minLength(3)]]
      })
   }

  ngOnInit() {
    this.getusers();
  }
  submit(){
    let form={
       'nom':this.loginForm.value['nom'],
       'password':this.loginForm.value['password']
    };

   this.service.login(form).subscribe(data=>{
     if(data===false){
        alert(data);
     }else{
        
       for(const key in data){
         this.iduser=data[key].id_user;
         if(data[key].role=="admin"){
          this.Route.navigate(["aps",data[key].id_user]);
         }
     
       }
       
       //this.Route.navigate(["aps"],{queryParams:{datas:this.iduser}});
       
     }
   })
    /*
      if('admin'==this.userole)
      {
       this.Route.navigate(['billet']);
      }else if('medecin'==this.userole)
      {
        this.Route.navigate(['medecin']);
      }else if('psycho'==this.userole)
      {
        this.Route.navigate(['psycho']);
      }else if('juriste'==this.userole)
      {
        this.Route.navigate(['juriste']);
      }
      else{
        console.log('not known');
      }*/

  }
 getusers(){
  this.service.getusers().subscribe(data=>{
     console.log(data);
  });
 }
  createuser(){

    let form={
        Tel: "+243994480142",
        date_update: "2020-02-10T11:02:04Z",
        email: "schadrackkabinzo@gmail.com",
        id_user: 2,
        is_active: false,
        nom: "cia",
        password: "1234",
        photo: "hope.jog",
        postnom: "hope",
        role:"admin"
      }

      this.service.createuser(form).subscribe(data=>{
        console.log(data);
      });


 }
 }
function forEach() {
  throw new Error('Function not implemented.');
}

