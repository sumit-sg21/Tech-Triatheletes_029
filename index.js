
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  

function showSection(section) {
  const partnerSection = document.getElementById("partner-section");
  const brandSection = document.getElementById("brand-section");
  const partnerDescription = document.getElementById("partner-description");
  const brandDescription = document.getElementById("brand-description");
  const toggles = document.querySelectorAll(".toggle");

  if (section === "partner") {
    partnerSection.style.display = "flex";
    brandSection.style.display = "none";
    partnerDescription.style.display = "block";
    brandDescription.style.display = "none";
  } else {
    partnerSection.style.display = "none";
    brandSection.style.display = "flex";
    partnerDescription.style.display = "none";
    brandDescription.style.display = "block";
  }

  toggles.forEach((toggle) => {
    if (toggle.innerText.includes(section.toUpperCase())) {
      toggle.classList.add("active");
    } else {
      toggle.classList.remove("active");
    }
  });
}


const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}










const children = document.querySelectorAll(".five-itrate-product-category");
const containerOfFiveProductCategoryTheirCon = document.getElementsByClassName(
  "container-of-five-product-category-their-con"
);
const fiveItrateProductCategoryTheirCat = document.querySelectorAll(
  ".five-itrate-product-category-their_cat"
);
let currentlyScaled = document.querySelector(
  ".five-itrate-product-category.scaled"
);
const womenCheckbox = document.getElementById("women");
const menCheckbox = document.getElementById("men");

if (!currentlyScaled) {
  children[0].classList.add("scaled");
  currentlyScaled = children[0];
  containerOfFiveProductCategoryTheirCon.innerHTML = "";
  fiveItrateProductCategoryTheirCat[0].style.display = "block";
}

children.forEach((child, index) => {
  child.addEventListener("mouseover", () => {
    if (currentlyScaled !== child) {
      currentlyScaled.classList.remove("scaled");

      const currentIndex = Array.from(children).indexOf(currentlyScaled);
      fiveItrateProductCategoryTheirCat[currentIndex].style.display = "none";

      child.classList.add("scaled");
      fiveItrateProductCategoryTheirCat[index].style.display = "block";
      currentlyScaled = child;
    }
  });
});

womenCheckbox.addEventListener("change", function () {
  if (this.checked) {
    menCheckbox.checked = false;
  }
});

menCheckbox.addEventListener("change", function () {
  if (this.checked) {
    womenCheckbox.checked = false;
  }
});






