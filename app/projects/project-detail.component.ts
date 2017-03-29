import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription }       from 'rxjs/Subscription';

import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
    templateUrl: 'app/projects/project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Project Detail';
    project: IProject;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _projectService: ProjectService) {
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProject(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProject(id: number) {
        this._projectService.getProject(id).subscribe(
            project => this.project = project,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/projects']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Project Detail: ' + message;
    }
}
