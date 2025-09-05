/* Images */
import GrilledSteak from './GrilledSteak.jpg';
import RoastChicken from './RoastChicken.jpg';
import BakedSalmon from './BakedSalmon.jpg';
import ShrimpScampi from './ShrimpScampi.jpg';
import SpaghettiCarbonara from './SpaghettiCarbonara.jpg';
import GrilledVeggieMix from './GrilledVeggieMix.jpg';
import ChickpeaCurry from './ChickpeaCurry.jpg';
import FruitSalad from './FruitSalad.jpg';
import Omelette from './Omelette.jpg';
import CheesePlatter from './CheesePlatter.jpg';
import WholeGrainBread from './WholeGrainBread.jpg';

/* Icons */
import BeefIcon from './BeefIcon.svg';
import ChickenIcon from './Chicken.svg';
import FishIcon from './Salmon.svg';
import Seafood from './Seafood.svg';
import PastaAndRice from './Spaghetti.svg';
import Vegetables from './Vegetables.svg';
import LegumesAndBeans from './LegumesAndBeans.svg';
import Fruits from './Fruits.svg';
import Eggs from './Eggs.svg';
import DairyAndCheese from './DairyAndCheese.svg';
import BreadAndGrains from './BreadAndGrains.svg';
import FavoriteIcon from './FavoriteIcon.svg';
import FavoriteIconClicked from './FavoriteIconClicked.svg';
import ShowMoreIcon from './ShowMoreIcon.svg';

export const SuggestRecipesInformation = [
  {
    id: 1,
    title: "Shakshuka",
    image: require("../Suggest/Shukshoka.jpeg"),
    classification: "Breakfast",
    ingredients: ["Eggs", "Tomatoes", "Onions", "Garlic"],
    instructions: ["Heat oil", "Add onions & garlic", "Add tomatoes", "Crack eggs on top"],
  },
  {
    id: 2,
    title: "Avocado Toast",
    image: require("../Suggest/Avocado_Toast.jpeg"),
    classification: "Breakfast",
    ingredients: ["Bread", "Avocado", "Lemon juice", "Cherry tomatoes"],
    instructions: ["Toast bread", "Mash avocado", "Spread on toast", "Top with tomatoes"],
  },
  {
    id: 3,
    title: "Avocado Toast",
    image: require("../Suggest/Avocado_Toast.jpeg"),
    classification: "Breakfast",
    ingredients: ["Bread", "Avocado", "Lemon juice", "Cherry tomatoes"],
    instructions: ["Toast bread", "Mash avocado", "Spread on toast", "Top with tomatoes"],
  },
];

export const DefaulteRecipesInformation = [
  {
    id: 1,
    favorite: false,
    image: GrilledSteak,
    title: "Grilled Steak",
    classification: "Beef",
    description:
      "Grilled Steak is a timeless classic loved by meat enthusiasts. Juicy cuts of beef are seasoned with olive oil, salt, black pepper, and fresh rosemary, then grilled over high heat to achieve a perfect char on the outside while remaining tender and flavorful on the inside. This dish is ideal for special occasions or weekend dinners and pairs wonderfully with roasted potatoes or fresh vegetables.",
    ingredients: [
      "500g beef steak",
      "2 tbsp olive oil",
      "1 tsp black pepper",
      "1 tsp salt",
      "Fresh rosemary"
    ],
    instructions: [
      "Preheat grill to high heat.",
      "Season steak with olive oil, salt, and pepper.",
      "Grill each side for 4-5 minutes or until desired doneness.",
      "Let it rest for 5 minutes before serving."
    ]
  },
  {
    id: 2,
    favorite: false,
    image: RoastChicken,
    title: "Roast Chicken",
    classification: "Chicken",
    description:
      "Roast Chicken is a comforting and delicious dish enjoyed all over the world. A whole chicken is rubbed with butter, garlic, and aromatic spices, then stuffed with fresh lemon for added zest. When roasted to golden perfection, the result is crispy skin on the outside and juicy, tender meat inside. Perfect for family meals, this dish pairs beautifully with roasted potatoes, rice, or fresh salad.",
    ingredients: [
      "1 whole chicken",
      "2 tbsp butter",
      "2 cloves garlic",
      "1 lemon",
      "Salt & pepper"
    ],
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Rub chicken with butter, garlic, salt, and pepper.",
      "Insert lemon halves inside the chicken.",
      "Roast for 1 hour 20 minutes until golden and cooked through."
    ]
  },
  {
    id: 3,
    favorite: false,
    image: BakedSalmon,
    title: "Baked Salmon",
    classification: "Fish",
    description:
      "Baked Salmon is a healthy and flavorful option perfect for quick meals. The salmon fillets are drizzled with olive oil, topped with lemon slices and fresh dill, then baked until tender and flaky. This simple yet elegant dish captures the natural richness of salmon and pairs well with rice, quinoa, or a side of steamed vegetables.",
    ingredients: [
      "2 salmon fillets",
      "1 lemon (sliced)",
      "Fresh dill",
      "1 tbsp olive oil",
      "Salt & pepper"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F).",
      "Place salmon on a baking sheet and drizzle with olive oil.",
      "Top with lemon slices and dill.",
      "Bake for 15-20 minutes until tender."
    ]
  },
  {
    id: 4,
    favorite: false,
    image: ShrimpScampi,
    title: "Shrimp Scampi",
    classification: "Seafood",
    description:
      "Shrimp Scampi is an Italian-inspired seafood dish bursting with flavor. Fresh shrimp are sautéed in butter and garlic, then tossed with pasta and finished with a splash of lemon juice for brightness. This quick and elegant meal is perfect for weeknights or special dinners, offering a balance of richness and freshness in every bite.",
    ingredients: [
      "300g shrimp (peeled & deveined)",
      "3 tbsp butter",
      "3 cloves garlic (minced)",
      "200g pasta",
      "1 tbsp lemon juice"
    ],
    instructions: [
      "Cook pasta according to package instructions.",
      "In a pan, melt butter and sauté garlic until fragrant.",
      "Add shrimp and cook until pink.",
      "Toss with pasta and drizzle lemon juice before serving."
    ]
  },
  {
    id: 5,
    favorite: false,
    image: SpaghettiCarbonara,
    title: "Spaghetti Carbonara",
    classification: "Pasta & Rice",
    description:
      "Spaghetti Carbonara is a traditional Italian pasta dish known for its creamy, rich flavor. Made with crispy pancetta, fresh eggs, Parmesan cheese, and black pepper, this recipe creates a luscious sauce that coats each strand of pasta. It’s a simple yet indulgent dish that’s perfect for pasta lovers and can be made in under 30 minutes.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta (or bacon)",
      "2 large eggs",
      "50g parmesan cheese",
      "Salt & black pepper"
    ],
    instructions: [
      "Cook spaghetti until al dente.",
      "Fry pancetta until crispy.",
      "Whisk eggs and parmesan together in a bowl.",
      "Mix hot pasta with pancetta, then add egg mixture quickly.",
      "Season with black pepper and serve immediately."
    ]
  },
  {
    id: 6,
    favorite: false,
    image: GrilledVeggieMix,
    title: "Grilled Veggie Mix",
    classification: "Vegetables",
    description:
      "Grilled Veggie Mix is a colorful and nutritious side dish featuring zucchini, bell peppers, and eggplant. Lightly brushed with olive oil and seasoned with salt and pepper, the vegetables are grilled to perfection, resulting in a smoky flavor with a tender yet slightly charred texture. This versatile dish can be enjoyed on its own or paired with grilled meats and fish.",
    ingredients: [
      "1 zucchini",
      "1 red bell pepper",
      "1 eggplant",
      "2 tbsp olive oil",
      "Salt & pepper"
    ],
    instructions: [
      "Cut vegetables into slices.",
      "Brush with olive oil and season with salt & pepper.",
      "Grill on medium-high heat until tender and slightly charred.",
      "Serve warm as a side dish."
    ]
  },
  {
    id: 7,
    favorite: false,
    image: ChickpeaCurry,
    title: "Chickpea Curry",
    classification: "Legumes & Beans",
    description:
      "Chickpea Curry is a hearty and protein-rich vegetarian dish inspired by Indian cuisine. Chickpeas are simmered in a flavorful sauce of onions, tomatoes, and aromatic curry spices, creating a satisfying meal with a rich and spicy flavor profile. Best served with rice or flatbread, this curry makes a wholesome and comforting option for any day.",
    ingredients: [
      "1 can chickpeas (drained)",
      "1 onion (chopped)",
      "2 tomatoes (pureed)",
      "2 tbsp curry powder",
      "1 tbsp oil"
    ],
    instructions: [
      "Heat oil in a pot and sauté onion until golden.",
      "Add curry powder and cook for 1 minute.",
      "Add tomato puree and cook until thickened.",
      "Stir in chickpeas and simmer for 15 minutes.",
      "Serve with rice or bread."
    ]
  },
  {
    id: 8,
    favorite: false,
    image: FruitSalad,
    title: "Fruit Salad",
    classification: "Fruits",
    description:
      "Fruit Salad is a refreshing and colorful dish packed with natural sweetness and vitamins. A medley of fresh fruits like apples, bananas, and grapes is combined and lightly drizzled with honey for extra flavor, then garnished with mint leaves. It’s the perfect light dessert or snack, especially on hot days.",
    ingredients: [
      "1 apple (diced)",
      "1 banana (sliced)",
      "1 cup grapes",
      "1 tbsp honey",
      "Fresh mint leaves"
    ],
    instructions: [
      "Chop all fruits into bite-sized pieces.",
      "Mix fruits in a large bowl.",
      "Drizzle honey over the salad.",
      "Garnish with fresh mint and serve chilled."
    ]
  },
  {
    id: 9,
    favorite: false,
    image: Omelette,
    title: "Omelette",
    classification: "Eggs",
    description:
      "Omelette is a quick and versatile breakfast dish made with whisked eggs cooked until fluffy and golden. It can be customized with cheese, vegetables, or herbs for added flavor. This simple yet satisfying recipe is perfect for a healthy start to the day and can also be enjoyed as a light lunch or dinner.",
    ingredients: [
      "3 eggs",
      "2 tbsp milk",
      "50g cheese (shredded)",
      "1/2 bell pepper (chopped)",
      "1 tbsp butter"
    ],
    instructions: [
      "Whisk eggs with milk, salt, and pepper.",
      "Melt butter in a non-stick pan.",
      "Pour egg mixture and cook until half set.",
      "Add cheese and vegetables, fold in half, and cook through."
    ]
  },
  {
    id: 10,
    favorite: false,
    image: CheesePlatter,
    title: "Cheese Platter",
    classification: "Dairy & Cheese",
    description:
      "A Cheese Platter is a simple yet elegant appetizer perfect for gatherings. It features a variety of cheeses such as cheddar, brie, and gouda, arranged beautifully with crackers and fresh grapes. The combination of textures and flavors makes it a delightful option for sharing with friends and family.",
    ingredients: [
      "100g cheddar cheese",
      "100g brie cheese",
      "100g gouda cheese",
      "Crackers",
      "A handful of grapes"
    ],
    instructions: [
      "Slice cheeses and arrange on a serving board.",
      "Place crackers around the cheese.",
      "Add grapes as garnish.",
      "Serve at room temperature."
    ]
  },
  {
    id: 11,
    favorite: false,
    image: WholeGrainBread,
    title: "Whole Grain Bread",
    classification: "Bread & Grains",
    description:
      "Whole Grain Bread is a wholesome and hearty bread made with whole wheat flour and natural ingredients. Lightly sweetened with honey and baked until golden brown, it has a soft inside and a slightly crusty exterior. Rich in fiber and nutrients, this bread is perfect for sandwiches, toasts, or simply enjoyed warm with butter.",
    ingredients: [
      "3 cups whole wheat flour",
      "1 tbsp yeast",
      "1 tbsp honey",
      "1 1/2 cups warm water",
      "1 tsp salt"
    ],
    instructions: [
      "Mix flour, yeast, honey, and salt in a bowl.",
      "Add warm water gradually to form a dough.",
      "Knead for 8-10 minutes and let rise for 1 hour.",
      "Bake at 190°C (375°F) for 30-35 minutes until golden."
    ]
  }
];


export const RecipesIcons = {
    Beef : BeefIcon,
    Chicken : ChickenIcon,
    Fish : FishIcon,
    Seafood : Seafood,
    PastaAndRice : PastaAndRice,
    Vegetables : Vegetables,
    LegumesAndBeans : LegumesAndBeans,
    Fruits : Fruits,
    Eggs : Eggs,
    DairyAndCheese : DairyAndCheese,
    BreadAndGrains : BreadAndGrains,
    FavoriteIcon : FavoriteIcon,
    FavoriteIconClicked : FavoriteIconClicked,
    ShowMoreIcon : ShowMoreIcon
}



