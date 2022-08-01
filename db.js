import bakery from "./json/bakery";
import chicken from "./json/chicken";
import fruit from "./json/fruit";
import home from "./json/home";
import keto from "./json/keto";
import lowCarb from "./json/lowCarb";
import meals from "./json/meals";
import meat from "./json/meat";
import snacks from "./json/snacks";
import supplements from "./json/supplements";
import vegan from "./json/vegan";
import vegetables from "./json/vegetables";

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
