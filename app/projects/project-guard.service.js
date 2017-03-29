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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProjectDetailGuard = (function () {
    function ProjectDetailGuard(_router) {
        this._router = _router;
    }
    ProjectDetailGuard.prototype.canActivate = function (route) {
        debugger;
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid project Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/projects']);
            // abort current navigation
            return false;
        }
        ;
        return true;
    };
    return ProjectDetailGuard;
}());
ProjectDetailGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], ProjectDetailGuard);
exports.ProjectDetailGuard = ProjectDetailGuard;
var _a;
//# sourceMappingURL=project-guard.service.js.map