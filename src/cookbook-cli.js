const { Cookbook } = require("./cookbook");

class CookbookCli {
  constructor(cookbook) {
    this.cookbook = cookbook;
  }

  run(command, ...args) {
    switch (command) {
      case 'list': return this.list();
      case 'add': return this.add(...args);
      case 'get': return this.get(...args);
      case 'remove': return this.remove(...args);
      default: return `Whoops, the following command is unsupported: ${command}.`;
    }
  }

  list() {
    let recipe = this.cookbook.listRecipes();
    if (recipe.length !== 0){
      return `You have the following recipes: ${this.cookbook.listRecipes().join(',')}`;
    }
    else {
      return `Oops! No recipe is existing on this cookbook.`
    }
  }

  add(name, ingredients) {
    this.cookbook.addRecipe(name, ingredients);
    return `Successfully added the following recipe: ${name}`;
  }

  get(name) {
    let recipe = this.cookbook.getRecipe(name);
    if (recipe !== undefined){
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    }
    else {
      return `Oops! ${name}'s recipe is not existing on this cookbook.'`
    }
  }

  remove(name) {
    this.cookbook.removeRecipe(name);
    return `Successfully removed the following recipe: ${name}`;
  }
}

module.exports = { CookbookCli };

const recipeCookbook = new Cookbook();
const myrecipe = new CookbookCli(recipeCookbook);

myrecipe.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
myrecipe.add('pizza', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
console.log(myrecipe.list());

