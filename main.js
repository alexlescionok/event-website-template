function sanitizeInput(input) { 
  return DOMPurify.sanitize(input); 
}

function splitButton() {
  document.getElementById("mainButton").style.display = "none";
  document.getElementById("rsvpButton").style.display = "inline-block";
  document.getElementById("infoButton").style.display = "inline-block";
}

function hidePage() {
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("redirect-msg").style.display = "block";
  document.getElementById("redirect-link").style.color = "#eddedd";
  document.getElementById("redirect-msg").style.color = "#eddedd";
   setTimeout(() => {
      document.getElementById("redirect-link").style.color = "#cc96a1";
      document.getElementById("redirect-msg").style.color = "#cc96a1";
  }, 500);    
  document.body.classList.add('changed');
  return true;
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

document.getElementById('mainButton').addEventListener('click', splitButton);

document.querySelector('form').addEventListener('submit', function(event) { 
  hidePage(); handleRedirect(); 
});