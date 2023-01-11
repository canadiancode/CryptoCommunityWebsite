// Header Section 

  // To oepn up the header on mobile view
const headerMobileButton = document.querySelector('.mobileNavDisplayButton');
const mobileHeader = document.querySelector('.mainNav');

  // to animate the hamburger menu to an X
  const hamburgerLine1 = document.querySelector('.line1');
  const hamburgerLine2 = document.querySelector('.line2');
  const hamburgerLine3 = document.querySelector('.line3');

headerMobileButton.addEventListener('click', () => {
  
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
});






