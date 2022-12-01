import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Array<Ingredient> = [
    new Ingredient('Apple', 5),
    new Ingredient('Bread', 10),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice(); // get a copy of the list
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients); //spread operator to include all elements
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
