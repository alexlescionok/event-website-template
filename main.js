const mainButton = document.getElementById("mainButton");
const rsvpButton = document.getElementById("rsvpButton");
const infoButton = document.getElementById("infoButton");
const formName = document.getElementById("name");
const dietaryReqs = document.getElementById("dietaryRequirements");
const optMsg = document.getElementById("message");
const rsvpForm = document.getElementById("rsvpForm");
const backendRes = document.getElementById("response");
const alcPref = document.getElementById("nonAlcoholPreference");

const removeSpecialChars = (input) => {
  return input.trim().replace(/[^a-z0-9\-\s]/gi, '')
}

const splitButton = () => {
  mainButton.style.display = "none";
  rsvpButton.style.display = "inline-block";
  infoButton.style.display = "inline-block";
}

const hidePage = () => {
  document.getElementById("header").style.display = "none";
  document.getElementById("main").style.display = "none";
  backendRes.style.display = "block";
  document.getElementById("redirectMsg").style.display = "block";
  document.getElementById("redirectLink").style.color = "black";
  document.getElementById("redirectMsg").style.color = "black";
  document.body.classList.add('changed');
}

const handleRedirect = () => {
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

rsvpForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  removeSpecialChars(formName.value);
  removeSpecialChars(dietaryReqs.value);
  removeSpecialChars(optMsg.value);
  removeSpecialChars(alcPref.value);

  hidePage(); 
  handleRedirect(); 

  const data = new FormData(event.target);
  const entries = Object.fromEntries(data.entries());

  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entries)
  })
  
  .then(response => {
    if (!response.ok) {
      throw new Error("Error, please resubmit your details");
    }
    return response.json(); // Use response.text() if backend does not return JSON
  })
  .then(responseData => {
    console.log("Success:", responseData);
    backendRes.innerText = "Your form has been submitted sucessfully";
  })
  .catch(error => {
    console.error("Error:", error);
  })
  // console.table(entries);
});

mainButton.addEventListener('click', splitButton);