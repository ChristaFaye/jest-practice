class Cookbook {
  constructor() {
    this.recipes = {};
  }

  addRecipe(name, ingredients) {
    this.recipes[name] = ingredients;
  }

  listRecipes() {
    return Object.keys(this.recipes);
  };

  getRecipe(name) {
    return this.recipes[name];
  }

  removeRecipe(name) {
    delete this.recipes[name];
  }
}

module.exports = { Cookbook };

const spagRecipe = new Cookbook();
console.log(spagRecipe);

spagRecipe.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

console.log(spagRecipe.listRecipes());
console.log(spagRecipe.getRecipe('spaghetti'));
