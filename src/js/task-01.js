const amountItems = document.querySelectorAll(".item").length;
console.log("Number of categories:", amountItems);

const categoryTitle = document.querySelectorAll("h2");
const categoryText1 = categoryTitle[0].textContent;

console.log("Category:", categoryText1);

const findItem = document.querySelectorAll(".item");
const amountEl1 = findItem[0].querySelectorAll("li").length;

console.log("Elements:", amountEl1);

const categoryText2 = categoryTitle[1].textContent;

console.log("Category:", categoryText2);

const amountEl2 = findItem[1].querySelectorAll("li").length;

console.log("Elements:", amountEl2);

const categoryText3 = categoryTitle[2].textContent;

console.log("Category:", categoryText3);

const amountEl3 = findItem[2].querySelectorAll("li").length;

console.log("Elements:", amountEl3);
