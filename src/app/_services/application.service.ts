import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class ApplicationService {
    constructor(private http: Http) { }


  getApplist(license:string)
  {
      
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');      
        let options = new RequestOptions({ headers: headers });

         return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/AppServices/GetAppList',JSON.stringify({ License:license }),options) 
                        .map(response => response.json());

  }


  getFieldsList(license:string, appname:string)
  {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');      
        let options = new RequestOptions({ headers: headers });

        return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/AppServices/GetFieldNames',JSON.stringify({ License: license, AppName: appname }),options) 
                        .map(response => response.json());
           
  }
  

}