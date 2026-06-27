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

        document.getElementById("heroTitle").innerHTML =
        "Building Quality.<br>Creating Value.";

        document.getElementById("heroText").innerHTML =
        "Professional construction, landscaping and infrastructure solutions delivered with quality, precision and reliability.";

    }

    if(lang === "hy"){

        document.getElementById("heroTitle").innerHTML =
        "Կառուցում ենք որակ,<br>ստեղծում արժեք։";

        document.getElementById("heroText").innerHTML =
        "Մենք իրականացնում ենք բարձրորակ շինարարական և բարեկարգման աշխատանքներ։";

    }

    if(lang === "ru"){

        document.getElementById("heroTitle").innerHTML =
        "Строим качество.<br>Создаем ценность.";

        document.getElementById("heroText").innerHTML =
        "Мы выполняем строительные и благоустроительные работы высокого качества.";

    }

}
