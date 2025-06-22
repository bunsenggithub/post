// Create the navbar
const navbar = document.createElement("nav");
navbar.className = "navbar";

// Create the logo
const logo = document.createElement("div");
logo.className = "logo";
logo.textContent = "MyLogo";
navbar.appendChild(logo);

// Create the nav links list
const navList = document.createElement("ul");
navList.className = "nav-links";
navList.id = "navLinks";

// Array of nav items
const navItems = [
  { text: "Home", href: "#" },
  { text: "Categories", href: "#" },
  { text: "About Us", href: "#" },
  { text: "Contact Us", href: "#" }
];

// Create and append list items
navItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.href;
  a.textContent = item.text;
  li.appendChild(a);
  navList.appendChild(li);
});
navbar.appendChild(navList);

// Create the menu toggle button (for mobile)
const menuToggle = document.createElement("div");
menuToggle.className = "menu-toggle";
menuToggle.id = "menuToggle";
menuToggle.innerHTML = "&#9776;";
navbar.appendChild(menuToggle);

// Append the navbar to the container
document.getElementById("navbar-container").appendChild(navbar);

// Toggle menu on click
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
