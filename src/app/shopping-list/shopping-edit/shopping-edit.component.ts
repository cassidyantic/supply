import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Material } from 'src/app/shared/material.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() materialAdded = new EventEmitter<Material>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const matName = this.nameInputRef.nativeElement.value;
    const matAmount = this.amountInputRef.nativeElement.value;
    const newMaterial = new Material(matName, matAmount);
    this.materialAdded.emit(newMaterial);
  }

}
