import { Component, OnInit } from '@angular/core';
import { getFieldListResponse,AppFieldDef} from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router'; 
import {ApplicationService} from '../_services/index' 

import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@Component({
    moduleId: module.id,
    templateUrl: 'application.component.html'
}) 
 
export class ApplicationComponent implements OnInit {
    
     filedList :getFieldListResponse;
     appname:string;
     form1: FormGroup;

     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private appService: ApplicationService) { }



    ngOnInit() {
          if (localStorage.getItem('token')) {

             this.appname = '';
          

             this.route.params.subscribe(params => {
                       this.appname = params['appname']; // (+) converts string 'id' to a number
                     });

            console.log(this.appname);

             this.appService.getFieldsList(localStorage.getItem('token'),this.appname)
             .subscribe (data =>
             {  
                 this.filedList = data; 
                 localStorage.setItem('token',this.filedList.licenseField);            
            });
         }
    }

    searchRecords()
    {
    }
}
