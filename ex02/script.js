const titleElement = document.getElementById("main-title");
const descriptionElement = document.querySelector(".description");
const cardElement = document.getElementById("card-box");
const statusElement = document.querySelector("#card-status");

titleElement.textContent = "DOM Manipulation";
descriptionElement.textContent = "The content of this paragraph was dynamically updated.";


titleElement.style.color = "blue";
descriptionElement.style.fontSize = "20px";

cardElement.classList.add("active");

statusElement.textContent = "Card Status: Active Class Added!";