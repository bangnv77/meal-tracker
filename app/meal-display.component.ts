import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="jumbotron">
      <div class="page-header">
        <h4>{{meal.description}}</h4>
        <h5>{{meal.totalCal}} calories</h5>
      </div>
      <p>{{meal.comments}}</p>
    </div>
  `
})
export class MealDisplayComponent {
  public mealList: Meal[];
  constructor(){
    this.mealList = [new Meal("The big pig", "Amsterdam amsterdam", 800),new Meal("The Reuburger", "blah", 700)];
  }
}
