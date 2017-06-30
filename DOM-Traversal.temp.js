const div = document.querySelector("div");
const listUL = div.querySelector("ul"); 
const firstItem = listUL.firstElementChild;
const lastItem = listUL.lastElementChild;


firstItem.style.backgroundColor = "lightblue";
lastItem.style.backgroundColor = "rgba(19, 100, 66, 0.4)";


var CremoveButtons = function(i) {
 let rButtons = document.createElement("button");
    rButtons.textContent = "remove";
   rButtons.className = "removes"
    Items[i].appendChild(rButtons);

}


var moveButtons = function(i) {
   
let upButtons = document.createElement("button");
   upButtons.textContent = "Up";
   upButtons.className = "up";
   Items[i].appendChild(upButtons);

}


var dButtons = function(i) {
  let downButtons = document.createElement("button");
   downButtons.textContent = "Down";
   downButtons.className = "down";
   Items[i].appendChild(downButtons);

}
 


listUL.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON" && event.target.className == "removes") {
      let li = event.target.parentNode;
      let ul = li.parentNode; 
    ul.removeChild(li);
  } else if (event.target.tagName == "BUTTON" && event.target.className == "up") {
       let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode; 
       if(prevLi) {
      ul.insertBefore(li, prevLi); }
      } else if (event.target.tagName == "BUTTON" && event.target.className == "down") {
         let li = event.target.parentNode;
          let nextLi = li.nextElementSibling;
        let ul = li.parentNode; 
          if(nextLi) 
           ul.insertBefore(nextLi, li);      
      }
});




for (let i = 0; i < Items.length; i ++) {
   
  CremoveButtons(i);
   
  moveButtons(i);
  
  dButtons(i);
   
   
  }



