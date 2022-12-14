"use strict";

const faqItems = document.querySelectorAll(".faq-item");

const toggleActive = (element) => {
  faqItems.forEach((element) => {
    element.classList.remove("active");
  });
  element.classList.toggle("active");
};

faqItems.forEach((faqItem) => {
  faqItem.addEventListener("click", () => toggleActive(faqItem));
});
