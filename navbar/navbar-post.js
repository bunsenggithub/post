// Create the navbar
const navbar = document.createElement("nav");
navbar.className = "navbar";

// Logo
const logo = document.createElement("div");
logo.className = "logo";
logo.textContent = "MyLogo";
navbar.appendChild(logo);

// Nav list
const navList = document.createElement("ul");
navList.className = "nav-links";
navList.id = "navLinks";

// Nav items with dropdown for Categories
const navItems = [
  { text: "Home", href: "#" },
  { 
    text: "Categories", href: "#", dropdown: [
      { text: "Tech", href: "#" },
      { text: "Travel", href: "#" },
      { text: "Food", href: "#" }
    ]
  },
  { text: "About Us", href: "#" },
  { text: "Contact Us", href: "#" }
];

// Build nav items
navItems.forEach(item => {
  const li = document.createElement("li");

  if (item.dropdown) {
    li.className = "dropdown";

    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);

    const dropdownMenu = document.createElement("ul");
    dropdownMenu.className = "dropdown-menu";

    item.dropdown.forEach(sub => {
      const subLi = document.createElement("li");
      const subA = document.createElement("a");
      subA.href = sub.href;
      subA.textContent = sub.text;
      subLi.appendChild(subA);
      dropdownMenu.appendChild(subLi);
    });

    li.appendChild(dropdownMenu);
  } else {
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;
    li.appendChild(a);
  }

  navList.appendChild(li);
});
navbar.appendChild(navList);

// Hamburger toggle for mobile
const menuToggle = document.createElement("div");
menuToggle.className = "menu-toggle";
menuToggle.id = "menuToggle";
menuToggle.innerHTML = "&#9776;";
navbar.appendChild(menuToggle);

// Append to DOM
document.getElementById("navbar-container").appendChild(navbar);

// Toggle nav visibility
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});
