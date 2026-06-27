const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});

function setLanguage(lang){

    alert("Selected language: " + lang);

}

function setLanguage(lang){

    if(lang === "en"){

        document.getElementById("navHome").innerHTML = "Home";
document.getElementById("navAbout").innerHTML = "About";
document.getElementById("navServices").innerHTML = "Services";
document.getElementById("navProjects").innerHTML = "Projects";
document.getElementById("navGallery").innerHTML = "Gallery";
document.getElementById("navContact").innerHTML = "Contact";

        document.getElementById("heroTitle").innerHTML =
        "Building Quality.<br>Creating Value.";

        document.getElementById("heroText").innerHTML =
        "Professional construction, landscaping and infrastructure solutions delivered with quality, precision and reliability.";

    }

    if(lang === "hy"){

        document.getElementById("navHome").innerHTML = "Գլխավոր";
document.getElementById("navAbout").innerHTML = "Մեր մասին";
document.getElementById("navServices").innerHTML = "Ծառայություններ";
document.getElementById("navProjects").innerHTML = "Նախագծեր";
document.getElementById("navGallery").innerHTML = "Պատկերասրահ";
document.getElementById("navContact").innerHTML = "Կապ";

        document.getElementById("heroTitle").innerHTML =
        "Կառուցում ենք որակ,<br>ստեղծում արժեք։";

        document.getElementById("heroText").innerHTML =
        "Մենք իրականացնում ենք բարձրորակ շինարարական և բարեկարգման աշխատանքներ։";

    }

    if(lang === "ru"){

        document.getElementById("navHome").innerHTML = "Главная";
document.getElementById("navAbout").innerHTML = "О нас";
document.getElementById("navServices").innerHTML = "Услуги";
document.getElementById("navProjects").innerHTML = "Проекты";
document.getElementById("navGallery").innerHTML = "Галерея";
document.getElementById("navContact").innerHTML = "Контакты";

        document.getElementById("heroTitle").innerHTML =
        "Строим качество.<br>Создаем ценность.";

        document.getElementById("heroText").innerHTML =
        "Мы выполняем строительные и благоустроительные работы высокого качества.";

    }

}
