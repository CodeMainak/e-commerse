import data from "./data.json";

// function asyncWait(wait) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), wait);
//   });
// }

function getCategories() {
  return Array.from(data.categories);
}

function getItems(categoryId) {
  const items = data.items.filter(item => categoryId === item.categoryId);
  return items;
}

export default {
  getCategories,
  getItems
};
