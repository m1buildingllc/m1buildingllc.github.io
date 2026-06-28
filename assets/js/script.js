const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}
