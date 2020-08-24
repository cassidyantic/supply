import { Material } from '../shared/material.model';

export class Project {
    public name: string;
    public description: string;
    public imagePath: string;
    public materials: Material[];

    constructor(name: string, desc: string, imagePath: string, materials: Material[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.materials = materials
    }
}