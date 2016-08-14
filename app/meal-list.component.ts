import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent} from './meal-display.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent],
  template: `
    <h2>List of meals will go here</h2>
    <div *ngFor="#meal of mealList">
      <meal-display></meal-display>
    </div>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  constructor() {
    this.mealList = [new Meal("The big pig", "Amsterdam amsterdam", 800), new Meal("The Reuburger", "blah", 700)];
  }
}
