const mainButton = document.getElementById("mainButton");
const rsvpButton = document.getElementById("rsvpButton");
const infoButton = document.getElementById("infoButton");

function splitButton() {
  mainButton.style.display = "none";
  rsvpButton.style.display = "inline-block";
  infoButton.style.display = "inline-block";
}

function hidePage() {
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("redirect-msg").style.display = "block";
  document.getElementById("redirect-link").style.color = "black";
  document.getElementById("redirect-msg").style.color = "black";
  document.body.classList.add('changed');
}

function handleRedirect() {
  setTimeout(() => {
      let countdown = 5;
      const countdownElement = document.getElementById('countdown');
      const interval = setInterval(() => {
          countdown--;
          countdownElement.textContent = countdown;
          if (countdown === 0) {
              clearInterval(interval);
              window.location.href = 'index.html';
          }
      }, 1000);
  }, 1500); // holds timer at 5 seconds for 1.5 seconds to account for response time
}

mainButton.addEventListener('click', splitButton);

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); 
  hidePage(); 
  handleRedirect(); 
});