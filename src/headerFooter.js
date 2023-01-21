// Header Section

  // To oepn up the header on mobile view
  const headerMobileButton = document.querySelector('.mobileNavDisplayButton');
  const mobileHeader = document.querySelector('.mainNav');
  
    // to animate the hamburger menu to an X
  const hamburgerLine1 = document.querySelector('.line1');
  const hamburgerLine2 = document.querySelector('.line2');
  const hamburgerLine3 = document.querySelector('.line3');
  
    //  code to close the drop-down header section
  function closeMobileHeader() {
    if (mobileHeader.classList.contains('displayMobileHeader')) {
      mobileHeader.classList.remove('displayMobileHeader');
  
      hamburgerLine1.style.transform = 'rotate(0deg) translateY(6px)';
      hamburgerLine2.style.opacity = '1';
      hamburgerLine3.style.transform = 'rotate(0deg) translateY(-6px)';
  
    } else {
      mobileHeader.classList.add('displayMobileHeader');
  
      hamburgerLine1.style.transform = 'rotate(45deg) translateY(0px)';
      hamburgerLine2.style.opacity = '0';
      hamburgerLine3.style.transform = 'rotate(-45deg) translateY(0px)';
    }
  };
  headerMobileButton.addEventListener('click', closeMobileHeader);
  document.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
      closeMobileHeader();
    };
  });
  
    // close the header if clicked outside of the drop-down header menu
  window.addEventListener('click', (e) => {
    if (mobileHeader.contains(e.target) || headerMobileButton.contains(e.target)) {
    } else {
      mobileHeader.classList.remove('displayMobileHeader');
  
      hamburgerLine1.style.transform = 'rotate(0deg) translateY(6px)';
      hamburgerLine2.style.opacity = '1';
      hamburgerLine3.style.transform = 'rotate(0deg) translateY(-6px)';
    }
  });
  
//Footer icon spread animation
const footerIcon = document.querySelectorAll('.footerIcon');

const footerIconOption = {
rootMargin: "-50px",
threshold: 0
}

const footerIconObserver = new IntersectionObserver(function(entries, footerIconObserver) {
entries.forEach(entry => {

    const faBrands = document.querySelectorAll('.fa-brands');

    if (entry.isIntersecting) {
    faBrands.forEach(icon => {
        icon.style.transform = 'translateY(0em)';
        icon.style.opacity = '1';
    })
    }

})
}, footerIconOption);
footerIcon.forEach(icon => {
footerIconObserver.observe(icon);
});