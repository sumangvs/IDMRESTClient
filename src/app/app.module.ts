import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
 
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
 
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { AuthGuard} from './_guards/index';
import { ApplicationComponent } from './application/index';
import { ReactiveFormsModule }          from '@angular/forms';


import {AuthenticationService,ApplicationService} from './_services/index'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ApplicationComponent,
        ],
    providers: [
        AuthGuard,
        AuthenticationService,
        ApplicationService,
        ],
    
    bootstrap: [AppComponent]
})
 
export class AppModule { }