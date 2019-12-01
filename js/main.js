window.onload = () => {
  const navlinks = document.querySelector("navlinks").children;
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
};
