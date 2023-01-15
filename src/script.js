// Header Section -- Header Section -- Header Section -- Header Section -- Header Section

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
})


// Hero Text Animation Section -- Hero Text Animation Section -- Hero Text Animation Section
setTimeout(() => {
  const firstWhiteLettering = document.querySelector('.firstWhiteLettering');
  firstWhiteLettering.style.opacity = '1';
  firstWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
}, "1000");

setTimeout(() => {
  const secondWhiteLettering = document.querySelector('.secondWhiteLettering');
  secondWhiteLettering.style.opacity = '1';
  secondWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

  const secondredLetter = document.querySelector('.secondredLetter');
  secondredLetter.style.marginLeft = '0em';
}, "2000");

setTimeout(() => {
  const thirdWhiteLettering = document.querySelector('.thirdWhiteLettering');
  thirdWhiteLettering.style.opacity = '1';
  thirdWhiteLettering.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

  const thirdredLetter = document.querySelector('.thirdredLetter');
  thirdredLetter.style.marginLeft = '0em';
}, "3000");

setTimeout(() => {
  const headerCTAlink = document.querySelector('.heroCTALink');
  headerCTAlink.style.opacity = '1';
  headerCTAlink.style.transform = 'translateY(0em)';
}, "4500");

// Hero Heading Parallax Effect
const heroHeadingContainer = document.querySelector('.heroHeadingContainer');

const heroHeadingOptions = {
  rootMargin: "0px",
  threshold: 0
}

const heroHeadingObserver = new IntersectionObserver(function(entries, heroHeadingObserver) {
  entries.forEach(entry => {

    function headingParallax() {
      let windowHeight = window.innerHeight;
      let windowScrolled = window.scrollY;
      let parallaxValue = windowScrolled / 15;
      heroHeadingContainer.style.transform = `translateY(${parallaxValue}px)`;

      const heroHeaderElement = document.querySelector('.heroHeaderElement');
      let letterSpacingScrollValue = parallaxValue / 8;
      let letterSpacing = letterSpacingScrollValue + 3;
      heroHeaderElement.style.letterSpacing = `${letterSpacing}px`;

    }

    if (entry.isIntersecting) {
      document.addEventListener('scroll', headingParallax);
    } else {
      document.removeEventListener('scroll', headingParallax);
    }
  });
}, heroHeadingOptions);
heroHeadingObserver.observe(heroHeadingContainer);

// Our Vision animation text
const crossoverText = document.querySelectorAll('.crosspageText');

const crossoverOptions = {
  rootMargin: "0px",
  threshold: "0"
}

const crossoverObserver = new IntersectionObserver(function(entries, crossoverObserver) {
  entries.forEach(entry => {

    function crossoverAnimation() {

      crossoverText.forEach(text => {
        let windowScroll = window.innerHeight;
        let scrollValue = text.getBoundingClientRect();
        let scrollY_value = scrollValue.top;
        let parallaxValue =  25 - ((windowScroll - scrollY_value) / 11);
        text.style.transform = `translateX(${parallaxValue}%)`;
        let textOpacity = ((windowScroll - scrollY_value) / 20) / 35;
        text.style.opacity = `${textOpacity}`;
      });
    }

    if (entry.isIntersecting) {
      document.addEventListener('scroll', crossoverAnimation);
    } else {
      document.removeEventListener('scroll', crossoverAnimation);
    }
    crossoverAnimation();
  });
}, crossoverOptions);

crossoverText.forEach(text => {
  crossoverObserver.observe(text);
});

// Animation for the Our Vision heading and paragraph

const visonTextContainer = document.querySelector('.visonTextContainer');

const ourVisionOptions = {
  rootMargin: "0px",
  threshold: 0
};

const ourVisionTextObserver = new IntersectionObserver(function(entries, ourVisionTextObserver) {
  entries.forEach(entry => {

    function ourVisionTextAnimation() {
      let windowScroll = window.innerHeight;
      let scrollValue = visonTextContainer.getBoundingClientRect();
      let scrollY_value = scrollValue.top;
      let parallaxValue =  25 - ((windowScroll - scrollY_value) / 5);
      visonTextContainer.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting) {
      document.addEventListener('scroll', ourVisionTextAnimation);
    } else {
      document.removeEventListener('scroll', ourVisionTextAnimation);
    }

  });
}, ourVisionOptions);
ourVisionTextObserver.observe(visonTextContainer);

// Animation for the iphones

const phoneAnimationOptions = {
  rootMargin: "0px",
  threshold: 0
};

// The social media column
const phoneListOne = document.querySelector('.phoneListOne');

const phoneListOneObserver = new IntersectionObserver(function(entries, phoneListOneObserver) {
  entries.forEach(entry => {

    function phoneListOneScrolling() {
      let imageElementRect = phoneListOne.getBoundingClientRect();
      let imageElementY = imageElementRect.top;
      let windowHeight = window.innerHeight;
      let parallaxValue = ((imageElementY - windowHeight) / 3);
      phoneListOne.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting) {
      document.addEventListener('scroll', phoneListOneScrolling);
    } else {
      document.removeEventListener('scroll', phoneListOneScrolling);
    }

  })
}, phoneAnimationOptions);
phoneListOneObserver.observe(phoneListOne);

// The Discord column
const phoneListTwo = document.querySelector('.phoneListTwo');

const phoneListTwoObserver = new IntersectionObserver(function (entries, phoneListTwoObserver) {
  entries.forEach(entry => {

    function phoneListTwoScrolling() {
      let imageElementRect = phoneListTwo.getBoundingClientRect();
      let imageElementY = imageElementRect.top;
      let windowHeight = window.innerHeight - 2000;
      let parallaxValue = ((imageElementY - windowHeight) / -3);
      phoneListTwo.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting) {
      document.addEventListener('scroll', phoneListTwoScrolling);
    } else {
      document.removeEventListener('scroll', phoneListTwoScrolling);
    }

  });
}, phoneAnimationOptions);
phoneListTwoObserver.observe(phoneListTwo);
phoneListTwoScrolling();