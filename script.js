const input = document.querySelector("#fruit");
// const suggestions = document.querySelector(".suggestions ul");
const suggestionList = document.getElementById("suggestions");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  let userInput = str;
  results = fruit.filter((item) => {
    return item.toLowerCase().includes(userInput);
  });
  console.log(results);
  return results;
}

let oldResults = [];

function searchHandler(e) {
  // TODO
  let inputStr = e.target.value.toLowerCase();
  let filterdFruits = search(inputStr); // returns filted list of fruits
  if (inputStr === "") {
    suggestionList.innerHTML = "";
    return;
  }
  //console.log(suggestionList.children.length);
  suggestionList.innerHTML = ""; // deletes all children
  //console.log(suggestionList.children.length);

  for (let item of filterdFruits) {
    let suggestion = document.createElement("div");

    suggestion.id = "suggest";

    suggestion.innerHTML = item;
    suggestion.addEventListener("click", useSuggestion);

    suggestionList.appendChild(suggestion);
  }
}

function showSuggestions(results, inputVal) {
  // TODO
}

function useSuggestion(e) {
  // TODO
  input.value = e.target.innerHTML;
  suggestionList.innerHTML = "";
  console.log(e.target.value);
}

input.addEventListener("keyup", searchHandler);
