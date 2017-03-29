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
var project_service_1 = require("./project.service");
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(_route, _router, _projectService) {
        this._route = _route;
        this._router = _router;
        this._projectService = _projectService;
        this.pageTitle = 'Project Detail';
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProject(id);
        });
    };
    ProjectDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProjectDetailComponent.prototype.getProject = function (id) {
        var _this = this;
        this._projectService.getProject(id).subscribe(function (project) { return _this.project = project; }, function (error) { return _this.errorMessage = error; });
    };
    ProjectDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/projects']);
    };
    ProjectDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Project Detail: ' + message;
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/projects/project-detail.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, project_service_1.ProjectService])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;
var _a, _b;
//# sourceMappingURL=project-detail.component.js.map