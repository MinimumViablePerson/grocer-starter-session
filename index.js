/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

// update state
// render

let state = {
  storeItems: [
    {
      id: 1,
      name: 'beetroot',
      price: 0.45,
      inCart: 5,
    },
    {
      id: 2,
      name: 'carrot',
      price: 0.15,
      inCart: 0,
    },
    {
      id: 3,
      name: 'apple',
      price: 0.25,
      inCart: 0,
    },
  ],
}

// CAN I CALCULATE EVERYTHING I NEED BASED ON THE CURRENT STATE?
// If YES: Do not create more state, calculate it!
// If NO: Create more state

// Q: What store items are available? state.storeItems ✅
// Q: Which items are in my cart? ✅ filter state.storeItems
// Q: How many of each? ✅ item.inCart
// Q: What is the total? ✅ getTotal()
// Q: How do I get the image path for an item? ✅ getItemImagePath()

// output: the image path for this item
function getItemImagePath() {}

// output: the current total
function getTotal() {}

function increaseQuantity() {}

function decreaseQuantity() {}

// update state
// rerender

// Rendering - approach 1: recreate the entire page each time

function renderHeader() {}

function renderMain() {}

// update the page
function render() {
  // nuke the page
  document.body.textContent = ''

  // create the whole thing again
  // some code...
  renderHeader()
  renderMain()
}

// // Rendering - approach 2: recreate/update only the dynamic parts
// // update the page
// function renderStoreItems() {
//   let storeUl = document.querySelector('.store--item-list')
//   storeUl.textContent = ''

//   // code to create store items
// }

// function renderCartItems() {
//   // find the ul
//   // empty it
//   // recreate the cart items
// }

// function renderTotal() {
//   // update the total text
// }

// function render() {
//   renderStoreItems()
//   renderCartItems()
//   renderTotal()
// }
