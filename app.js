// // 1. the localStorage and session storage are not working as expected

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

//2. tourist app seasonal doubt

// // 3. custom classes and root in tailwind css
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

//4. dribble navbar

// 5. chatgpt clone api key no working

// 6. instagram clone global updation of request acceptance. how to do it??
