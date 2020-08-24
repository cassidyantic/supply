import { Component, OnInit } from '@angular/core';

import { Material } from '../shared/material.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  materials: Material[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.materials = this.slService.getMaterials();
    this.slService.materialsChanged
      .subscribe(
        (materials: Material[]) => {
          this.materials = materials;
        }
      );
  }

}
