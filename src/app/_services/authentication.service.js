"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/Account/login', JSON.stringify({ Email: username, Password: password }), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.LicenseKey) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.LicenseKey);
                console.log(user.LicenseKey);
            }
        });
    };
    AuthenticationService.prototype.logout = function (license) {
        // remove user from local storage to log user out
        console.log('logout');
        //var lic = license.replace(/"/g,'');
        console.log(license);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://10.96.9.32/HealthcareHTTPService/api/Account/logout', JSON.stringify({ License: license }), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            localStorage.removeItem('token');
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map