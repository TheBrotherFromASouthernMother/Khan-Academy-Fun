let myHeading = document.querySelector("h1");
const toggle = document.querySelector("#toggle");
const listdiv = document.querySelector("#list");
const addItemInput = document.querySelector(".addItemInput");
const addItemButton = document.querySelector(".addItemButton");

const descriptionInput = document.querySelector("input");
const p = document.querySelector("p.description");
const descriptionButton = document.querySelector("button.description")

let removeButton = document.querySelector("button.remove");

const Items = document.getElementsByTagName("li");



toggle.addEventListener("click", function () { 
    
 if (listdiv.style.display == 'none') {
   toggle.textContent = "show list";
   listdiv.style.display = "block";
 } else {
  toggle.textContent = "hide list";
   listdiv.style.display = "none";
 
 }
  
 
  
});
  




myHeading.textContent = "This is a Gawdaam new heading bitch";


descriptionButton.addEventListener("click", function () {
  p.textContent = descriptionInput.value + ":";

});

p.title = "list descripton";


addItemButton.addEventListener("click", function () {
let theList = document.querySelector("#TheList");
  let listItem = document.createElement("li");
  listItem.textContent = addItemInput.value + ":"
  theList.appendChild(listItem);
  addItemInput.value = "";
  Items.length ++;
  CremoveButtons(Items.length -1);
   
   
   
   moveButtons(Items.length -1);
  
  
  dButtons(Items.length -1);

});





removeButton.addEventListener("click", function () {
  
let myList = document.querySelector("ul");
let ListItem = myList.querySelectorAll("li");
   myList.removeChild(ListItem[ListItem.length -1]);

});
