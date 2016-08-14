import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['newMealEvent'],
  template: `
    <form #newMealForm>
      <input type="text" placeholder="Description" required #newDescription/>
      <input type="text" placeholder="Comments" required #newComments/>
      <input type="number" min="0" placeholder="Calories" required #newCalories/>
      <button (click)="submitMealForm(newDescription, newComments, newCalories)">Submit</button>
    </form>
  `
})

export class NewMealComponent {
  public newMealEvent: EventEmitter<Meal>;
  constructor() {
    this.newMealEvent = new EventEmitter();
  }

  submitMealForm(newDescription: HTMLInputElement, newComments: HTMLInputElement, newCalories: HTMLInputElement) {
    var newMeal: Meal = new Meal(newDescription.value, newComments.value, parseInt(newCalories.value));
    this.newMealEvent.emit(newMeal);
  }
}
