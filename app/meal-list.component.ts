import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent} from './meal-display.component';
import { NewMealComponent } from './new-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent, NewMealComponent],
  template: `
    <div class="jumbotron">
      <h3>Total number of meals: {{ mealList.length }}</h3>
      <h3>Total calories: {{ totalCalories() }}</h3>
      <h3>Average calories per meal: {{ avgCalories() }}</h3>
    </div>
    <div *ngFor="#meal of mealList">
      <meal-display [meal]="meal"></meal-display>
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
    this.mealList.push(newMeal);
  }

  totalCalories(): number {
    var total = 0;
    this.mealList.forEach(function(meal) {
      total += meal.totalCal;
    })
    return total;
  }

  avgCalories(): number {
    return (this.totalCalories()/this.mealList.length);
  }
}
