import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project.model'
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  onSelected() {
    this.projectService.projectSelected.emit(this.project);
  }

}
