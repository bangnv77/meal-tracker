import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent} from './meal-display.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent, NewMealComponent],
  template: `
    <h2>List of meals will go here</h2>
    <div *ngFor="#meal of mealList">
      <meal-display></meal-display>
    </div>
    <new-meal (newMealEvent)="addMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  constructor() {
    this.mealList = [new Meal("The big pig", "Amsterdam amsterdam", 800), new Meal("The Reuburger", "blah", 700)];
  }
  addMeal(newMeal: Meal) {
    console.log("Event heard", newMeal);
    this.mealList.push(newMeal);
    console.log(this.mealList);
  }
}
