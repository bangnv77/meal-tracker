import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <a href="#" *ngIf="!isEditing" (click)="toggleEdit()">Edit Details</a>
    <div *ngIf="isEditing">
      <a href="#" (click)="toggleEdit()">Done Editing</a>
    </div>
  `
})

export class EditMealComponent {
  public isEditing: boolean = false;

  toggleEdit() {
    console.log("click");
    this.isEditing = !this.isEditing;
  }
}
