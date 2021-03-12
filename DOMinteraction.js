//Native Document method

//setting elements
//There were 4 animals (This is a question of how many reptiles are given)
//Like a quiz question
//Revealing current number of animals
function getElements() {
  const choice = document.getElementsByName("choice");
  //jquery ver.
  console.log(`${choice} ${choice.length}`);
}

//getting new animals (went from 4 to 6)
function addElements() { 
  const updateTD = document.createElement("moreTD"); 
  const updateImg = document.createElement("newIMG");
  const newAnimals = document.createTextNode("New animals are added to the group!");
}

//extending window for new animals
window.onresize = addElements;

//Removing h3
const byeh3 = document.getElementById("h3");
byeh3.remove();

//changing multiple choice
function correctionUpdated() {
	document.getElementById("group").innerHTML="There are now 3 animals in the wrong group!";
}

//reviewing new multiple choices
document.querySelector(getElements);

//Updating time of motification
document.getElementById("time").innerHTML = document.lastModified;

//if clicking wrong animal choice
function wrongChoice() {
 document.getElementById("wrong").click();
 const newHeading = document.createElement('h2');
 const HintsLeftWarning = document.createTextNode("You only have one hint left!");
 newHeading.appendChild(HintsLeftWarning);
}

//when all choices disappear (after choosing) it would bring back the animals
if (choice == 0) {
	document.querySelectorAll(getElements);
}