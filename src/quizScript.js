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

