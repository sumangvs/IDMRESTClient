import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';

import { LoginComponent } from './login/index';

import { ApplicationComponent } from './application/index';

import { AuthGuard } from './_guards/index';
const appRoutes: Routes = [
    { path: ''           , component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'application', component: ApplicationComponent},
    { path: 'login'      , component: LoginComponent },
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);