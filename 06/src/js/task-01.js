const cheerio = require("cheerio");

const categoriesList = $("#categories");

const categories = categoriesList.find(".item");
const numCategories = categories.length;

console.log(`Number of categories: ${numCategories}\n`);

categories.each((index, element) => {
  const categoryName = $(element).find("h2").text().trim();
  const elements = $(element).find("li");
  const numElements = elements.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numElements}\n`);
});
