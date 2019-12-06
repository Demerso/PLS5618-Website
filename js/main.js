window.onload = () => {
  document.body.style.opacity = "0";
  const navlinks = document.querySelector("nav > .links").children;
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", event => {
      event.preventDefault();
      const button = event.target;
      const link = button.hash;
      const headerHeight = document.querySelector("nav").offsetHeight;
      const target = document.querySelector(link);
      console.log(target.offsetTop - headerHeight);
      window.scrollTo({
        top: target.offsetTop - headerHeight - 5,
        behavior: "smooth"
      });
    });
  }
  document.body.animate([{ opacity: "0" }, { opacity: "1" }], {
    duration: 1000,
    iterations: 1
  });
  document.body.style.opacity = "1";
  createNavButton();
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
