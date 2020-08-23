import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

import { Project } from '../project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Output() projectWasSelected = new EventEmitter<Project>();
  projects: Project[] = [
    new Project('A Test Project', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg'),
    new Project('Another Test Project', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg'),
    new Project('A Test Project', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg'),
    new Project('A Test Project', 'this is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onProjectSelected(project: Project) {
    this.projectWasSelected.emit(project);
  }

}
