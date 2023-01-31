// Change Newsletter Link Here:
const MediumLink = 'https://medium.com/@Learn2EarnNow/l2e-edition-54-newsletter-862eff2bf99b';

// Change Questions Here:
const quizQuestions = [
  {
    Q: 'What is the ticker symbol for Bitcoin?'
  },
  {
    Q: 'Why do we keep an eye on the global macro landscape?'
  },
  {
    Q: 'Who is Jerome Powell?'
  },
  {
    Q: 'Why is Jerome so important in the current environment?'
  },
  {
    Q: 'Why is inflation bad for the economy?'
  },
  {
    Q: 'Are you bullish or bearish?'
  }
];


// No Need to Touch Below -- No Need to Touch Below -- No Need to Touch Below

// code for the label and input elements looping over total questionsn above
const phoneForMediumLink = document.querySelector('.mediumLink');
phoneForMediumLink.href = MediumLink;

const editionLink = MediumLink.slice(MediumLink.indexOf('edition-'));
// Change the 10 to an 11 once we get into the triple digits for the edition value
const editionNumber = editionLink.substring(8, 10);
const editionText = document.querySelector('.editionText');
editionText.appendChild(document.createTextNode(`Edition ${editionNumber} Quiz`));

const quizEndNewsletterEdition = document.querySelector('.newsletterEdition');
quizEndNewsletterEdition.appendChild(document.createTextNode(editionNumber));

const earnedPCCElement = document.querySelector('.earnedPCC');
const earnedPCC = (quizQuestions.length * 50) + 50;
earnedPCCElement.appendChild(document.createTextNode(earnedPCC));

// form inputs and label creation
const formData = document.querySelector('.injectedQuestions');
let addQuestionOne = 1;

for (let i = 0; i < quizQuestions.length; i++) {

  // Div for containing question creation
  const divElement = document.createElement('div');
  divElement.classList.add('questionContainer');
  const questionNumber = parseInt([i]) + 1;
  divElement.classList.add(`question${[questionNumber]}`);
  formData.appendChild(divElement);

  // label creation
  const labelElement = document.createElement('label');
  const labelText = document.createTextNode(quizQuestions[i].Q);
  labelElement.appendChild(labelText);
  divElement.appendChild(labelElement);
  
  //input creation
  const inputElement = document.createElement('textarea');
  const inputName = ('answer'+[i]);
  let nameValue = addQuestionOne + parseInt([i]);
  inputElement.name = ('answer' + nameValue);
  inputElement.setAttribute('type', 'text');
  let placeHolderValue = addQuestionOne + parseInt([i]);
  inputElement.placeholder = `Answer ${placeHolderValue}`;
  inputElement.required = true;
  divElement.appendChild(inputElement);
};

// Remove the left arrow at the start of the quiz
const firstQuestionpanel = document.querySelector('.firstQuestion');

const viewArrowOptions = {
  rootMargin: "0px",
  threshold: 0.5
}

const firstQuestionObserver = new IntersectionObserver(function(entries, firstQuestionObserver) {
  entries.forEach(entry => {

    const questionNavLeftArrow = document.querySelector('.fa-arrow-left');

    if (entry.isIntersecting) {
      questionNavLeftArrow.style.opacity = '0';
    } else {
      questionNavLeftArrow.style.opacity = '1';
    }

  })
}, viewArrowOptions);
firstQuestionObserver.observe(firstQuestionpanel);

// Remove the right arrow at the end of the quiz
const questionPanels = document.querySelectorAll('.questionContainer');

for (let j = 0; j < questionPanels.length; j++) {
  const totalQuestionNumber = quizQuestions.length;
  const finalQuestion = questionPanels[totalQuestionNumber];
  finalQuestion.classList.add('finalQuestion');
};

const finalQuestion = document.querySelector('.finalQuestion');

const finalQuestionObserver = new IntersectionObserver(function(entries, finalQuestionObserver) {
  entries.forEach(entry => {

    const questionNavRightArrow = document.querySelector('.fa-arrow-right');
    const submitButtonDiv = document.querySelector('.submitButtonDiv');

    if (entry.isIntersecting) {
      questionNavRightArrow.style.opacity = '0';
      submitButtonDiv.style.opacity = '1';
      submitButtonDiv.style.transform = 'translate(0em)';
    } else {
      questionNavRightArrow.style.opacity = '1';
    }

  })
}, viewArrowOptions);
finalQuestionObserver.observe(finalQuestion);

// code for the arrow pointing to the iPhone with the medium link
const L2ELandingPageOptions = {
  rootMargin: "-180px",
  threshold: 0
}

// For the Medium link on iPhone arrow animation
const newsletterArrow = document.querySelector('.newsletterArrow');

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
const benefitsText = document.querySelector('.benefitsText');

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
    form.style.display = 'flex';

    const editionTextDiv = document.querySelector('.editionTextDiv');
    editionTextDiv.style.opacity = '1';
    editionTextDiv.style.transform = 'translateY(0em)';

  }
};

// Code for the progress bar animation
const progressBarOptions = {
  rootMargin: "0px",
  threshold: 1
};

const questionContainer = document.querySelectorAll('.questionContainer');

const panelObserver = new IntersectionObserver(function(entries, panelObserver) {
  entries.forEach(entry => {

    if (entry.isIntersecting) {

      // for the progress bar
      const questionContainerClass = entry.target.classList;
      const questionClassValue = questionContainerClass[1].substring(8, 10);
      let progressInstrumemnt = (100 / quizQuestions.length) +1;
      let progressWidth = questionClassValue * progressInstrumemnt;

      const finishedProgress = document.querySelector('.finishedProgress');
      finishedProgress.style.width = `${progressWidth}%`;

      //style of the panels
      entry.target.style.boxShadow = '0px 0px 10px 2px var(--white)';
    } else {
      entry.target.style.boxShadow = '0px 0px 0px 0px var(--white)';
    }
  })
}, progressBarOptions);
questionContainer.forEach(panel => {
  panelObserver.observe(panel);
});

// styling the label
const labelOptions = {
  rootMargin: "0px",
  threshold: 1
}

const labels = document.querySelectorAll('label');
const textareas = document.querySelectorAll('textarea');

const labelObserver = new IntersectionObserver(function(entries, labelObserver) {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0em)';
    };
  })
}, labelOptions);

labels.forEach(label => {
  labelObserver.observe(label);
});

textareas.forEach(textarea => {
  labelObserver.observe(textarea);
});

// scroll on click
const scrollArrowRight = document.querySelector('.fa-arrow-right');
const scrollArrowLeft = document.querySelector('.fa-arrow-left');

scrollArrowRight.onclick = () => {

  const questions = document.querySelector('.injectedQuestions');
  questions.scrollLeft += 20;
  console.log('clocked');
}

// Code for the form submission to the Google Sheet
const quizForm = document.querySelector('.quizForm');

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

      const quizQuestionContainer = document.querySelector('.quizQuestionContainer');
      quizQuestionContainer.style.transform = 'translateY(-100%)';

      const completionPageContainer = document.querySelector('.completionPageContainer');
      completionPageContainer.style.display = 'flex';

      setTimeout(quizEnd, 1000);
      function quizEnd() {
        quizQuestionContainer.style.display = 'none';

        const quizCompletionText = document.querySelector('.quizCompletionText');
        quizCompletionText.style.opacity = '1';
        quizCompletionText.style.transform = 'translateY(0em)';
      };
      // scroll user to top of page
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })
  });
});






// Remove this at the end
startQuiz();

