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


