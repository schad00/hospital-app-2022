import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {sharedservice} from "../../service/users.service";

@Component({
  selector: 'app-apsdata',
  templateUrl: './apsdata.component.html',
  styleUrls: ['./apsdata.component.css']
})
export class ApsdataComponent implements OnInit {

  constructor(private route:ActivatedRoute,private verif:sharedservice,private Route:Router) { }
 iduser:number;
 private sub;
  ngOnInit():void {
    //get url id
    this.sub=this.route.paramMap.subscribe(params=>{
          this.iduser=+params.get('iduser');
          console.log(this.iduser);
      });
      this.verif.verifuserid(this.iduser).subscribe(data=>{
        if(data==true){

        }else{
          this.Route.navigate(['/login']);
        }
      })

    
}

logout(){
 this.verif.logout();
 this.Route.navigate(['/login']);
}
}
