export interface Dish {
  name: string;
  ingredients: string;
  price: number;
}

export const mainCourses: Dish[] = [
  {
    name: "Grilled Salmon",
    ingredients: "Fresh salmon fillet with herbs and lemon butter sauce",
    price: 18.99,
  },
  {
    name: "Beef Burger",
    ingredients: "Beef patty, cheddar cheese, lettuce, tomato, onion, pickles",
    price: 12.99,
  },
  {
    name: "Mushroom Risotto",
    ingredients: "Arborio rice with sautéed mushrooms, parmesan cheese, and truffle oil",
    price: 14.99,
  },
  {
    name: "Chicken Alfredo",
    ingredients: "Grilled chicken breast with fettuccine pasta in creamy Alfredo sauce",
    price: 16.99,
  },
  {
    name: "Vegetable Curry",
    ingredients: "Seasonal vegetables in a mild curry sauce with basmati rice",
    price: 12.99,
  },
  {
    name: "Pesto Pasta",
    ingredients: "Penne pasta with homemade basil pesto, cherry tomatoes, and pine nuts",
    price: 13.99,
  },
  {
    name: "Roast Beef",
    ingredients: "Slow-roasted beef with rosemary and garlic, served with roasted potatoes and vegetables",
    price: 19.99,
  },
  {
    name: "Shrimp Scampi",
    ingredients: "Sautéed shrimp with garlic, lemon, and white wine sauce, served with linguine pasta",
    price: 18.99,
  },
  {
    name: "Lamb Chops",
    ingredients: "Grilled lamb chops with mint sauce, served with mashed potatoes and green beans",
    price: 22.99,
  },
  {
    name: "Spicy Chicken Wings",
    ingredients: "Crispy chicken wings with spicy buffalo sauce, served with blue cheese dressing and celery sticks",
    price: 10.99,
  },
];

export const desserts: Dish[] = [
  {
    name: "Chocolate Cake",
    ingredients: "Rich chocolate cake with chocolate ganache and whipped cream",
    price: 8.99,
  },
  {
    name: "Tiramisu",
    ingredients: "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder",
    price: 9.99,
  },
  {
    name: "Cheesecake",
    ingredients: "Creamy cheesecake with graham cracker crust and raspberry sauce",
    price: 7.99,
  },
  {
    name: "Fruit Tart",
    ingredients: "Buttery tart shell filled with vanilla custard and topped with fresh seasonal fruit",
    price: 6.99,
  },
  {
    name: "Ice Cream Sundae",
    ingredients: "Vanilla ice cream with hot fudge, whipped cream, and cherry on top",
    price: 5.99,
  },
];

export const soups: Dish[] = [
  {
    name: "Tomato Soup",
    ingredients: "Fresh tomatoes, garlic, and basil in a creamy tomato broth",
    price: 5.99,
  },
  {
    name: "Chicken Noodle Soup",
    ingredients: "Slow-simmered chicken broth with egg noodles, carrots, and celery",
    price: 6.99,
  },
  {
    name: "Lentil Soup",
    ingredients: "Hearty lentil soup with carrots, onions, and celery",
    price: 5.99,
  },
  {
    name: "Butternut Squash Soup",
    ingredients: "Roasted butternut squash with ginger and cinnamon in a creamy broth",
    price: 6.99,
  },
  {
    name: "Clam Chowder",
    ingredients: "Creamy New England-style clam chowder with potatoes and bacon",
    price: 7.99,
  },
];

export const drinks: Dish[] = [
  {
    name: "Coke",
    ingredients: "Classic Coca-Cola",
    price: 2.99,
  },
  {
    name: "Lemonade",
    ingredients: "Freshly squeezed lemonade",
    price: 3.99,
  },
  {
    name: "Orange Juice",
    ingredients: "Freshly squeezed orange juice",
    price: 4.99,
  },
  {
    name: "Iced Tea",
    ingredients: "Refreshing iced tea",
    price: 3.99,
  },
  {
    name: "Mojito",
    ingredients: "Mint, lime, rum, sugar, and soda water",
    price: 8.99,
  },
  {
    name: "Pina Colada",
    ingredients: "Pineapple, coconut, rum, and cream",
    price: 9.99,
  },
  {
    name: "Margarita",
    ingredients: "Tequila, lime juice, triple sec, and salt",
    price: 8.99,
  },
  {
    name: "Old Fashioned",
    ingredients: "Whiskey, sugar, bitters, and orange peel",
    price: 10.99,
  },
  {
    name: "Cosmopolitan",
    ingredients: "Vodka, cranberry juice, lime juice, and triple sec",
    price: 9.99,
  },
  {
    name: "Sangria",
    ingredients: "Red wine, brandy, orange juice, and seasonal fruit",
    price: 7.99,
  },
];

export const starters: Dish[] = [
  {
    name: "Caesar Salad",
    ingredients: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 7.99,
  },
  {
    name: "Bruschetta",
    ingredients: "Grilled bread, tomatoes, garlic, basil, and olive oil",
    price: 6.99,
  },
  {
    name: "Caprese Salad",
    ingredients: "Tomatoes, mozzarella cheese, basil, and balsamic vinegar",
    price: 8.99,
  },
  {
    name: "Chicken Wings",
    ingredients: "Spicy chicken wings with blue cheese dressing and celery sticks",
    price: 9.99,
  },
  {
    name: "Mozzarella Sticks",
    ingredients: "Deep-fried mozzarella sticks with marinara sauce",
    price: 7.99,
  },
  {
    name: "Garlic Bread",
    ingredients: "Freshly baked bread with garlic butter",
    price: 5.99,
  },
  {
    name: "Soup of the Day",
    ingredients: "Ask your server for today's selection",
    price: 6.99,
  },
];
