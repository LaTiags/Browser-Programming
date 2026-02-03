/* ======================
   Lecture 04 JS Basics
====================== */

console.log("✅ Script loaded");
console.log("📄 Portfolio page ready");


let clickCount = 0;
let isDarkMode = false;


const themeBtn = document.getElementById("themeBtn");
const countBtn = document.getElementById("countBtn");


function setTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark");

  console.log("🎨 Theme changed →", isDarkMode ? "Dark" : "Light");
}

function handleClickCount() {
  clickCount++;

  console.log("🖱️ Button clicked:", clickCount, "times");

  if (clickCount === 5) {
    console.log("🔥 Power user detected");
  }
}


themeBtn.addEventListener("click", () => {
  console.log("Theme button pressed");
  setTheme();
});

countBtn.addEventListener("click", () => {
  console.log("Counter button pressed");
  handleClickCount();
});


function showGreeting() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" :
    hour < 18 ? "Good afternoon" :
    "Good evening";

  console.log("👋", greeting, "visitor");
}

showGreeting();
