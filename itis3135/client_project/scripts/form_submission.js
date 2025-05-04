document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
  
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); //prevent default form submission
  
        //hide the form
        form.style.display = "none";
  
        //get the message that comes right after the form
        const submissionMessage = form.nextElementSibling;
  
        if (submissionMessage && submissionMessage.classList.contains("hidden_message")) {
            submissionMessage.classList.remove("hidden_message");
        }
      });
    });
  });