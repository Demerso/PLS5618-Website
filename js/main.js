window.onload = () => {
  document.body.style.opacity = "0";
  const navlinks = document.querySelector("nav > .links").children;
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].onclick = link => goto(link);
  }
  document.body.animate([{ opacity: "0" }, { opacity: "1" }], {
    duration: 1000,
    iterations: 1
  });
  createNavButton();
  document.body.style.opacity = "1";
};

const goto = event => {
  event.preventDefault();
  const button = event.target;
  if (button.tagName == "A") {
    const link = button.hash;
    const headerHeight = document.querySelector("nav").offsetHeight;
    const target = document.querySelector(link);
    window.scrollTo({
      top: target.offsetTop - headerHeight - 5,
      behavior: "smooth"
    });
  }
};

const createNavButton = () => {
  const navIcon = document.querySelector("nav > .icon");
  navIcon.onclick = () => openNav();
  for (let i = 0; i < 4; i++) {
    const bar = document.createElement("div");
    navIcon.appendChild(bar);
  }
};

const openNav = () => {
  var nav = document.querySelector("nav");
  if (nav.className === "topnav") {
    nav.classList.add("responsive");
  } else {
    nav.className = "topnav";
  }
};
