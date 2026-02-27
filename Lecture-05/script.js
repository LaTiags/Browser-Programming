/* ======================
   Lecture 05 - DOM, State & Browser APIs
====================== */

console.log("✅ Script loaded");
console.log("📄 Portfolio page ready");

// ======================
// State Variables
// ======================

let clickCount = 0;
let isDarkMode = false;

// localStorage key for theme
const THEME_KEY = "portfolio_theme";

// ======================
// DOM Elements
// ======================

const themeBtn = document.getElementById("themeBtn");
const countBtn = document.getElementById("countBtn");
const lastUpdatedEl = document.getElementById("lastUpdated");

// ======================
// Theme Management
// ======================

/**
 * Load saved theme from localStorage on page load
 */
function loadTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  
  if (savedTheme === "dark") {
    isDarkMode = true;
    document.body.classList.add("dark");
    console.log("🎨 Loaded saved theme: Dark");
  } else {
    isDarkMode = false;
    document.body.classList.remove("dark");
    console.log("🎨 Loaded saved theme: Light");
  }
}

/**
 * Toggle between light and dark theme
 */
function setTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark");

  // Save theme to localStorage
  const themeValue = isDarkMode ? "dark" : "light";
  localStorage.setItem(THEME_KEY, themeValue);

  console.log("🎨 Theme changed →", isDarkMode ? "Dark" : "Light");
  console.log("💾 Theme saved to localStorage");
}

// ======================
// Click Counter
// ======================

/**
 * Handle click count tracking
 */
function handleClickCount() {
  clickCount++;

  console.log("🖱️ Button clicked:", clickCount, "times");

  if (clickCount === 5) {
    console.log("🔥 Power user detected");
  }
}

// ======================
// Event Listeners
// ======================

themeBtn.addEventListener("click", () => {
  console.log("Theme button pressed");
  setTheme();
});

countBtn.addEventListener("click", () => {
  console.log("Counter button pressed");
  handleClickCount();
});

// ======================
// Greeting Message
// ======================

/**
 * Show time-based greeting in console
 */
function showGreeting() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" :
    hour < 18 ? "Good afternoon" :
    "Good evening";

  console.log("👋", greeting, "visitor");
}

// ======================
// Last Updated Date
// ======================

/**
 * Display the last updated date in the footer
 * Format: Last updated: YYYY-MM-DD
 */
function displayLastUpdated() {
  if (!lastUpdatedEl) {
    console.warn("⚠️ lastUpdated element not found");
    return;
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  
  const formattedDate = `${year}-${month}-${day}`;
  
  lastUpdatedEl.textContent = `Last updated: ${formattedDate}`;
  
  console.log("📅 Last updated date set:", formattedDate);
}

// ======================
// Initialization
// ======================

/**
 * Initialize the page on load
 */
function init() {
  loadTheme();          // Load saved theme preference
  showGreeting();       // Show greeting in console
  displayLastUpdated(); // Set last updated date
  
  console.log("✨ Page initialized successfully");
}

// Run initialization when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}