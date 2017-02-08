import { Injectable, Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Project } from './project.model';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectPopupService {
    private isOpen = false;
    constructor (
        private modalService: NgbModal,
        private projectService: ProjectService
    ) {}


    open (component: Component, id?: number | any): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;

        if (id) {
            this.projectService.find(id).subscribe(project => this.projectModalRef(component, project));
        } else {
            return this.projectModalRef(component, new Project());
        }
    }

    projectModalRef(component: Component, project: Project): NgbModalRef {
        let modalRef = this.modalService.open(component, { size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.project = project;
        modalRef.result.then(result => {
            console.log(`Closed with: ${result}`);
            this.isOpen = false;
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
            this.isOpen = false;
        });
        return modalRef;
    }
}
