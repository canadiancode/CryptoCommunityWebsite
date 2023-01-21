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
    }

    if (entry.isIntersecting && window.innerWidth > 600) {
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

    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', crossoverAnimation);
    } else {
      document.removeEventListener('scroll', crossoverAnimation);
      crossoverText.style.transform = 'translateX(0em)';
    }

    if (window.innerWidth > 600) {
      crossoverAnimation();
    }
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

    if (entry.isIntersecting && window.innerWidth > 600) {
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
      let parallaxValue = ((imageElementY - windowHeight) / 4);
      phoneListOne.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', phoneListOneScrolling);
    } else {
      document.removeEventListener('scroll', phoneListOneScrolling);
    }

  })
}, phoneAnimationOptions);
phoneListOneObserver.observe(phoneListOne);

// The Discord column
const phoneListTwo = document.querySelector('.phoneListTwo');

function phoneListTwoScrolling() {
  let imageElementRect = phoneListTwo.getBoundingClientRect();
  let imageElementY = imageElementRect.top;
  let windowHeight = window.innerHeight - 2000;
  let parallaxValue = ((imageElementY - windowHeight) / -3);
  phoneListTwo.style.transform = `translateY(${parallaxValue}px)`;
}

const phoneListTwoObserver = new IntersectionObserver(function (entries, phoneListTwoObserver) {
  entries.forEach(entry => {

    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', phoneListTwoScrolling);
    } else {
      document.removeEventListener('scroll', phoneListTwoScrolling);
    }

  });
}, phoneAnimationOptions);
phoneListTwoObserver.observe(phoneListTwo);

if (window.innerWidth > 600) {
  phoneListTwoScrolling();
}


// how to participate panel parallax scroll
const gettingStartedPanel = document.querySelector('.gettingStartedpanel');

const gettingStartedOptions = {
  rootMargin: "0px",
  threshold: 0
};

const gettingStartedObserver = new IntersectionObserver(function(entries, gettingStartedObserver) {
  entries.forEach(entry => {

    function gettingStartedPanelParallax() {
      const windowHeight = window.innerHeight;
      let panelRect = gettingStartedPanel.getBoundingClientRect();
      let panelTop = panelRect.top;
      let parallaxValue = (panelTop - windowHeight) / 7;
      gettingStartedPanel.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', gettingStartedPanelParallax);
    } else {
      document.removeEventListener('scroll', gettingStartedPanelParallax);
    }

  });
}, gettingStartedOptions);
gettingStartedObserver.observe(gettingStartedPanel);

// Our Pedagogical vision text parallax

const aboutUsTextContainer = document.querySelector('.aboutUsTextContainer');

const aboutUsTextOptions = {
  rootMargin: "0px",
  threshold: 0
};

const aboutUsTextObserver = new IntersectionObserver(function(entries, aboutUsTextObserver) {
  entries.forEach(entry => {

    function aboutUsTextParallax() {
      const windowHeight = window.innerHeight;
      let aboutUsTextRect = aboutUsTextContainer.getBoundingClientRect();
      let aboutUsTextY = aboutUsTextRect.top;
      let parallaxValue = ((aboutUsTextY - windowHeight) * -1) / 3.5;
      aboutUsTextContainer.style.transform = `translateY(${parallaxValue}px)`;
    }

    if (entry.isIntersecting && window.innerWidth > 600) {
      document.addEventListener('scroll', aboutUsTextParallax);
    } else {
      document.removeEventListener('scroll', aboutUsTextParallax);
    }

  });
}, aboutUsTextOptions);
aboutUsTextObserver.observe(aboutUsTextContainer);

// Code for the red underline on headers
const underlineText = document.querySelectorAll('.underlineText');

const underlineOptions = {
  rootMargin: "-50px",
  threshold: 1
}

const underlineObserver = new IntersectionObserver(function(entries, underlineObserver) {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('showUnderline');
    }

  });
}, underlineOptions);
underlineText.forEach(text => {
  underlineObserver.observe(text);
})

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
})



// Our Services Tab Section
const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

// Change the tab once the button is clicked
function handleTabClick(event) {

    // Hide all tab panels
    tabPanels.forEach(function(panel) {
      panel.hidden = true;
    })

    // mark all tabs as unselected
    tabButtons.forEach(tab => {
      tab.setAttribute('aria-selected', false);
    })

    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);

    // find the assosictaed tab panel and show it
    const id = event.currentTarget.id;

    const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    tabPanel.hidden = false;
}

// A loop for each button
tabButtons.forEach(button => button.addEventListener('click', handleTabClick));