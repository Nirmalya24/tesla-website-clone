const openMenu = () => {
  document.querySelector(".backdrop").className = "backdrop open";
  document.querySelector("aside").className = "open";
}

const closeMenu = () => {
  document.querySelector(".backdrop").className = "backdrop";
  document.querySelector("aside").className = "";
};

document.getElementById("menuBtn").onclick = e => {
  e.preventDefault();
  openMenu();
}

document.querySelector("aside button.close").onclick = e => {
  e.preventDefault();
  closeMenu();
}

document.querySelector(".backdrop").onclick = (e) => {
  e.preventDefault();
  closeMenu();
};

// Scroll function
document.lastScrollPosition = 0;
document.lastCentered = 0;
document.scrolling = null;

document.addEventListener('scroll', () => { 
  const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  const sections = [...document.querySelectorAll('section')];

  if (document.scrolling === null) {
    const destIndex = direction === "up" ? document.lastCentered - 1 : document.lastCentered + 1;
    if (destIndex >= 0 && destIndex < sections.length) {
      document.scrolling = destIndex;
      window.scroll(0, sections[destIndex].offsetTop);
    }
  }

  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
      // text fading
      section.className = "active";
      if (document.scrolling === index)
        document.scrolling = null;
    } else {
      section.className = "";
    }
  });
  document.lastScrollPosition = window.pageYOffset;
});