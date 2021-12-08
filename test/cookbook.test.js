const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const recipeCookbook = new Cookbook();
            
      recipeCookbook.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      expect(recipeCookbook.recipes).toEqual({ spaghetti: ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']});
      
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const recipeCookbook = new Cookbook();
            
      recipeCookbook.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      const myrecipeCookbook = recipeCookbook.listRecipes();

      expect(myrecipeCookbook).toEqual(['spaghetti']);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const recipeCookbook = new Cookbook();
            
      recipeCookbook.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      const myrecipeCookbook = recipeCookbook.getRecipe(['spaghetti']);

      expect(myrecipeCookbook).toEqual(['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const recipeCookbook = new Cookbook();
            
      recipeCookbook.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      const myrecipeCookbook = recipeCookbook.removeRecipe(['spaghetti']);

      expect(myrecipeCookbook).toEqual(undefined);
    });
  });
});
