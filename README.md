# Apples -N- Oranges
Simple shopping cart. 

<small> **Note: CSS architecture is a bit sloppy at the moment in order to get up and running.**</small>

Project hosted on Netlify: 

## Create-React-App
This project was initialized using create-react-app. For questions regarding the create-react-app ecosystem and boilerplate files visit: <https://github.com/facebook/create-react-app>

## API

A simple JSON file has been created in order to fetch items for the cart. The file is labeled as `fruits.json`. This allows for easier expansion of the project, should you want to experiment by adding more items.

## State Management
State in this project is handled making use of the standard management system `Redux` with `react-redux` allowing us to pass state to all of our components using the `Provider`. 

There are two main states this project tracks:

1. The Fruits
2. The Shopping Cart

This means that state is handled using two reducers to separate concerns, and two sets of action creators.

**Fruits State Management**

This project uses `redux-thunk` to facilitate state management while the browser fetches our data.

`redux-thunk` allows us to create an action generator that returns a function. This makes it very easy to fetch our fruit data, handle errors, and provide a loading screen making just one simple call to this function. Otherwise we'd likely have to separately call several action generators to handle the state of our data. 

For additional information regarding `redux-thunk` usage visit: <https://github.com/reduxjs/redux-thunk>


**Cart State Management**

Our cart just requires two action generators which simply add or remove an item from the cart list.

### Local State Management
To track simple component-based management this project utilizes `React Hooks`. The hook utilized is `useState` which makes local management a breeze when working with functional components. For `useState` usage information visit: <https://reactjs.org/docs/hooks-state.html>

## Routing
Routing is achieved using standard `react-router` & `react-router-dom`. The structure of the routing is found inside the `router folder`. This project only has two pages at the moment:

1. Home Page / Shop
2. Shopping Cart / Checkout Page

## Key Component Logic  Overview
**Item.js**

Maintains mainly the markup of the individual item card with little functional management. Most functional properties & state are passed via props inside the `Items.js` component. The component contains 1 simple state that manages the user's input of quantity which makes sure the user isn't allowed to supply negative values, or values below 1. 

**Items.js**

This component contains the heavy lifting for our current Home page. The component tracks the state of the fruits, makes our call API call, to then pass the data to the each individual `Item`. It also contains the data that we push to our cart by making a call to our `ADD_SELECTION` action.

**CartItem.js**

Similar to **Item.js** this component contains the structure of each item in our cart with little functional information since this is tracked inside `cart.js` which is the cart page component. 

**cart.js**

The cart page contains the heaviest amount of functionality. Inside the cart page we must pass on to each cart item the information coming from each invididual `Item`. So that the cart contains the details of the item including the quantity that the user originally selected.

`cart.js` contains a `handleTotal()` function which calculates the total cost of the purchase making use of number methods such as `parseFloat()` that we need in order to be able to make numerical calculations. To calculate the total cost, since our cart items are inside an array the `.reduce()` method is utilized to sum all the items inside our cart.

**Handling Store Discounts**

<small>***I have added a button to the cart page that activates discounts: "Buy one get one free" for apples, and "3 for the price of 2" for oranges.** </small>

To handle store discounts `cart.js` contains a function called `itemQuantities`.

The function only supports 'buy one get one free' and 'get two for the price of three' discounts. Essentially, when the discounts are in place the quantity the user receives should reflect in their order summmary. 

Example: User selects 1 orange while a 'buy one get one free' discount is in place, the order summary should reflect 2 oranges as the quantity that the user will receive.

Calculating the 2 for 3 discount, however, isn't as simple as multiplying the quantity * 2. This is because 2 for 3 means that the user receives an extra item with every multiple of two.

Example: Multiple 1 = (2 = 3) , Multiple 2 (4 = 6), Multiple 3 (6 = 9). There are a total of 3 iterations, therefore the individual receives the quantity they want + 3. 3 in this example represents the remainder from each multiple.

Solution: So how can we get that extra remainder in our calculation? Well, utilizing the `Modulus` operator : `%`. This does exactly what we need, it divides two numbers and returns  the remainder (if there is one)
. 

Using conditional logic, we can get the quantity we look for. In my example I looked for 3 cases:

  1. Is the quantity 1
  2. Quantity doesn't return a remainder
  3. Quantity returns a remainder



**End of Document**