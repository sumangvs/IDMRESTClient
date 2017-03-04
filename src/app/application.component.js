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
var router_1 = require('@angular/router');
var index_1 = require('../_services/index');
var ApplicationComponent = (function () {
    function ApplicationComponent(route, router, appService) {
        this.route = route;
        this.router = router;
        this.appService = appService;
    }
    ApplicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('token')) {
            this.appname = '';
            this.route.params.subscribe(function (params) {
                _this.appname = params['appname']; // (+) converts string 'id' to a number
            });
            console.log(this.appname);
            this.appService.getFieldsList(localStorage.getItem('token'), this.appname)
                .subscribe(function (data) {
                _this.filedList = data;
                localStorage.setItem('token', _this.filedList.licenseField);
            });
        }
    };
    ApplicationComponent.prototype.searchRecords = function () {
    };
    ApplicationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'application.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, index_1.ApplicationService])
    ], ApplicationComponent);
    return ApplicationComponent;
}());
exports.ApplicationComponent = ApplicationComponent;
//# sourceMappingURL=application.component.js.map