import { Material } from '../shared/material.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    materialsChanged = new EventEmitter<Material[]>();
    private materials: Material[] = [
        new Material('Wood', 7),
        new Material('Nails', 5),
      ];

    getMaterials() {
        return this.materials.slice();
    }

    addMaterial(material: Material) {
        this.materials.push(material);  
        this.materialsChanged.emit(this.materials.slice());  
    }
}