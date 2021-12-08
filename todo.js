let itemInput;
let currentNumber = 1;
function setValueOf_User(input) {
  itemInput = input;
  console.log(itemInput);
}


function createItem() {
  let newObject = document.createElement("h3");
  let text = document.createTextNode(itemInput);
  newObject.appendChild(text);
  currentNumber = currentNumber + 1;
  newObject.id = currentNumber;
  document.getElementById("toDo-list").appendChild(newObject)
  newObject.onclick = removeItem(newObject)

}

function removeItem(todoItem) {
  
    var removeItem = document.getElementById(todoItem.id)
    console.log(removeItem)
    
}

// function createObjectInCantControlList() {
// }



// function createNewObject() {
//   let newObject = document.createElement("H3")
//   newObject.id = 5;
// newObject.onclick = doThing(newObject);
// }

// function doThing(ele){

// console.log(ele.id);
// }
