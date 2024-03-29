export const navigation = () => {
    const navToggler = document.querySelector(".js-nav-toggler");
    const nav = document.querySelector(".js-nav");
    const navItems = nav.querySelectorAll("li");
  
    const navToggle = () => {
      nav.classList.toggle("open");
      navToggler.classList.toggle("active");
    };
  
    navToggler.addEventListener("click", navToggle);
  
    navItems.forEach((li) => {
      li.querySelector("a").addEventListener("click", () => {
        if (window.innerWidth <= 767) {
          navToggle();
        }
      });
    });
  };

export const headerBg = () => {
  const header = document.querySelector(".header-js");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  };

  window.addEventListener("scroll", handleScroll);
};
