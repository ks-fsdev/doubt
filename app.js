// // 1. when I set item in sessionStorage, it should have concatanated but it didn't... it just added like normal. i didn't had the chance to use parsInt like you told in the video

// let count = 0;

// incBtn.addEventListener("click", () => {
//   console.log("inc clicked");
//   count = count + 1;
//   console.log(count);
//   sessionStorage.setItem("count", count);

// });

// 2. how do we make the calender stuff on airbnb listing page

// // 3. the localStorage and session storage are not working as expected

// const counterDisplay = document.getElementById("counter");
// const incBtn = document.getElementById("increase");
// const decBtn = document.getElementById("decrease");

// let count = 0;
// renderCount();

// incBtn.addEventListener("click", () => {
//   count = count + 1;
//   console.log(count);
//   renderCount();
// });

// decBtn.addEventListener("click", () => {
//   count = count - 1;
//   console.log(count);
//   renderCount();
// });

// function renderCount() {
//   sessionStorage.setItem("count", count);
//   counterDisplay.innerText = sessionStorage.getItem("count");
// }

// //attempting theme changing using localSession
// const themeBtn = document.getElementById("themeBtn");
// const body = document.getElementById("body");
// const counterSec = document.getElementById("counterSec");

// let isDark = false;
// updateLocalSession();

// themeBtn.addEventListener("click", () => {
//   if (isDark === false) {
//     isDark = true;
//     console.log("is dark " + isDark);
//     changeTheme();
//     updateLocalSession();
//   } else {
//     isDark = false;
//     console.log("is dark " + isDark);
//     changeTheme();
//     updateLocalSession();
//   }
// });

// function changeTheme() {
//   if (isDark === true) {
//     body.classList.add("bg-black");
//     counterSec.classList.add("text-white", "border-white");
//     incBtn.classList.add("bg-white", "text-black", "font-bold");
//     decBtn.classList.add("bg-white", "text-black", "font-bold");
//     incBtn.classList.remove("bg-black", "text-white");
//     decBtn.classList.remove("bg-black", "text-white");
//     themeBtn.classList.remove("bg-black", "text-white");
//     themeBtn.classList.add("bg-white", "text-black", "font-bold");
//   } else {
//     body.classList.remove("bg-black");
//     counterSec.classList.remove("text-white", "border-white");
//     incBtn.classList.remove("bg-white", "text-black", "font-bold");
//     decBtn.classList.remove("bg-white", "text-black", "font-bold");
//     incBtn.classList.add("bg-black", "text-white");
//     decBtn.classList.add("bg-black", "text-white");
//     themeBtn.classList.add("bg-black", "text-white");
//     themeBtn.classList.remove("bg-white", "text-black", "font-bold");
//   }
// }

// function updateLocalSession() {
//   localStorage.setItem("isDark", isDark);
// }

// //4. now what to do. i can see the qoutes inside the array but how to fetch it

// fetch("https://dummyjson.com/quotes").then((data) => {
//   console.log(data.json());
// });

// // when i do this just like mentioned on the website then and only then it works
// fetch("https://dummyjson.com/quotes")
//   .then((res) => res.json())
//   .then(console.log);

// // this is not working with my api key
// async function fetchQuotes() {
//   let data = await fetch("https://dummyjson.com/quotes");
//   let quotes = data.json();
//   console.log(quotes);
// }
// fetchQuotes();

// 5. my todo app is showing less functioning than designed. it works well  in my desktop  but enter function and dragger is not working when desployed

// // 6. why isn't anything rendering without this line in app.js
// import { useState } from "react";
// // when in videos you are able to render it without importing anything.

//tourist app seasonal doubt
