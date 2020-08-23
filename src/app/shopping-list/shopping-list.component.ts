import { Component, OnInit } from '@angular/core';

import { Material } from '../shared/material.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent implements OnInit {
  materials: Material[] = [
    new Material('Wood', 7),
    new Material('Nails', 5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMaterialAdded(material: Material) {
    this.materials.push(material);
  }

}
