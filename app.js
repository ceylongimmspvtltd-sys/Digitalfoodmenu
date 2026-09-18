const menuItems = [
  // Soup
  { id: 'vegetable-soup', category: 'Soup', name: 'Vegetable Soup', price: 900, description: 'A light, comforting bowl packed with garden vegetables.', ingredients: 'Seasonal vegetables · herbs · vegetable stock · cracked pepper', time: '15–20 min', tags: 'Vegetarian · Light & nourishing', tag: 'Vegetarian' },
  { id: 'curry-leaves-soup', category: 'Soup', name: 'Curry Leaves Soup', price: 900, description: 'A fragrant green bowl with the unmistakable warmth of curry leaves.', ingredients: 'Curry leaves · garlic · onion · coconut milk · spices', time: '15–20 min', tags: 'Vegetarian · Ella favourite', tag: 'Vegetarian' },
  { id: 'pumpkin-soup', category: 'Soup', name: 'Creamy Pumpkin Soup', price: 900, description: 'Silky pumpkin blended with a gentle touch of spice.', ingredients: 'Pumpkin · coconut cream · cinnamon · toasted seeds', time: '15–20 min', tags: 'Vegetarian · Creamy', tag: 'Vegetarian' },
  { id: 'chicken-soup', category: 'Soup', name: 'Creamy Chicken Soup', price: 900, description: 'A rich, cosy bowl for the cool mountain air.', ingredients: 'Chicken · cream · sweet corn · herbs · black pepper', time: '18–22 min', tags: 'Comforting · Made to order', tag: 'Popular' },
  { id: 'sweet-corn-soup', category: 'Soup', name: 'Sweet Corn Soup', price: 900, description: 'Golden sweet corn, vegetables and a silky savoury broth.', ingredients: 'Sweet corn · vegetables · egg · spring onion', time: '15–20 min', tags: 'Vegetarian option · Warm & bright', tag: 'Popular' },
  { id: 'chicken-egg-noodle-soup', category: 'Soup', name: 'Chicken Egg Noodle Soup', price: 1000, description: 'Slurpable noodles with chicken, egg and a warming broth.', ingredients: 'Noodles · chicken · egg · spring onion · clear broth', time: '18–25 min', tags: 'Hearty · Made to order', tag: 'Popular' },
  // Sweet corner and cold treats
  { id: 'fruit-salad-plain', category: 'Sweet Corner', name: 'Fruit Salad Plain', price: 650, description: 'A fresh bowl of the island’s sweetest seasonal fruit.', ingredients: 'Seasonal fruit · lime · mint', time: '5–8 min', tags: 'Vegan · Refreshing', tag: 'Fresh' },
  { id: 'ice-cream', category: 'Ice Cream', name: 'Ice Cream', price: 750, description: 'A cool, creamy scoop to end the climb on a sweet note.', ingredients: 'Ice cream · your choice of available flavour', time: '5 min', tags: 'Chilled · Ask for flavours', tag: 'Sweet' },
  { id: 'curd-and-kithul', category: 'Sweet Corner', name: 'Curd & Kithul', price: 750, description: 'Thick local curd drizzled with deep, floral kithul treacle.', ingredients: 'Buffalo curd · Kithul treacle', time: '5 min', tags: 'Local favourite · Vegetarian', tag: 'Local' },
  { id: 'vanilla-ice-cream', category: 'Ice Cream', name: 'Vanilla', price: 800, description: 'Classic vanilla ice cream, cool and velvety.', ingredients: 'Vanilla ice cream', time: '5 min', tags: 'Sweet · Chilled', tag: 'Sweet' },
  { id: 'chocolate-ice-cream', category: 'Ice Cream', name: 'Chocolate', price: 800, description: 'A scoop of rich chocolate comfort.', ingredients: 'Chocolate ice cream', time: '5 min', tags: 'Sweet · Chilled', tag: 'Sweet' },
  // Boiled vegetables and sides
  { id: 'boiled-vegetable', category: 'Boiled Vegetables', name: 'Vegetable', price: 1000, description: 'Simple, fresh vegetables kept bright and full of flavour.', ingredients: 'Seasonal vegetables · coconut · lime · salt', time: '15–20 min', tags: 'Vegetarian · Fresh', tag: 'Vegetarian' },
  { id: 'boiled-chicken', category: 'Boiled Vegetables', name: 'Chicken', price: 1400, description: 'Tender chicken with a clean, vegetable-forward finish.', ingredients: 'Chicken · seasonal vegetables · herbs', time: '20–25 min', tags: 'Protein · Light', tag: 'Popular' },
  { id: 'boiled-prawns', category: 'Boiled Vegetables', name: 'Prawns', price: 1700, description: 'Juicy prawns with garden vegetables and a squeeze of lime.', ingredients: 'Prawns · seasonal vegetables · herbs · lime', time: '20–25 min', tags: 'Seafood · Fresh', tag: 'Fresh' },
  // Main dishes
  { id: 'sri-lankan-rice-curry', category: 'Main Dish', name: 'Sri Lankan Vegetable Rice & Curry', price: 1350, description: 'Our island classic, served with five comforting curries.', ingredients: 'Red rice · 5 vegetable curries · sambol · papadum', time: '20–25 min', tags: 'Vegetarian · Five curries', tag: 'Local' },
  { id: 'add-on-chicken-curry', category: 'Main Dish', name: 'Add-on: Chicken Curry', price: 550, description: 'A fragrant serving of Umbrella’s chicken curry for your table.', ingredients: 'Chicken · roasted spices · coconut milk · curry leaves', time: '10–15 min', tags: 'Add-on · House curry', tag: 'Add-on' },
  { id: 'add-on-baby-jackfruit', category: 'Main Dish', name: 'Add-on: Baby Jackfruit Curry', price: 550, description: 'Young jackfruit cooked until tender in island spices.', ingredients: 'Baby jackfruit · coconut milk · roasted spices', time: '10–15 min', tags: 'Vegetarian · Add-on', tag: 'Add-on' },
  { id: 'coconut-rotti', category: 'Main Dish', name: 'Coconut Rotti', price: 1350, description: 'Fresh coconut rotti with dhal curry, sambal and lunu miris.', ingredients: 'Coconut rotti · dhal curry · coconut sambal · lunu miris', time: '20–25 min', tags: 'Vegetarian · Sri Lankan classic', tag: 'Local', image: 'assets/roti.jpg' },
  { id: 'vegetable-fried-rice', category: 'Main Dish', name: 'Vegetable Fried Rice', price: 1500, description: 'Wok-tossed rice with mushroom devilled, garlic kankun and chilli paste.', ingredients: 'Rice · vegetables · mushroom devilled · garlic kankun · chilli paste', time: '20–25 min', tags: 'Vegetarian · Wok-tossed', tag: 'Vegetarian', image: 'assets/fried-rice.jpg' },
  { id: 'egg-fried-rice', category: 'Main Dish', name: 'Egg Fried Rice', price: 1800, description: 'Fragrant fried rice with chicken devilled, garlic kankun and chilli paste.', ingredients: 'Rice · egg · chicken devilled · garlic kankun · chilli paste', time: '20–25 min', tags: 'Hearty · Wok-tossed', tag: 'Popular', image: 'assets/fried-rice.jpg' },
  { id: 'pepper-chicken-mash', category: 'Main Dish', name: 'Ella Valley Pepper Chicken & Mash', price: 1950, description: 'Our chef’s special: juicy pepper chicken with silky mash and mountain soul.', ingredients: 'Pepper chicken · potato mash · seasonal vegetables · herbs', time: '25–30 min', tags: "Chef's special · Made to order", tag: "Chef's pick", featured: true },
  // Chopsey and starters
  { id: 'vegetable-chopsey', category: 'Chopsey', name: 'Vegetable Chopsey', price: 1300, description: 'Crisp vegetables in a glossy, savoury chopsey sauce.', ingredients: 'Carrot · cabbage · beans · spring onion · chopsey sauce', time: '20–25 min', tags: 'Vegetarian · Wok-tossed', tag: 'Vegetarian' },
  { id: 'chicken-chopsey', category: 'Chopsey', name: 'Chicken Chopsey', price: 1600, description: 'Tender chicken and crisp vegetables in our house sauce.', ingredients: 'Chicken · carrot · cabbage · beans · chopsey sauce', time: '20–25 min', tags: 'Hearty · Wok-tossed', tag: 'Popular' },
  { id: 'prawns-chopsey', category: 'Chopsey', name: 'Prawns Chopsey', price: 1900, description: 'Juicy prawns, vegetables and a glossy savoury finish.', ingredients: 'Prawns · carrot · cabbage · beans · chopsey sauce', time: '20–25 min', tags: 'Seafood · Wok-tossed', tag: 'Fresh' },
  { id: 'chicken-wings', category: 'Stews / Starters', name: 'Chicken Wings', price: 900, description: 'Golden, crunchy wings made for sharing.', ingredients: 'Chicken wings · house spice rub · chilli dip', time: '20–25 min', tags: 'To share · Crispy', tag: 'Popular' },
  { id: 'potato-wedges', category: 'Stews / Starters', name: 'Potato Wedges', price: 900, description: 'Chunky wedges with a crisp edge and fluffy middle.', ingredients: 'Potato · house seasoning · chilli dip', time: '15–20 min', tags: 'Vegetarian · To share', tag: 'Vegetarian' },
  { id: 'buttered-mushroom', category: 'Stews / Starters', name: 'Buttered Mushroom', price: 900, description: 'Mushrooms sautéed in butter, garlic and a little Ella magic.', ingredients: 'Fresh mushrooms · butter · garlic · herbs', time: '12–18 min', tags: 'Vegetarian · To share', tag: 'Vegetarian' },
  { id: 'masala-papadam', category: 'Stews / Starters', name: 'Masala Papadam', price: 900, description: 'Crisp papadam topped with a bright, spicy masala.', ingredients: 'Papadam · tomato · onion · chilli · coriander', time: '8–12 min', tags: 'Vegetarian · Spicy', tag: 'Spicy' },
  // Drinks
  { id: 'water', category: 'Soft Drinks', name: 'Water', price: 250, description: 'A chilled 1L bottle for the road ahead.', ingredients: 'Still water · 1 litre', time: 'Ready now', tags: '1L · Chilled', tag: 'Ready' },
  { id: 'coca-cola', category: 'Soft Drinks', name: 'Coca Cola', price: 350, description: 'An ice-cold classic.', ingredients: 'Coca Cola · ice on request', time: 'Ready now', tags: 'Chilled · 330ml', tag: 'Chilled' },
  { id: 'sprite', category: 'Soft Drinks', name: 'Sprite', price: 350, description: 'Bright, bubbly and best served cold.', ingredients: 'Sprite · ice on request', time: 'Ready now', tags: 'Chilled · 330ml', tag: 'Chilled' },
  { id: 'ginger-beer', category: 'Soft Drinks', name: 'Ginger Beer', price: 350, description: 'A sparkling ginger lift for the table.', ingredients: 'Ginger beer · ice on request', time: 'Ready now', tags: 'Chilled · 330ml', tag: 'Chilled' },
  { id: 'soda', category: 'Soft Drinks', name: 'Soda', price: 350, description: 'Clean, fizzy refreshment.', ingredients: 'Soda water · lime on request', time: 'Ready now', tags: 'Chilled · 330ml', tag: 'Chilled' },
  { id: 'lime-juice', category: 'Fresh Juice', name: 'Lime', price: 800, description: 'A bright squeeze of island sunshine over ice.', ingredients: 'Fresh lime · water · sugar · ice', time: '8–10 min', tags: 'Freshly blended · Refreshing', tag: 'Fresh' },
  { id: 'banana-juice', category: 'Fresh Juice', name: 'Banana', price: 800, description: 'Creamy, naturally sweet and full of good energy.', ingredients: 'Banana · milk or water · honey · ice', time: '8–10 min', tags: 'Freshly blended · Creamy', tag: 'Fresh' },
  { id: 'pineapple-juice', category: 'Fresh Juice', name: 'Pineapple', price: 800, description: 'Tropical, tangy and made fresh to order.', ingredients: 'Fresh pineapple · water · ice', time: '8–10 min', tags: 'Freshly blended · Tropical', tag: 'Fresh' },
  { id: 'mango-juice', category: 'Fresh Juice', name: 'Mango', price: 800, description: 'Golden mango blended smooth.', ingredients: 'Fresh mango · water · ice', time: '8–10 min', tags: 'Freshly blended · Tropical', tag: 'Fresh' },
  { id: 'watermelon-juice', category: 'Fresh Juice', name: 'Watermelon', price: 800, description: 'Cool, juicy and made for a sunny Ella afternoon.', ingredients: 'Fresh watermelon · lime · ice', time: '8–10 min', tags: 'Freshly blended · Hydrating', tag: 'Fresh' },
  { id: 'papaya-juice', category: 'Fresh Juice', name: 'Papaya', price: 800, description: 'Soft, tropical sweetness in a glass.', ingredients: 'Fresh papaya · water · lime · ice', time: '8–10 min', tags: 'Freshly blended · Tropical', tag: 'Fresh' },
  { id: 'plain-lassie', category: 'Lassie', name: 'Plain Lassie', price: 950, description: 'Cool, creamy local curd blended into a classic lassi.', ingredients: 'Curd · milk · sugar · cardamom', time: '8–10 min', tags: 'Refreshing · Vegetarian', tag: 'Local' },
  { id: 'banana-lassie', category: 'Lassie', name: 'Banana Lassie', price: 950, description: 'A creamy banana twist on a mountain favourite.', ingredients: 'Curd · banana · milk · sugar', time: '8–10 min', tags: 'Refreshing · Creamy', tag: 'Fresh' },
  { id: 'mango-lassie', category: 'Lassie', name: 'Mango Lassie', price: 950, description: 'Silky curd and golden mango, blended together.', ingredients: 'Curd · mango · milk · sugar', time: '8–10 min', tags: 'Refreshing · Tropical', tag: 'Fresh' },
  { id: 'papaya-lassie', category: 'Lassie', name: 'Papaya Lassie', price: 950, description: 'A mellow tropical lassi with fresh papaya.', ingredients: 'Curd · papaya · milk · sugar', time: '8–10 min', tags: 'Refreshing · Tropical', tag: 'Fresh' },
  { id: 'vanilla-milkshake', category: 'Milkshake', name: 'Vanilla Milkshake', price: 950, description: 'Creamy vanilla comfort in a tall glass.', ingredients: 'Vanilla ice cream · milk · vanilla', time: '8–10 min', tags: 'Creamy · Chilled', tag: 'Sweet' },
  { id: 'chocolate-milkshake', category: 'Milkshake', name: 'Chocolate Milkshake', price: 950, description: 'Deep chocolate, blended thick and cold.', ingredients: 'Chocolate ice cream · milk · chocolate', time: '8–10 min', tags: 'Creamy · Chilled', tag: 'Sweet' },
  { id: 'strawberry-milkshake', category: 'Milkshake', name: 'Strawberry Milkshake', price: 950, description: 'A soft pink shake with real strawberry flavour.', ingredients: 'Strawberry · ice cream · milk', time: '8–10 min', tags: 'Creamy · Chilled', tag: 'Sweet' },
  { id: 'chocolate-banana-milkshake', category: 'Milkshake', name: 'Chocolate Banana Milkshake', price: 1000, description: 'Chocolate and banana in one very good decision.', ingredients: 'Banana · chocolate · ice cream · milk', time: '8–10 min', tags: 'Creamy · House favourite', tag: 'Popular' },
  // Tea & coffee
  { id: 'black-tea-small', category: 'Tea & Coffee', name: 'Sri Lankan Black Tea · Small pot', price: 500, description: 'Bold Ceylon tea poured from a small pot.', ingredients: 'Ceylon black tea · hot water', time: '5–8 min', tags: 'Small pot · Ceylon tea', tag: 'Local' },
  { id: 'black-tea-big', category: 'Tea & Coffee', name: 'Sri Lankan Black Tea · Big pot', price: 600, description: 'A generous pot of bold Ceylon tea for the table.', ingredients: 'Ceylon black tea · hot water', time: '5–8 min', tags: 'Big pot · Ceylon tea', tag: 'Local' },
  { id: 'healthy-tea-small', category: 'Tea & Coffee', name: 'Healthy Tea · Small pot', price: 550, description: 'A soothing, fragrant pot made for slow mornings.', ingredients: 'Herbal tea blend · hot water · local botanicals', time: '5–8 min', tags: 'Small pot · Herbal', tag: 'Fresh' },
  { id: 'healthy-tea-big', category: 'Tea & Coffee', name: 'Healthy Tea · Big pot', price: 650, description: 'A generous herbal brew for sharing.', ingredients: 'Herbal tea blend · hot water · local botanicals', time: '5–8 min', tags: 'Big pot · Herbal', tag: 'Fresh' },
  { id: 'black-coffee-small', category: 'Tea & Coffee', name: 'Sri Lankan Black Coffee · Small pot', price: 550, description: 'Strong, aromatic black coffee with a local soul.', ingredients: 'Sri Lankan coffee · hot water', time: '5–8 min', tags: 'Small pot · Ceylon coffee', tag: 'Local' },
  { id: 'black-coffee-big', category: 'Tea & Coffee', name: 'Sri Lankan Black Coffee · Big pot', price: 650, description: 'A generous pot of Sri Lankan black coffee.', ingredients: 'Sri Lankan coffee · hot water', time: '5–8 min', tags: 'Big pot · Ceylon coffee', tag: 'Local' },
  { id: 'ice-tea', category: 'Tea & Coffee', name: 'Ice Tea', price: 850, description: 'Black tea shaken cold with lime and plenty of ice.', ingredients: 'Black tea · fresh lime · sugar · ice', time: '8–10 min', tags: 'With lime · Chilled', tag: 'Fresh' },
  { id: 'ice-coffee', category: 'Tea & Coffee', name: 'Ice Coffee', price: 850, description: 'Cold, creamy coffee made with milk and black coffee.', ingredients: 'Black coffee · milk · sugar · ice', time: '8–10 min', tags: 'With milk · Chilled', tag: 'Popular' },
  // Pancakes
  { id: 'banana-pineapple-jam-pancake', category: 'Pancakes', name: 'Banana & Pineapple Pancake · Jam', price: 900, description: 'Warm fruit pancakes finished with a glossy jam topping.', ingredients: 'Banana · pineapple · pancake · jam', time: '15–20 min', tags: 'Sweet · Fruit topping', tag: 'Sweet', image: 'assets/pancake.jpg' },
  { id: 'banana-pineapple-ice-cream-pancake', category: 'Pancakes', name: 'Banana & Pineapple Pancake · Ice Cream', price: 1000, description: 'Fruit-filled pancakes with a cool scoop on top.', ingredients: 'Banana · pineapple · pancake · vanilla ice cream', time: '15–20 min', tags: 'Sweet · Ice cream topping', tag: 'Sweet', image: 'assets/pancake.jpg' },
  { id: 'banana-pineapple-curd-pancake', category: 'Pancakes', name: 'Banana & Pineapple Pancake · Curd & Kitul', price: 1000, description: 'Soft fruit pancakes with curd and island kithul treacle.', ingredients: 'Banana · pineapple · pancake · curd · Kithul', time: '15–20 min', tags: 'Sweet · Local topping', tag: 'Local', image: 'assets/pancake.jpg' },
  { id: 'coconut-honey-pancake', category: 'Pancakes', name: 'Coconut Pancake · Coconut Honey', price: 900, description: 'Toasty coconut folded into a pancake with honey.', ingredients: 'Pancake · coconut · honey · coconut cream', time: '15–20 min', tags: 'Vegetarian · Sweet', tag: 'Sweet', image: 'assets/pancake.jpg' },
  { id: 'coconut-banana-pancake', category: 'Pancakes', name: 'Coconut Pancake · Coconut Banana', price: 950, description: 'A golden pancake with coconut and banana.', ingredients: 'Pancake · coconut · banana · honey', time: '15–20 min', tags: 'Vegetarian · Sweet', tag: 'Sweet', image: 'assets/pancake.jpg' },
  { id: 'chocolate-pancake', category: 'Pancakes', name: 'Chocolate Pancake', price: 950, description: 'Rich chocolate pancakes with a soft centre.', ingredients: 'Chocolate pancake · chocolate sauce · coconut', time: '15–20 min', tags: 'Sweet · Chocolate', tag: 'Sweet', image: 'assets/pancake.jpg' },
  { id: 'chocolate-banana-pancake', category: 'Pancakes', name: 'Chocolate Banana Pancake', price: 1000, description: 'Chocolate, banana and warm pancake — a crowd pleaser.', ingredients: 'Chocolate pancake · banana · chocolate sauce', time: '15–20 min', tags: 'Sweet · Chocolate', tag: 'Popular', image: 'assets/pancake.jpg' },
  { id: 'chocolate-coconut-pancake', category: 'Umbrella Special Pancakes', name: 'Chocolate & Coconut Pancake', price: 1050, description: 'Umbrella’s signature pairing of deep chocolate and toasted coconut.', ingredients: 'Chocolate pancake · coconut · chocolate sauce · coconut flakes', time: '18–22 min', tags: 'Umbrella special · Sweet', tag: 'Special', featured: true, image: 'assets/pancake.jpg' },
  { id: 'cheese-chocolate-pancake', category: 'Umbrella Special Pancakes', name: 'Cheese Chocolate Pancake', price: 1050, description: 'A surprising sweet-savoury finish with chocolate and cheese.', ingredients: 'Chocolate pancake · cheese · chocolate sauce', time: '18–22 min', tags: 'Umbrella special · Sweet & savoury', tag: 'Special', image: 'assets/pancake.jpg' },
  // Omelette
  { id: 'cheese-tomato-onion-omelette', category: 'Omelette', name: 'Cheese, Tomato & Onion Omelette', price: 950, description: 'A soft omelette packed with fresh tomato, onion and cheese.', ingredients: 'Egg · cheese · tomato · onion · herbs', time: '12–18 min', tags: 'Vegetarian · Breakfast all day', tag: 'Popular' },
  { id: 'mushroom-omelette', category: 'Omelette', name: 'Cheese, Tomato, Onion & Mushroom Omelette', price: 1000, description: 'A savoury omelette with earthy mushrooms and melted cheese.', ingredients: 'Egg · cheese · tomato · onion · fresh mushrooms', time: '12–18 min', tags: 'Vegetarian · Breakfast all day', tag: 'Vegetarian' },
  { id: 'sausage-omelette', category: 'Omelette', name: 'Cheese, Tomato, Onion & Sausage Omelette', price: 1000, description: 'A hearty, cheesy omelette with sausage and fresh vegetables.', ingredients: 'Egg · cheese · tomato · onion · sausage', time: '12–18 min', tags: 'Hearty · Breakfast all day', tag: 'Popular' },
  { id: 'chicken-omelette', category: 'Omelette', name: 'Cheese & Chicken Omelette', price: 1050, description: 'Fluffy egg, tender chicken and melted cheese.', ingredients: 'Egg · cheese · chicken · herbs', time: '12–18 min', tags: 'Protein · Breakfast all day', tag: 'Popular' },
  { id: 'umbrella-special-omelette', category: 'Umbrella Special Omelette', name: 'Umbrella Special Omelette', price: 1100, description: 'The full house: cheese, chicken, mushrooms and sausage.', ingredients: 'Egg · cheese · chicken · mushrooms · sausage', time: '15–20 min', tags: 'Umbrella special · Hearty', tag: 'Special' },
  // Signature rotti
  { id: 'ella-green-garden-roti', category: 'Signature Roti', name: 'Ella Green Garden', price: 900, description: 'Traditional roti filled with fresh garden vegetables.', ingredients: 'Carrot · leeks · cabbage · beans · roti', time: '15–20 min', tags: 'Vegetarian · Signature roti', tag: 'Vegetarian', image: 'assets/hero-food.jpg' },
  { id: 'little-adams-peak-roti', category: 'Signature Roti', name: "Little Adam's Peak Special", price: 1100, description: 'Cheese, tomato, onion and bell pepper in a freshly griddled roti.', ingredients: 'Tomato · cheese · onion · bell pepper · roti', time: '15–20 min', tags: 'Vegetarian · Signature roti', tag: 'Popular', image: 'assets/hero-food.jpg' },
  { id: 'wild-mushroom-roti', category: 'Signature Roti', name: 'Wild Mushroom Roti', price: 1100, description: 'Garden vegetables and fresh mushrooms folded into warm roti.', ingredients: 'Carrot · leeks · cabbage · beans · fresh mushrooms · roti', time: '15–20 min', tags: 'Vegetarian · Signature roti', tag: 'Vegetarian', image: 'assets/hero-food.jpg' },
  { id: 'nine-arch-tropical-roti', category: 'Signature Roti', name: 'Nine Arch Tropical Roti', price: 1200, description: 'A Hawaiian-style roti with pineapple, tomato and cheese.', ingredients: 'Tomato · cheese · onion · pineapple · roti', time: '15–20 min', tags: 'Vegetarian · Tropical', tag: 'Fresh', image: 'assets/hero-food.jpg' },
  { id: 'ella-rock-chicken-roti', category: 'Signature Roti', name: 'Ella Rock Chicken Roti', price: 1200, description: 'Our chicken and mushroom roti with a mountain-sized appetite.', ingredients: 'Carrot · leeks · cabbage · beans · chicken · mushrooms · roti', time: '18–23 min', tags: 'Hearty · Signature roti', tag: 'Popular', image: 'assets/hero-food.jpg' },
  { id: 'ravana-cheesy-roti', category: 'Signature Roti', name: 'Ravana’s Cheesy Treat', price: 1300, description: 'Cheese, sausage and colourful vegetables in a golden roti.', ingredients: 'Tomato · cheese · onion · bell pepper · sausage · roti', time: '18–23 min', tags: 'Hearty · Signature roti', tag: 'Popular', image: 'assets/hero-food.jpg' },
  // Kottu junction
  { id: 'misty-mountain-veggie-kottu', category: 'Kottu Junction', name: 'Misty Mountain Veggie', price: 1200, description: 'Vegetable kottu chopped to perfection with the classic Ella beat.', ingredients: 'Roti · carrot · leeks · cabbage · beans · spices', time: '18–23 min', tags: 'Vegetarian · Rhythmic chop', tag: 'Vegetarian', featured: true, image: 'assets/kottu.jpg' },
  { id: 'highland-mushroom-kottu', category: 'Kottu Junction', name: 'Highland Mushroom Kottu', price: 1300, description: 'Garden vegetables and mushrooms in a fragrant, sizzling kottu.', ingredients: 'Roti · carrot · leeks · cabbage · beans · mushrooms · spices', time: '18–23 min', tags: 'Vegetarian · Rhythmic chop', tag: 'Vegetarian', image: 'assets/kottu.jpg' },
  { id: 'ella-express-kottu', category: 'Kottu Junction', name: 'The Ella Express', price: 1600, description: 'Chicken and egg kottu with the full vegetable line-up.', ingredients: 'Roti · carrot · leeks · cabbage · beans · chicken · egg', time: '20–25 min', tags: 'Hearty · Rhythmic chop', tag: 'Popular', image: 'assets/kottu.jpg' },
  { id: 'umbrella-ultimate-kottu', category: 'Kottu Junction', name: 'Umbrella Ultimate Legend', price: 1900, description: 'The whole mountain: chicken, egg, mushrooms, sausage and more.', ingredients: 'Roti · vegetables · chicken · egg · mushrooms · sausage · spices', time: '22–28 min', tags: 'Special · Big appetite · Rhythmic chop', tag: 'Special', featured: true, image: 'assets/kottu.jpg' }
];

const categoryGroups = [
  { label: 'All dishes', value: 'all' },
  { label: "Chef's picks", value: 'featured' },
  { label: 'Mains', value: 'main', categories: ['Main Dish', 'Boiled Vegetables', 'Chopsey'] },
  { label: 'Roti & Kottu', value: 'island', categories: ['Signature Roti', 'Kottu Junction'] },
  { label: 'Breakfast', value: 'breakfast', categories: ['Omelette', 'Umbrella Special Omelette', 'Soup'] },
  { label: 'Pancakes', value: 'pancakes', categories: ['Pancakes', 'Umbrella Special Pancakes'] },
  { label: 'Sweet corner', value: 'sweet', categories: ['Sweet Corner', 'Ice Cream'] },
  { label: 'Drinks', value: 'drinks', categories: ['Soft Drinks', 'Fresh Juice', 'Lassie', 'Milkshake', 'Tea & Coffee'] },
  { label: 'Starters', value: 'starters', categories: ['Stews / Starters'] }
];

const imageByCategory = {
  'Soup': 'assets/soup.jpg',
  'Kottu Junction': 'assets/kottu.jpg',
  'Pancakes': 'assets/pancake.jpg',
  'Umbrella Special Pancakes': 'assets/pancake.jpg',
  'Fresh Juice': 'assets/juice.jpg',
  'Lassie': 'assets/lassie.jpg',
  'Milkshake': 'assets/milkshake.jpg',
  'Soft Drinks': 'assets/soft-drinks.jpg',
  'Tea & Coffee': 'assets/tea.jpg',
  'Signature Roti': 'assets/roti.jpg',
  'Main Dish': 'assets/rice-curry.jpg',
  'Boiled Vegetables': 'assets/rice-curry.jpg',
  'Chopsey': 'assets/chopsey.jpg',
  'Stews / Starters': 'assets/starters.jpg',
  'Omelette': 'assets/omelette.jpg',
  'Umbrella Special Omelette': 'assets/omelette.jpg',
  'Sweet Corner': 'assets/sweet-treats.jpg',
  'Ice Cream': 'assets/sweet-treats.jpg'
};

const itemMap = new Map(menuItems.map(item => [item.id, item]));
let currentCategory = 'all';
let currentQuery = '';
let selectedItem = null;
let selectedQuantity = 1;
let order = {};
let toastTimeout;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const money = amount => `Rs. ${amount.toLocaleString('en-LK')}`;
const imageFor = item => item.image || imageByCategory[item.category] || (item.category === 'Soup' || item.category === 'Main Dish' || item.category === 'Boiled Vegetables' || item.category === 'Chopsey' ? 'assets/hero-food.jpg' : 'image-search/umbrella-cafe-ella-sri-lanka-logo-food-2.jpg');
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));

function renderCategories() {
  $('#categoryScroller').innerHTML = categoryGroups.map(group => `<button class="category-button ${group.value === currentCategory ? 'active' : ''}" data-category="${group.value}" type="button">${group.label}</button>`).join('');
}

function getFilteredItems() {
  let items = menuItems;
  if (currentCategory === 'featured') items = items.filter(item => item.featured);
  else if (currentCategory !== 'all') {
    const group = categoryGroups.find(item => item.value === currentCategory);
    if (group?.categories) items = items.filter(item => group.categories.includes(item.category));
  }
  if (currentQuery) {
    const query = currentQuery.toLowerCase();
    items = items.filter(item => [item.name, item.category, item.description, item.ingredients, item.tags].join(' ').toLowerCase().includes(query));
  }
  return items;
}

function cardTag(item) {
  if (!item.tag) return '';
  const tagClass = item.tag === 'Vegetarian' ? 'veg' : item.tag === 'Chef\'s pick' || item.tag === 'Special' ? 'hot' : '';
  return `<span class="card-tag ${tagClass}">${escapeHtml(item.tag)}</span>`;
}

function renderFeatured() {
  const featured = menuItems.filter(item => item.featured).slice(0, 3);
  $('#featuredGrid').innerHTML = featured.map(item => `<article class="featured-card" data-id="${item.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(item.name)} details">
      <img src="${imageFor(item)}" alt="${escapeHtml(item.name)}" />
      <span class="featured-arrow">↗</span>
      <div class="featured-content"><span class="featured-kicker">${item.category} · ${item.tag || 'House favourite'}</span><h3>${escapeHtml(item.name)}</h3><div class="featured-bottom"><p>${escapeHtml(item.description)}</p><span class="featured-price">${money(item.price)}</span></div></div>
    </article>`).join('');
}

function renderMenu() {
  let items = getFilteredItems();
  // The chef's picks already have a dedicated editorial row above the catalogue.
  // Keep the all-dishes view clean while still surfacing them in search and their own filter.
  if (currentCategory === 'all' && !currentQuery) items = items.filter(item => !item.featured);
  const grid = $('#menuGrid');
  const featuredGrid = $('#featuredGrid');
  const empty = $('#emptyState');
  const group = categoryGroups.find(item => item.value === currentCategory);
  const categoryLabel = group?.label || 'all favourites';
  $('#resultsNote').innerHTML = `Showing <b>${currentQuery ? `${items.length} result${items.length === 1 ? '' : 's'}` : categoryLabel.toLowerCase()}</b>`;
  grid.innerHTML = items.map(item => `<article class="menu-card" data-id="${item.id}" tabindex="0" role="button" aria-label="View ${escapeHtml(item.name)} details">
      <div class="card-image ${['Fresh Juice', 'Lassie', 'Milkshake', 'Soft Drinks'].includes(item.category) ? 'card-image--drink' : ''}"><img src="${imageFor(item)}" alt="${escapeHtml(item.name)}" loading="lazy" />${cardTag(item)}<span class="card-open">↗</span></div>
      <div class="card-copy"><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p><div class="card-bottom"><span class="card-price">${money(item.price)}</span><span class="card-time">${escapeHtml(item.time)}</span></div></div>
    </article>`).join('');
  const hasItems = items.length > 0;
  grid.hidden = !hasItems;
  empty.hidden = hasItems;
  featuredGrid.hidden = currentCategory !== 'all' || Boolean(currentQuery);
}

function renderQR() {
  const qr = $('#qrCode');
  const size = 21;
  const cells = [];
  const reserved = (x, y) => {
    const zones = [[0, 0], [size - 7, 0], [0, size - 7]];
    return zones.some(([left, top]) => x >= left && x < left + 7 && y >= top && y < top + 7);
  };
  const finder = (x, y, left, top) => {
    const dx = x - left; const dy = y - top;
    return dx >= 0 && dx < 7 && dy >= 0 && dy < 7 && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
  };
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const isFinder = finder(x, y, 0, 0) || finder(x, y, size - 7, 0) || finder(x, y, 0, size - 7);
      const noise = ((x * 19 + y * 13 + x * y * 7 + 5) % 11) > 5;
      const on = isFinder || (!reserved(x, y) && noise);
      cells.push(`<i class="${on ? 'on' : ''}"></i>`);
    }
  }
  qr.innerHTML = cells.join('');
}

function openItem(itemId) {
  const item = itemMap.get(itemId);
  if (!item) return;
  selectedItem = item;
  selectedQuantity = 1;
  $('#detailImage').src = imageFor(item);
  $('#detailImage').alt = item.name;
  $('#detailCategory').textContent = item.category.toUpperCase();
  $('#detailTime').textContent = item.time.toUpperCase();
  $('#detailName').textContent = item.name;
  $('#detailPrice').textContent = money(item.price);
  $('#detailDescription').textContent = item.description;
  $('#detailIngredients').textContent = item.ingredients;
  $('#detailTags').textContent = item.tags;
  $('#quantityValue').textContent = selectedQuantity;
  $('#itemModal').classList.add('open');
  $('#itemModal').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
  setTimeout(() => $('#modalClose').focus(), 80);
}

function closeItem() {
  $('#itemModal').classList.remove('open');
  $('#itemModal').setAttribute('aria-hidden', 'true');
  if (!$('#orderDrawer').classList.contains('open') && !$('#videoBackdrop').classList.contains('open')) document.body.classList.remove('locked');
}

function showToast(message = 'Added to your table order.') {
  $('#toast p').textContent = message;
  $('#toast').classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => $('#toast').classList.remove('show'), 2600);
}

function addSelectedToOrder() {
  if (!selectedItem) return;
  order[selectedItem.id] = (order[selectedItem.id] || 0) + selectedQuantity;
  renderOrder();
  closeItem();
  showToast(`${selectedItem.name} added to your table order.`);
}

function orderCount() { return Object.values(order).reduce((total, quantity) => total + quantity, 0); }
function orderTotal() { return Object.entries(order).reduce((total, [id, quantity]) => total + (itemMap.get(id)?.price || 0) * quantity, 0); }

function renderOrder() {
  const count = orderCount();
  $('#orderCount').textContent = count;
  $('#orderTotal').textContent = money(orderTotal());
  $('#placeOrderButton').disabled = count === 0;
  const orderItems = $('#orderItems');
  if (!count) {
    orderItems.innerHTML = `<div class="order-empty"><span class="empty-plate">◌</span><h3>Your table is waiting.</h3><p>Add something delicious from the menu and it will appear here.</p><button class="outline-button" id="browseButton" type="button">Browse the menu</button></div>`;
    return;
  }
  orderItems.innerHTML = Object.entries(order).filter(([, quantity]) => quantity > 0).map(([id, quantity]) => {
    const item = itemMap.get(id);
    return `<div class="order-line"><img class="order-line-image" src="${imageFor(item)}" alt="" /><div><h4>${escapeHtml(item.name)}</h4><small>${money(item.price)} each</small><div class="order-quantity"><button type="button" data-order-action="decrease" data-id="${item.id}" aria-label="Decrease ${escapeHtml(item.name)}">−</button><span>${quantity}</span><button type="button" data-order-action="increase" data-id="${item.id}" aria-label="Increase ${escapeHtml(item.name)}">+</button></div></div><div class="order-line-price">${money(item.price * quantity)}<button class="remove-item" type="button" data-order-action="remove" data-id="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">×</button></div></div>`;
  }).join('');
}

function openOrder() {
  $('#orderDrawer').classList.add('open');
  $('#orderDrawer').setAttribute('aria-hidden', 'false');
  $('#drawerBackdrop').classList.add('open');
  document.body.classList.add('locked');
  setTimeout(() => $('#drawerClose').focus(), 100);
}
function closeOrder() {
  $('#orderDrawer').classList.remove('open');
  $('#orderDrawer').setAttribute('aria-hidden', 'true');
  $('#drawerBackdrop').classList.remove('open');
  if (!$('#itemModal').classList.contains('open') && !$('#videoBackdrop').classList.contains('open')) document.body.classList.remove('locked');
}

function openVideo() {
  $('#videoBackdrop').classList.add('open');
  $('#videoBackdrop').setAttribute('aria-hidden', 'false');
  document.body.classList.add('locked');
}
function closeVideo() {
  $('#videoBackdrop').classList.remove('open');
  $('#videoBackdrop').setAttribute('aria-hidden', 'true');
  $('#videoStage').classList.remove('playing');
  if (!$('#itemModal').classList.contains('open') && !$('#orderDrawer').classList.contains('open')) document.body.classList.remove('locked');
}

function changeCategory(value) {
  currentCategory = value;
  renderCategories();
  renderMenu();
  $('#menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function handleCardActivation(event) {
  const card = event.target.closest('[data-id]');
  if (card && (card.classList.contains('menu-card') || card.classList.contains('featured-card'))) openItem(card.dataset.id);
}

function initEvents() {
  $('#categoryScroller').addEventListener('click', event => {
    const button = event.target.closest('[data-category]');
    if (button) changeCategory(button.dataset.category);
  });
  $('#featuredGrid').addEventListener('click', handleCardActivation);
  $('#menuGrid').addEventListener('click', handleCardActivation);
  $('#featuredGrid').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openItem(event.target.closest('[data-id]')?.dataset.id); } });
  $('#menuGrid').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openItem(event.target.closest('[data-id]')?.dataset.id); } });
  $('#menuSearch').addEventListener('input', event => { currentQuery = event.target.value.trim(); renderMenu(); });
  $('#clearSearch').addEventListener('click', () => { currentQuery = ''; $('#menuSearch').value = ''; currentCategory = 'all'; renderCategories(); renderMenu(); });
  $('#modalClose').addEventListener('click', closeItem);
  $('#itemModal').addEventListener('click', event => { if (event.target === $('#itemModal')) closeItem(); });
  $('#quantityDown').addEventListener('click', () => { selectedQuantity = Math.max(1, selectedQuantity - 1); $('#quantityValue').textContent = selectedQuantity; });
  $('#quantityUp').addEventListener('click', () => { selectedQuantity = Math.min(12, selectedQuantity + 1); $('#quantityValue').textContent = selectedQuantity; });
  $('#addToOrder').addEventListener('click', addSelectedToOrder);
  $('#videoButton').addEventListener('click', openVideo);
  $('#videoClose').addEventListener('click', closeVideo);
  $('#videoBackdrop').addEventListener('click', event => { if (event.target === $('#videoBackdrop')) closeVideo(); });
  $('#playLarge').addEventListener('click', () => $('#videoStage').classList.toggle('playing'));
  $('#orderButton').addEventListener('click', openOrder);
  $('#drawerClose').addEventListener('click', closeOrder);
  $('#drawerBackdrop').addEventListener('click', closeOrder);
  $('#orderItems').addEventListener('click', event => {
    const actionButton = event.target.closest('[data-order-action]');
    if (!actionButton) {
      if (event.target.id === 'browseButton') { closeOrder(); $('#menu').scrollIntoView({ behavior: 'smooth' }); }
      return;
    }
    const id = actionButton.dataset.id;
    if (actionButton.dataset.orderAction === 'increase') order[id] = (order[id] || 0) + 1;
    if (actionButton.dataset.orderAction === 'decrease') order[id] = Math.max(0, (order[id] || 0) - 1);
    if (actionButton.dataset.orderAction === 'remove') order[id] = 0;
    renderOrder();
  });
  $('#placeOrderButton').addEventListener('click', () => { if (orderCount()) { showToast('Order sent — your kitchen crew is on it!'); closeOrder(); } });
  $('#storyButton').addEventListener('click', () => $('#story').scrollIntoView({ behavior: 'smooth' }));
  $$('[data-offer-action]').forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    currentCategory = 'breakfast';
    currentQuery = '';
    $('#menuSearch').value = '';
    renderCategories();
    renderMenu();
    $('#menu').scrollIntoView({ behavior: 'smooth' });
    showToast('Breakfast favourites are ready for your table.');
  }));
  $('#languageButton').addEventListener('click', () => { $('#languageLabel').textContent = $('#languageLabel').textContent === 'EN' ? 'සිං' : 'EN'; showToast('Language toggle is ready for your Sinhala menu copy.'); });
  $('#menuToggle').addEventListener('click', () => { const nav = $('#mobileNav'); const isOpen = nav.classList.toggle('open'); nav.setAttribute('aria-hidden', String(!isOpen)); $('#menuToggle').setAttribute('aria-expanded', String(isOpen)); });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click', () => { $('#mobileNav').classList.remove('open'); $('#menuToggle').setAttribute('aria-expanded', 'false'); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { if ($('#videoBackdrop').classList.contains('open')) closeVideo(); else if ($('#itemModal').classList.contains('open')) closeItem(); else if ($('#orderDrawer').classList.contains('open')) closeOrder(); } if (event.key === '/' && document.activeElement.tagName !== 'INPUT') { event.preventDefault(); $('#menuSearch').focus(); } });
}

renderCategories();
renderFeatured();
renderMenu();
renderQR();
renderOrder();
initEvents();
