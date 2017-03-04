"use strict";
var Applications = (function () {
    function Applications() {
    }
    return Applications;
}());
exports.Applications = Applications;
var AppList = (function () {
    function AppList() {
    }
    return AppList;
}());
exports.AppList = AppList;
var AppDefs = (function () {
    function AppDefs() {
    }
    return AppDefs;
}());
exports.AppDefs = AppDefs;
(function (AppDatatype) {
    AppDatatype[AppDatatype["CHAR"] = 0] = "CHAR";
    AppDatatype[AppDatatype["INTEGER"] = 1] = "INTEGER";
    AppDatatype[AppDatatype["SMALLINT"] = 2] = "SMALLINT";
    AppDatatype[AppDatatype["DATE"] = 3] = "DATE";
    AppDatatype[AppDatatype["TIME"] = 4] = "TIME";
})(exports.AppDatatype || (exports.AppDatatype = {}));
var AppDatatype = exports.AppDatatype;
var AppFieldDef = (function () {
    function AppFieldDef() {
    }
    return AppFieldDef;
}());
exports.AppFieldDef = AppFieldDef;
var getFieldListResponse = (function () {
    function getFieldListResponse() {
    }
    return getFieldListResponse;
}());
exports.getFieldListResponse = getFieldListResponse;
//# sourceMappingURL=applications.js.map