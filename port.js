var toggle = document.getElementById("darkToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
  toggle.textContent = "light_mode";
} else {
  toggle.textContent = "dark_mode";
}


toggle.addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    toggle.textContent = "light_mode";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "dark_mode";
    localStorage.setItem("theme", "light");
  }
});


