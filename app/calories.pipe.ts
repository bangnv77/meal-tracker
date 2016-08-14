import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: 'caloriePipe',
  pure: false
})

export class caloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var minOrMax: string = args[0];
    var calorieFilter: number = args[1];

    if (minOrMax === "All") return input;
    if (minOrMax === "Min.") return input.filter((meal) => (meal.totalCal >= calorieFilter));
    if (minOrMax === "Max.") return input.filter((meal) => (meal.totalCal <= calorieFilter));
  }
}
