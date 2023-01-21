// Code for the form submission to the Google Sheet
window.addEventListener("load", function() {
  const form = document.querySelector('.quizForm');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      // This is the code that triggers once the user submits the form
      alert('success');

    })
  });
});


// animation for the benefits text
const benefitsText = document.querySelector('.benefitsText');
const newsletterArrow = document.querySelector('.newsletterArrow');

const L2ELandingPageOptions = {
  rootMargin: "-180px",
  threshold: 0
}

// For the arrow animation
const newsletterArrowObserver = new IntersectionObserver(function(entries, newsletterArrowObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      newsletterArrow.style.opacity = '1';
      newsletterArrow.style.transform = 'rotate(0deg) scale(1) translateX(0em)';
    }
  });
}, L2ELandingPageOptions);
newsletterArrowObserver.observe(newsletterArrow);

// For the benefits text animation
const benefitsTextObserver = new IntersectionObserver(function(entries, benefitsTextObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      benefitsText.style.transform = 'translateX(2em)';
      benefitsText.style.opacity = '1'; 
    }
  });
}, L2ELandingPageOptions);
benefitsTextObserver.observe(benefitsText);

// Starting the quiz code
const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startQuiz);
function startQuiz() {

  // scroll user to top of page
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });

  // removing the landing page
  const landingPage = document.querySelector('.learnToEarnInfoContainer');
  landingPage.style.opacity = '0';
  landingPage.style.transform = 'translateY(-100%)';

  // adding the quiz container in
  const quizQuestionContainer = document.querySelector('.quizQuestionContainer');
  quizQuestionContainer.style.minHeight = '100vh';
  quizQuestionContainer.style.height = 'auto';

  //removing the landing page display to none
  setTimeout(removeLandingPage, 1000)
  function removeLandingPage() {
    landingPage.style.display = 'none';
  };

  //adding the form with gradual animation for smooth transition
  setTimeout(addQuiz, 1200)
  function addQuiz() {
    const quizQuestionDiv = document.querySelector('.quizQuestionDiv');
    quizQuestionDiv.style.transform = 'translateY(0em)';
    quizQuestionDiv.style.opacity = '1';
    const form = document.querySelector('form');
    form.style.display = 'block';
  }

};

