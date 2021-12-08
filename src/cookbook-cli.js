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
    let recipes = this.cookbook.listRecipes();
    let result = recipes.includes(name);
    if (result !== true) {
      this.cookbook.addRecipe(name, ingredients);
      console.log(`Successfully added the following recipe: ${name}`);
      return result;
    }
    else {
      console.log(`Oops! Sorry, the recipe for ${name} already exists on this cookbook.`);
      return result;
    }
  }

  get(name) {
    let recipe = this.cookbook.getRecipe(name);
    if (recipe !== undefined){
      return `The ingredients for ${name} are: ${this.cookbook.getRecipe(name)}`;
    }
    else {
      return `Oops! ${name}'s recipe does not exist on this cookbook.`
    }
  }

  remove(name) {
    let recipes = this.cookbook.listRecipes();
    let result = recipes.includes(name);
    if (result === true) {
      this.cookbook.removeRecipe(name);
      console.log(`Successfully removed the following recipe: ${name}`);
      return result;
    }
    else {
      console.log(`Oops! ${name}'s recipe that you're trying to remove does not exist on this cookbook.`);
      return result;
    }
  }
}

module.exports = { CookbookCli };


