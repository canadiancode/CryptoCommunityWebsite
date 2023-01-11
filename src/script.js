// Header Section 

const headerMobileButton = document.querySelector('.mobileNavDisplayButton');
const mobileHeader = document.querySelector('.mainNav');

headerMobileButton.addEventListener('click', () => {
  
  if (mobileHeader.classList.contains('displayMobileHeader')) {
    mobileHeader.classList.remove('displayMobileHeader');
  } else {
    mobileHeader.classList.add('displayMobileHeader');
  }
  
});

