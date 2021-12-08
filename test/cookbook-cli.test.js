const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information if recipe does not exist and display the correct message', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      const message = myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      expect(message).toBe(false);
      
    });

    test('should not accept the recipe information if recipe exists and display the correct message', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);
  
      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      expect(message).toBe(true);

    });
  })
  

  describe('Listing recipes if there are any existing recipes, otherwise, display warning message', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: spaghetti`);
    });

    test('should display warning message if no recipe exists', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      const message = myCookbookCli.list();

      expect(message).toEqual(`Oops! No recipe is existing on this cookbook.`);
    });
  });

  describe('Retrieving a recipe if recipe exists, otherwise, display warning message', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.get('spaghetti');

      expect(message).toEqual(`The ingredients for spaghetti are: beef,pasta noodles,mushroom,tomato sauce,onion,cheese`);
    });

    test('should display warning message if recipe does not exist', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);
  
      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.get('pizza');
  
      expect(message).toEqual(`Oops! pizza's recipe does not exist on this cookbook.`);
      
    });  
  });

  describe('Deleting a recipe if recipe exists, otherwise, display warning message', () => {
    test('should delete the recipe name and display the correct message', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.remove('spaghetti');

      expect(message).toBe(true);
    });

    test('should display warning message if recipe does not exist', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      const message = myCookbookCli.remove('spaghetti');
      expect(message).toBe(false);
    });

  });
});
