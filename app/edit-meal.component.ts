import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <a href="#" *ngIf="!isEditing" (click)="toggleEdit()">Edit Details</a>
    <div *ngIf="isEditing">
      <a href="#" (click)="toggleEdit()">Done Editing</a>
      <input type="text" placeholder="Description" [(ngModel)]="meal.description">
      <input type="text" placeholder="Comments" [(ngModel)]="meal.comments">
      <input type="number" min="0" placeholder="Calories" [(ngModel)]="meal.totalCal">
    </div>
  `
})

export class EditMealComponent {
  public isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
