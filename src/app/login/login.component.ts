	
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import {AuthenticationService} from '../_services/index' 

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
   
      constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
     this.returnUrl = '';
      if (localStorage.getItem('token')) {
             this.authenticationService.logout(localStorage.getItem('token'))
             .subscribe(
                data => {
                    console.log('Init navigate');
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                     this.loading = false;
                });
       }
     
    }
 
     login() {
        this.loading = true;
        this.authenticationService.login(this.model.username,this.model.password)
            .subscribe(
                data => {
                    console.log('before navigate');
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                     this.loading = false;
                });

    }
}