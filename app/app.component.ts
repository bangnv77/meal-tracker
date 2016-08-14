import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <h1>Daily Meal Tracker</h1>
    <meal-list></meal-list>
  `
})
export class AppComponent {

}
