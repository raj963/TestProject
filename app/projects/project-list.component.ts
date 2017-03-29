import { Component, OnInit }  from '@angular/core';

import { IProject } from './project';
import { ProjectService } from './project.service';

@Component({
    templateUrl: 'app/projects/project-list.component.html',
    styleUrls: ['app/projects/project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    pageTitle: string = 'Project List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    projects: IProject[];

    constructor(private _projectService: ProjectService) {

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._projectService.getProjects()
                .subscribe(projects => this.projects = projects,
                           error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Project List: ' + message;
    }
}
