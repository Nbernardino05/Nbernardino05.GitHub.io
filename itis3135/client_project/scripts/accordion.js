const faqQuestions = document.querySelectorAll(".faq_question");

faqQuestions.forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        const isExpanded = answer.style.maxHeight && answer.style.maxHeight !== "0px";

        //collapse all other answers (accordion behavior)
        faqQuestions.forEach((btn) => {
            const ans = btn.nextElementSibling;
            if (ans !== answer) {
                ans.style.maxHeight = null; 
                btn.classList.remove("active"); 
            }
        });

        //toggle the clicked answer
        if (isExpanded) {
            answer.style.maxHeight = null;
            button.classList.remove("active");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            button.classList.add("active");
        }
    });
});

