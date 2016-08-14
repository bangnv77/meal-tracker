import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent} from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { caloriePipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDisplayComponent, NewMealComponent],
  pipes: [caloriePipe],
  template: `
    <div class="jumbotron">
      <h3>Total number of meals: {{ mealList.length }}</h3>
      <h3>Total calories: {{ totalCalories() }}</h3>
      <h3>Average calories per meal: {{ avgCalories() }}</h3>
      <label (change)="changeMinOrMax($event.target.value)">
        <option optioned>All</option>
        <option>Min.</option>
        <option>Max.</option>
      </label>
      <input [(ngModel)]="calorieFilter" type="number" min="0"/><br>
    </div>
    <div *ngFor="#meal of mealList | caloriePipe:minOrMaxCals:calorieFilter">
      <meal-display [meal]="meal"></meal-display>
    </div>
    <new-meal (newMealEvent)="addMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[] = [];
  public minOrMaxCals: string = "All";
  public calorieFilter: number = 0;
  constructor() {

  }

  changeMinOrMax(newValue: string) {
    this.minOrMaxCals = newValue;
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
