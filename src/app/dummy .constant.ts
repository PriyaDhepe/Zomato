export class zomato {
  indianHotels = [
    {
      id: 1,
      name: 'Spice Valley Retreat',
      location: 'Delhi',
      cuisines: ['North Indian', 'Chinese', 'Continental'],
      time: '8:00 AM-11:00 PM',
    },
    {
      id: 2,
      name: 'Saffron Bay Resort',
      location: 'Goa',
      cuisines: ['Goan', 'Seafood', 'Continental'],
      time: '9:00 AM-10:00 PM',
    },
    {
      id: 3,
      name: 'Royal Tandoor Palace',
      location: 'Jaipur',
      cuisines: ['North Indian', 'Rajasthani', 'Mughlai'],
      time: '10:00 AM-11:30 PM',
    },
    {
      id: 4,
      name: 'Lotus Garden Inn',
      location: 'Kolkata',
      cuisines: ['Bengali', 'Chinese', 'North Indian'],
      time: '7:00 AM-10:30 PM',
    },
    {
      id: 5,
      name: 'Green Leaf Paradise',
      location: 'Chennai',
      cuisines: ['South Indian', 'North Indian', 'Chinese'],
      time: '8:30 AM-9:00 PM',
    },
    {
      id: 6,
      name: 'Golden Oasis Resort',
      location: 'Mumbai',
      cuisines: ['Continental', 'Italian', 'Mexican'],
      time: '11:00 AM-10:00 PM',
    },
    {
      id: 7,
      name: 'Serenity Hills Retreat',
      location: 'Udaipur',
      cuisines: ['Rajasthani', 'North Indian', 'Chinese'],
      time: '9:00 AM-11:00 PM',
    },
    {
      id: 8,
      name: 'Tempting Tastes Hotel',
      location: 'Bangalore',
      cuisines: ['South Indian', 'Chinese', 'Continental'],
      time: '7:30 AM-10:30 PM',
    },
    {
      id: 9,
      name: 'Zesty Zest Inn',
      location: 'Hyderabad',
      cuisines: ['Hyderabadi', 'North Indian', 'Chinese'],
      time: '8:00 AM-11:00 PM',
    },
    {
      id: 10,
      name: 'Fiery Flavors Restaurant',
      location: 'Pune',
      cuisines: ['Maharashtrian', 'North Indian', 'Chinese'],
      time: '8:30 AM-10:30 PM',
    },
    {
      id: 11,
      name: 'Mystic Spice Hotel',
      location: 'Kochi',
      cuisines: ['Kerala Cuisine', 'Seafood', 'Continental'],
      time: '9:00 AM-10:00 PM',
    },
    {
      id: 12,
      name: 'Delightful Dine Resort',
      location: 'Agra',
      cuisines: ['North Indian', 'Mughlai', 'Chinese'],
      time: '8:00 AM-11:00 PM',
    },
    {
      id: 13,
      name: 'Vibrant Vistas Lodge',
      location: 'Ooty',
      cuisines: ['South Indian', 'Continental', 'Chinese'],
      time: '7:30 AM-10:30 PM',
    },
    {
      id: 14,
      name: 'Pepper Pot Haven',
      location: 'Kochi',
      cuisines: ['Kerala Cuisine', 'Seafood', 'Continental'],
      time: '9:00 AM-10:00 PM',
    },
    {
      id: 15,
      name: 'Gourmet Garden Retreat',
      location: 'Shimla',
      cuisines: ['North Indian', 'Chinese', 'Continental'],
      time: '8:30 AM-10:30 PM',
    },
  ];

  menuList = [
    {
      type: 'veg',
      category: ['starter', 'mainCourse', 'dessert'],
      name: [''],
    },
    {
      type: 'non-veg',
      category: ['starter', 'mainCourse', 'dessert'],
    },
  ];

  lmenuList = [
    {
      type: 'veg',
      name: 'Paneer Tikka',
      category: 'Starter',
      description: 'Cubes of paneer marinated in spices and grilled.',
    },
    {
      type: 'veg',
      name: 'Aloo Tikki',
      category: 'Starter',
      description: 'Spiced potato patties shallow-fried until crispy.',
    },
    {
      type: 'veg',
      name: 'Veg Manchurian',
      category: 'Starter',
      description: 'Vegetable balls in a spicy, tangy sauce.',
    },
    {
      type: 'veg',
      name: 'Corn Cutlet',
      category: 'Starter',
      description: 'Spicy corn patties fried to golden perfection.',
    },
    {
      type: 'veg',
      name: 'Hara Bhara Kebab',
      category: 'Starter',
      description: 'Spinach and mixed vegetables kebabs.',
    },
    {
      type: 'veg',
      name: 'Onion Bhaji',
      category: 'Starter',
      description: 'Fritters made with sliced onions and gram flour.',
    },
    {
      type: 'veg',
      name: 'Mushroom Tikka',
      category: 'Starter',
      description: 'Marinated mushrooms grilled to perfection.',
    },
    {
      type: 'veg',
      name: 'Papdi Chaat',
      category: 'Starter',
      description: 'Crispy flour chips topped with chutneys and yogurt.',
    },
    {
      type: 'veg',
      name: 'Veg Seekh Kebab',
      category: 'Starter',
      description: 'Skewered minced vegetable kebabs cooked on a grill.',
    },
    {
      type: 'veg',
      name: 'Samosa',
      category: 'Starter',
      description: 'Crispy pastry filled with spiced potatoes and peas.',
    },
    {
      type: 'veg',
      name: 'Vegetable Biryani',
      category: 'Main Course',
      description: 'Fragrant rice cooked with assorted vegetables and spices.',
    },
    {
      type: 'veg',
      name: 'Palak Paneer',
      category: 'Main Course',
      description: 'Cottage cheese cubes cooked in spinach gravy.',
    },
    {
      type: 'veg',
      name: 'Chole Bhature',
      category: 'Main Course',
      description: 'Spiced chickpeas served with fried bread.',
    },
    {
      type: 'veg',
      name: 'Kadai Vegetable',
      category: 'Main Course',
      description: 'Mixed vegetables cooked in a tomato-based gravy.',
    },
    {
      type: 'veg',
      name: 'Dal Makhani',
      category: 'Main Course',
      description: 'Creamy lentils cooked with spices and butter.',
    },
    {
      type: 'veg',
      name: 'Paneer Butter Masala',
      category: 'Main Course',
      description: 'Paneer cubes in a rich and creamy tomato-based gravy.',
    },
    {
      type: 'veg',
      name: 'Veg Kofta Curry',
      category: 'Main Course',
      description: 'Mixed vegetable balls in a flavorful curry.',
    },
    {
      type: 'veg',
      name: 'Aloo Gobi',
      category: 'Main Course',
      description: 'Potato and cauliflower cooked with spices.',
    },
    {
      type: 'veg',
      name: 'Baingan Bharta',
      category: 'Main Course',
      description: 'Smoky roasted eggplant mashed and cooked with spices.',
    },
    {
      type: 'veg',
      name: 'Matar Paneer',
      category: 'Main Course',
      description: 'Paneer and green peas in a tomato-based gravy.',
    },
    {
      type: 'veg',
      name: 'Gulab Jamun',
      category: 'Dessert',
      description: 'Deep-fried milk-solid dumplings soaked in sugar syrup.',
    },
    {
      type: 'veg',
      name: 'Rasgulla',
      category: 'Dessert',
      description: 'Soft cheese dumplings soaked in sugar syrup.',
    },
    {
      type: 'veg',
      name: 'Coconut Ladoo',
      category: 'Dessert',
      description: 'Sweet balls made with coconut and condensed milk.',
    },
    {
      type: 'veg',
      name: 'Fruit Custard',
      category: 'Dessert',
      description: 'Mixed fruits served with custard.',
    },
    {
      type: 'veg',
      name: 'Jalebi',
      category: 'Dessert',
      description: 'Deep-fried batter soaked in sugar syrup.',
    },
    {
      type: 'veg',
      name: 'Kheer',
      category: 'Dessert',
      description: 'Rice pudding made with milk and sugar, flavored with nuts.',
    },
    {
      type: 'veg',
      name: 'Badam Halwa',
      category: 'Dessert',
      description: 'Rich dessert made with almonds, sugar, and ghee.',
    },
    {
      type: 'veg',
      name: 'Rasmalai',
      category: 'Dessert',
      description: 'Soft cheese dumplings soaked in sweetened, thickened milk.',
    },
    {
      type: 'veg',
      name: 'Moong Dal Halwa',
      category: 'Dessert',
      description: 'Sweet lentil pudding made with moong dal, sugar, and ghee.',
    },
    {
      type: 'veg',
      name: 'Shahi Tukda',
      category: 'Dessert',
      description: 'Fried bread pudding served with thickened sweetened milk.',
    },

    //non-veg
    {
      type: 'non-veg',
      name: 'Chicken Lollipop',
      category: 'Starter',
      description: 'Crispy and flavorful chicken wings.',
    },
    {
      type: 'non-veg',
      name: 'Tandoori Chicken',
      category: 'Starter',
      description: 'Spicy marinated chicken grilled in a tandoor.',
    },
    {
      type: 'non-veg',
      name: 'Butter Garlic Prawns',
      category: 'Starter',
      description: 'Juicy prawns cooked in butter and garlic.',
    },
    {
      type: 'non-veg',
      name: 'Chicken Reshmi Kebab',
      category: 'Starter',
      description: 'Soft and succulent kebabs made with minced chicken.',
    },
    {
      type: 'non-veg',
      name: 'Lamb Chops',
      category: 'Starter',
      description: 'Grilled lamb chops marinated in spices.',
    },
    {
      type: 'non-veg',
      name: 'Chicken Tikka',
      category: 'Starter',
      description:
        'Boneless chicken marinated in yogurt and spices, grilled to perfection.',
    },
    {
      type: 'non-veg',
      name: 'Chicken 65',
      category: 'Starter',
      description: 'Spicy and tangy deep-fried chicken bites.',
    },
    {
      type: 'non-veg',
      name: 'Fish Fry',
      category: 'Starter',
      description: 'Crispy fried fish marinated in spices.',
    },
    {
      type: 'non-veg',
      name: 'Egg Pakora',
      category: 'Starter',
      description:
        'Boiled eggs coated in spiced gram flour batter and deep-fried.',
    },
    {
      type: 'non-veg',
      name: 'Prawn Tempura',
      category: 'Starter',
      description: 'Light and crispy deep-fried prawns.',
    },
    {
      type: 'non-veg',
      name: 'Chicken Tikka Masala',
      category: 'Main Course',
      description: 'Chicken pieces cooked in a creamy tomato-based sauce.',
    },
    {
      type: 'non-veg',
      name: 'Fish Curry',
      category: 'Main Course',
      description: 'Fish cooked in a flavorful curry.',
    },
    {
      type: 'non-veg',
      name: 'Mutton Rogan Josh',
      category: 'Main Course',
      description: 'Slow-cooked mutton in a rich gravy with aromatic spices.',
    },
    {
      type: 'non-veg',
      name: 'Chicken Biryani',
      category: 'Main Course',
      description: 'Aromatic rice layered with marinated chicken and spices.',
    },
    {
      type: 'non-veg',
      name: 'Egg Curry',
      category: 'Main Course',
      description: 'Hard-boiled eggs cooked in a flavorful curry.',
    },
    {
      type: 'non-veg',
      name: 'Butter Chicken',
      category: 'Main Course',
      description: 'Tender chicken cooked in a creamy tomato-based gravy.',
    },
    {
      type: 'non-veg',
      name: 'Prawn Curry',
      category: 'Main Course',
      description: 'Prawns cooked in a rich and spicy coconut-based curry.',
    },
    {
      type: 'non-veg',
      name: 'Chicken Korma',
      category: 'Main Course',
      description: 'Chicken cooked in a flavorful, creamy nut-based sauce.',
    },
    {
      type: 'non-veg',
      name: 'Keema Matar',
      category: 'Main Course',
      description: 'Minced meat cooked with peas and spices.',
    },
    {
      type: 'non-veg',
      name: 'Lamb Biryani',
      category: 'Main Course',
      description: 'Fragrant rice layered with marinated lamb and spices.',
    },
    {
      type: 'non-veg',
      name: 'Shahi Tukda',
      category: 'Dessert',
      description: 'Fried bread pudding served with thickened sweetened milk.',
    },
    {
      type: 'non-veg',
      name: 'Phirni',
      category: 'Dessert',
      description:
        'Creamy rice pudding made with ground rice, milk, and sugar.',
    },
    {
      type: 'non-veg',
      name: 'Badam Kheer',
      category: 'Dessert',
      description: 'Creamy almond pudding made with milk and sugar.',
    },
    {
      type: 'non-veg',
      name: 'Lab-e-Shireen',
      category: 'Dessert',
      description: 'A Persian dessert made with fruits, cream, and vermicelli.',
    },
    {
      type: 'non-veg',
      name: 'Saffron Phirni',
      category: 'Dessert',
      description: 'Rice pudding flavored with saffron, cardamom, and nuts.',
    },
    {
      type: 'non-veg',
      name: 'Angoori Rabdi',
      category: 'Dessert',
      description: 'Reduced milk dessert with small sweetened dumplings.',
    },
    {
      type: 'non-veg',
      name: 'Mango Kulfi',
      category: 'Dessert',
      description: 'Creamy mango flavored traditional Indian ice cream.',
    },
    {
      type: 'non-veg',
      name: 'Falooda',
      category: 'Dessert',
      description:
        'Refreshing dessert made with milk, vermicelli, and basil seeds.',
    },
    {
      type: 'non-veg',
      name: 'Gulab Phirni',
      category: 'Dessert',
      description: 'Rose-flavored rice pudding.',
    },
    {
      type: 'non-veg',
      name: 'Anjeer Halwa',
      category: 'Dessert',
      description: 'Sweet and rich halwa made with dried figs.',
    },
    //vegan

    {
      type: 'vegan',
      name: 'Vegan Spring Rolls',
      category: 'Starter',
      description:
        'Crispy rolls filled with veggies, served with a dipping sauce.',
    },
    {
      type: 'vegan',
      name: 'Vegan Falafel',
      category: 'Starter',
      description: 'Deep-fried chickpea balls seasoned with herbs and spices.',
    },
    {
      type: 'vegan',
      name: 'Guacamole with Tortilla Chips',
      category: 'Starter',
      description:
        'Mashed avocado mixed with onion, tomato, lime juice, and cilantro, served with crispy tortilla chips.',
    },
    {
      type: 'vegan',
      name: 'Vegan Bruschetta',
      category: 'Starter',
      description:
        'Toasted bread topped with chopped tomatoes, garlic, basil, and olive oil.',
    },
    {
      type: 'vegan',
      name: 'Stuffed Mushrooms',
      category: 'Starter',
      description:
        'Mushroom caps stuffed with a mixture of vegetables, herbs, and breadcrumbs.',
    },
    {
      type: 'vegan',
      name: 'Vegan Pad Thai',
      category: 'Main Course',
      description:
        'Stir-fried rice noodles with vegetables, tofu, and peanuts.',
    },
    {
      type: 'vegan',
      name: 'Vegan Mushroom Risotto',
      category: 'Main Course',
      description:
        'Creamy rice dish cooked with mushrooms, vegetable broth, and seasonings.',
    },
    {
      type: 'vegan',
      name: 'Chickpea Curry',
      category: 'Main Course',
      description:
        'Spiced chickpeas simmered in a flavorful tomato-based sauce.',
    },
    {
      type: 'vegan',
      name: 'Vegan Lentil Soup',
      category: 'Main Course',
      description:
        'Hearty soup made with lentils, vegetables, and aromatic spices.',
    },
    {
      type: 'vegan',
      name: 'Vegan Vegetable Stir-Fry',
      category: 'Main Course',
      description: 'Assorted vegetables stir-fried in a savory sauce.',
    },
    {
      type: 'vegan',
      name: 'Vegan Chocolate Cake',
      category: 'Dessert',
      description: 'Moist chocolate cake made without eggs or dairy.',
    },
    {
      type: 'vegan',
      name: 'Fruit Salad',
      category: 'Dessert',
      description: 'Assorted fresh fruits chopped and served as a salad.',
    },
    {
      type: 'vegan',
      name: 'Vegan Banana Bread',
      category: 'Dessert',
      description:
        'Sweet and moist bread made with ripe bananas without any dairy or eggs.',
    },
    {
      type: 'vegan',
      name: 'Coconut Milk Ice Cream',
      category: 'Dessert',
      description: 'Creamy ice cream made with coconut milk instead of dairy.',
    },
    {
      type: 'vegan',
      name: 'Vegan Mango Sorbet',
      category: 'Dessert',
      description:
        'Refreshing sorbet made with ripe mangoes without any dairy.',
    },
  ];

  //   allCategory = ['veg', 'non-veg', 'vegan'];
  //   //   menu=[{type:'veg',subMenu:['Roti','Chapati','']}]
  //   menuList = [
  //     {
  //       category: 'veg',
  //       starter: [
  //         'chaat plate',
  //         'pakora',
  //         'masala papad',
  //         'manchurian',
  //         'tomato soup',
  //         'samosa',
  //         'vadapav',
  //         'spinach soup',
  //       ],
  //       mainCourse: [
  //         'roti',
  //         'panner masala',
  //         'mushroom curry',
  //         'potato masala',
  //         'matar panner',
  //         'dam veg biryani',
  //         'jira rice',
  //         'naan',
  //         'paratha',
  //         'chapati',
  //       ],
  //       dessert: [
  //         'gulabjamun',
  //         'ice-cream',
  //         'cake',
  //         'panmasala',
  //         'aamras',
  //         'jalebi',
  //         'kaju katali',
  //         'rasgulla',
  //         'faluda',
  //         'sweet yogurt',
  //         'kulfi',
  //         'kheer',
  //       ],
  //     },
  //     {
  //       category: 'non-veg',
  //       starter: [
  //         'chicken lollipop',
  //         'chicken spring roll',
  //         'chicken manchurian',
  //         'egg 65',
  //         'fish pakoda',
  //         'seekh kebabs',
  //         'keema',
  //         'chicken tikka',
  //         'fish fry',
  //         'peri peri fish',
  //         'chicken patties',
  //       ],
  //       mainCourse: ['chicken 65', ''],
  //     },
  //   ];
}
