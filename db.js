const bakery = require( "./json/bakery");
const chicken = require( "./json/chicken");
const fruit = require( "./json/fruit");
const home = require( "./json/home");
const keto = require( "./json/keto");
const lowCarb = require( "./json/lowCarb");
const meals = require( "./json/meals");
const meat = require( "./json/meat");
const snacks = require( "./json/snacks");
const supplements = require( "./json/supplements");
const vegan = require( "./json/vegan");
const vegetables = require( "./json/vegetables");


export default {
  bakery,
  chicken,
  fruit,
  home,
  keto,
  lowCarb,
  meals,
  meat,
  snacks,
  supplements,
  vegan,
  vegetables
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
