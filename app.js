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

// 7. react js instagram proj : the id from timeline doeswn't open at the top of the page

// // 8. custom classes and root in tailwind css
// import @tailwindcss

// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// // These 3 lines are underlined in red

// @layer base {
//   :root {
//     --custom-background-color: #f3f3f6;
//   }
// }

// // this utility is alsp showing the big red error
// @utility {
//   .custom-bg {
//     background-color: var(--custom-background-color);
//   }
// }

// // 9. found one of the svgs which crops instead of decreasing in size when changing the width, & height

// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="24"
//   height="24"
//   fill="none"
//   aria-hidden="true"
//   className="icon"
// >
//   <path
//     stroke="currentColor"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     stroke-width="2"
//     d="m22 7-7.869 7.869c-.396.396-.594.594-.822.668a1 1 0 0 1-.618 0c-.228-.074-.426-.272-.822-.668L9.13 12.13c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L2 17M22 7h-7m7 0v7"
//   />
// </svg>;

// 10. i do not find tailwind.config.js in my project when i install  tailwind... and i wanted to use custom classes using utility and root as directed in the documentation it's not wqorking
