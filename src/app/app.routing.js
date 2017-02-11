"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./home/index');
var index_2 = require('./login/index');
var appRoutes = [
    { path: '', component: index_1.HomeComponent },
    { path: 'login', component: index_2.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map