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

export class sharedservice{
  readonly url ="http://127.0.0.1:8000";


headers:{
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
};
  constructor(private http:HttpClient){}

  getusers():Observable<any[]>{
   return this.http.get<any[]>(this.url+'/getusers');
  }
  login(val:any){
    return this.http.post(this.url+'/login',val);
  }

  logout():Observable<any>{
    return this.http.get(this.url+'/logout');
  }

  createuser(val:any){
    return this.http.post(this.url+'/addusers',val);
  }

  verifuserid(val:any):Observable<any>{
    return this.http.get<any>(this.url+'/finduserbyid/'+val);
  }
}
