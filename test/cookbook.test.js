const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const spagRecipe = new Cookbook();
            
      spagRecipe.addRecipe('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      expect(spagRecipe.recipes).toEqual({ spaghetti: ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']});
      
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
