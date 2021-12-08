const { Cookbook } = require('../src/cookbook');
const { CookbookCli } = require('../src/cookbook-cli');

describe('CookbookCli', () => {
  describe('Adding recipes', () => {
    test('should accept the recipe information and display the correct message', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      const message = myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);

      expect(message).toEqual(`Successfully added the following recipe: spaghetti`);
    });
  });

  describe('Listing recipes', () => {
    test('should display the correct message listing all of the recipe names', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.list();

      expect(message).toEqual(`You have the following recipes: spaghetti`);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should display the ingredients required to make the specified recipe', () => {
      const myrecipeCookbook = new Cookbook();
      const myCookbookCli = new CookbookCli(myrecipeCookbook);

      myCookbookCli.add('spaghetti', ['beef', 'pasta noodles', 'mushroom', 'tomato sauce', 'onion', 'cheese']);
      const message = myCookbookCli.get('spaghetti');

      expect(message).toEqual(`The ingredients for spaghetti are: beef,pasta noodles,mushroom,tomato sauce,onion,cheese`);
    });
  });

  describe('Deleting a recipe', () => {
    test('should accept the recipe name and display the correct message', () => {

    });
  });
});
