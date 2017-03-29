"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_list_component_1 = require("./project-list.component");
var project_detail_component_1 = require("./project-detail.component");
var project_guard_service_1 = require("./project-guard.service");
var project_filter_pipe_1 = require("./project-filter.pipe");
var project_service_1 = require("./project.service");
var shared_module_1 = require("../shared/shared.module");
var ProjectModule = (function () {
    function ProjectModule() {
    }
    return ProjectModule;
}());
ProjectModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'projects', component: project_list_component_1.ProjectListComponent },
                { path: 'project/:id',
                    canActivate: [project_guard_service_1.ProjectDetailGuard],
                    component: project_detail_component_1.ProjectDetailComponent
                }
            ])
        ],
        declarations: [
            project_list_component_1.ProjectListComponent,
            project_detail_component_1.ProjectDetailComponent,
            project_filter_pipe_1.ProjectFilterPipe
        ],
        providers: [
            project_service_1.ProjectService,
            project_guard_service_1.ProjectDetailGuard
        ]
    })
], ProjectModule);
exports.ProjectModule = ProjectModule;
//# sourceMappingURL=project.module.js.map