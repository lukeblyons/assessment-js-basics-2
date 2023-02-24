///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
const pizza = {
    name: 'Cheese Pizza',
    price: 11.99,
    category: 'Entree',
    popularity: 2,
    rating: 8.9,
    tags: ['Red Sauce', 'Mozzarella Cheese', 'Stuffed Crust', 'Kids']
};
//console.log(pizza);
//console.log('-------------------------------');

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity);
console.log('-------------------------------');

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1]);
console.log('-------------------------------');

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
const {price} = pizza;
console.log(price);
console.log('-------------------------------');

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
const {category} = pizza;
console.log(category);
console.log('-------------------------------');

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [{
    name: 'Bread Sticks',
    price: 6.99,
    category: 'Appetizer',
    popularity: 5,
    rating: 8.3,
    tags: ['Dipping Sauce', 'Bread', 'Kids', 'Serves 6']
},
{
    name: 'Garlic Bread',
    price: 7.99,
    category: 'Appetizer',
    popularity: 4,
    rating: 8.5,
    tags: ['Bread', 'Garlic', 'Serves 4']
},
{
    name: 'Ceaser Salad',
    price: 8.99,
    category: 'Entree',
    popularity: 3,
    rating: 8.7,
    tags: ['Dairy', 'Can Add Chicken', 'Can Have Dressing On The Side']
},
{
    name: 'Cheese Pizza',
    price: 11.99,
    category: 'Entree',
    popularity: 2,
    rating: 9.9,
    tags: ['Red Sauce', 'Mozzarella Cheese', 'Stuffed Crust', 'Kids', 'Serves 2']
},
{
    name: 'Margerita Pizza',
    price: 14.99,
    category: 'Entree',
    popularity: 1,
    rating: 10,
    tags: ['Red Sauce', 'Mozzarella Cheese', 'Serves 2', 'Thin Crust']
}
];


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE
// function filteredFood(tag) {
//     return foodArr.filter(food => food.tags.includes(tag))
// }
// console.log(filteredFood('Red Sauce'))

const tag = 'Red Sauce';
const filteredFood = foodArr.filter(food => food.tags.includes(tag));
console.log(filteredFood);
console.log('-------------------------------');

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty(property, number, type){
    let filteredFood2 = [];
    if(type === 'above'){
        filteredFood2 = foodArr.filter(food => food[property] > number);
    } else if(type === 'below'){
        filteredFood2 = foodArr.filter(food => food[property] < number);
    }
    return filteredFood2;
}

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
const filteredFood2 = filterByProperty('rating', 9, 'above')
console.log(filteredFood2);