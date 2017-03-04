import { Component, OnInit } from '@angular/core';
import { User , Applications, AppDefs} from '../_models/index';
import { Router, ActivatedRoute } from '@angular/router'; 
import {ApplicationService} from '../_services/index' 

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
}) 
 
export class HomeComponent implements OnInit {
    
     allApplications: Applications;
   

     constructor(
        private route: ActivatedRoute,
        private router: Router,
        private appService: ApplicationService) { }



    ngOnInit() {
          if (localStorage.getItem('token')) {
             this.appService.getApplist(localStorage.getItem('token'))
             .subscribe (data  =>
             {  
                 this.allApplications = data; 
                 localStorage.setItem('token',this.allApplications.licenseField);            
            });
         }
    }

    SelectApplication(myApp: AppDefs)
    {
          console.log(myApp.nameField);
          this.router.navigate(['/application', { appname: myApp.nameField  } ]);

    }
    
 
}