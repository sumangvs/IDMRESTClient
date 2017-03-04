import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {


        let headers = new Headers();
        headers.append('Content-Type', 'application/json');      
        let options = new RequestOptions({ headers: headers });


  return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/Account/login',JSON.stringify({ Email: username, Password: password }),options) 
                        .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.LicenseKey) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', user.LicenseKey);
                    console.log(user.LicenseKey);
                }
            });

       }

    logout(license:string) {
        // remove user from local storage to log user out
       console.log('logout');
       //var lic = license.replace(/"/g,'');
       console.log(license);
       let headers = new Headers();
        headers.append('Content-Type', 'application/json');      
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/Account/logout',JSON.stringify({ License:license }),options) 
                        .map((response: Response) => {
                // login successful if there's a jwt token in the response
                    localStorage.removeItem('token');
               
            });
           
        
    }
}