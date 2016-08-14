import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1 class="text-center">Daily Meal Tracker</h1>
    <meal-list></meal-list>
  </div>
  `
})
export class AppComponent {

}
