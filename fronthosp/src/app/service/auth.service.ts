import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/*const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};*/



@Injectable({
        providedIn: 'root'
      })

export class authservice{
  readonly url ="http://127.0.0.1:8000";


headers:{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
};
  constructor(private http:HttpClient){}


 login(val:any){
    return this.http.post(this.url+'/login',val);
  }
}
