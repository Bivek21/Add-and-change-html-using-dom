//1. create the element
const newH1 = document.createElement("h1");

///step 2 add attributes/properties
newH1.textContent = "I like Pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
//append element to DOM
document.getElementById("box1").append(newH1);
//document.body.prepend(newH1);

// document.getElementById("box4").append(newH1);
// document.getElementById("box4").prepend(newH1);
//remove HTML element
// const box2 = document.getElementById("box3");
// document.body.insertBefore(newH1, box2);
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[4]);
//remove Html element
document.getElementById("box1").removeChild(newH1);
