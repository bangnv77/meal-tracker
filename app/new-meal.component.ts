import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMealEvent'],
  template: `
  <div class="jumbotron">
    <h4>Log New Meal</h4>
    <label *ngIf="(formWarning)">Please fill out description and calorie fields.</label>
    <input type="text" placeholder="Description" #newDescription/>
    <input type="text" placeholder="Comments" #newComments/>
    <input type="number" min="0" placeholder="Calories" #newCalories/>
    <button (click)="submitMealForm(newDescription, newComments, newCalories)">Submit</button>
  </div>  
  `
})

export class NewMealComponent {
  formWarning: boolean = false;
  public newMealEvent: EventEmitter<Meal>;
  constructor() {
    this.newMealEvent = new EventEmitter();
  }

  submitMealForm(newDescription: HTMLInputElement, newComments: HTMLInputElement, newCalories: HTMLInputElement) {
    if (newDescription.value === "" || newCalories.value === "") {
      this.formWarning = true;
    } else {
      var newMeal: Meal = new Meal(newDescription.value, newComments.value, parseInt(newCalories.value));
      newDescription.value = "";
      newComments.value = "";
      newCalories.value = "";
      this.newMealEvent.emit(newMeal);
    }
  }
}
