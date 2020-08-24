import { Project } from './project.model';
import { EventEmitter } from '@angular/core';
import { Material } from '../shared/material.model';


export class ProjectService {
  projectSelected = new EventEmitter<Project>(); 

    private projects: Project[] = [
    new Project(
     'Summer Outdoor Planters',
     'Create beautiful outdoor planters to hold your summer flowers. You will need a hammer for this project.', 
     'https://images.pexels.com/photos/1075757/pexels-photo-1075757.jpeg?cs=srgb&dl=pexels-brett-sayles-1075757.jpg&fm=jpg',
     [
       new Material('Wood Pallet', 1),
       new Material('Paint', 1),
       new Material('Paint Brush', 1),
       new Material('Nails', 15),
       new Material('Soil', 1),
       new Material('Flowers', 1)
     ]),
    new Project(
     'Clothespin Votive Candle Holders',
     'Give votives a farmhouse look with clothespins.', 
     'http://img.postris.com/lists/992977174_745173047_l.jpg',
     [
       new Material('Clothespins', 20),
       new Material('Glass votive candle holder', 1),
       new Material('Votive candle', 1),
       new Material('Super Glue', 1)
     ]),
    new Project(
      'Tree Swing',
      'Quick and easy way to spice up your yard. You will need a drill for this project.', 
      'https://s3-production.bobvila.com/slides/8250/vertical_slide_wide/How_To_Make_A_Tree_Swing.jpg?1534197760',
      [
        new Material('Rope', 1),
        new Material('Carabiner', 2),
        new Material('Wood', 1)
      ]),
    new Project(
      'Plant Trellis',
      'An easy way to build a beautiful wall for your plants to climb.', 
      'https://s3-production.bobvila.com/slides/8256/vertical_slide_wide/diy_garden_trellis.jpg?1534203733',
      [
        new Material('Wood', 50),
        new Material('Nails', 100),
        new Material('Paint', 1)
      ])
  ];

  getProjects() {
      return this.projects.slice();
  }
}