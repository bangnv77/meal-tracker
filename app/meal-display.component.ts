import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <h3>Individual meal display goes here</h3>
  `
})
export class MealDisplayComponent {
  public mealList: Meal[];
  constructor(){
    this.mealList = [new Meal("The big pig", "Amsterdam amsterdam", 800),new Meal("The Reuburger", "blah", 700)];
  }
}
