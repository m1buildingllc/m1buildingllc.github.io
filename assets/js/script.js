const faqItems = document.querySelectorAll(".faq-item");

if (faqItems.length) {

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");

        button.addEventListener("click", () => {

            item.classList.toggle("active");

        });

    });

}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});
