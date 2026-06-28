const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});






const nav = document.getElementById("mainMenu");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});


document.querySelectorAll("#mainMenu a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
