document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); //prevent default form submission
  
        //hide the form once it's submitted
        form.style.display = "none";
  
        //display submission message 
        const submissionMessage = form.nextElementSibling;
        if (submissionMessage && submissionMessage.classList.contains("hidden_message")) {
            submissionMessage.classList.remove("hidden_message");
        }
      });
    });
  });