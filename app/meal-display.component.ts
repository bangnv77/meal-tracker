import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [EditMealComponent],
  template: `
    <div class="meal">
      <div class="page-header">
        <h4>{{meal.description}}</h4>
        <h5>{{meal.totalCal}} calories</h5>
      </div>
      <p>{{meal.comments}}</p>
      <edit-meal [meal]='meal'></edit-meal>
    </div>
  `
})
export class MealDisplayComponent {
  public mealList: Meal[];
  constructor(){

  }
}
