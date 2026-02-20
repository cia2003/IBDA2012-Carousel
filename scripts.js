const userData = {
  0: {
    backgroundImage:
      "https://www.fpclegal.pt/xms/img/800x/39ced/cT05MCZmPXdlYnAmZmx0cltdPQ/L08zbS8tME0zWnJTbS93R3VNa1pzU21LakZSTS1abS9LWjdabk1KWnNaRVNEUy1qdHp0ZGty.webp",
    testimonialText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    testimonialAuthor: "Catarina Azevêdo",
    testimonialJob: "Associate Attorney at FPC Legal",
  },
  1: {
    backgroundImage:
      "https://www.fpclegal.pt/xms/img/800x/9c865/cT05MCZmPXdlYnAmZmx0cltdPQ/L08zbS8tME0zWnJTbS93R3VNa1pzU21LakZSTS1abS9LWjdabk1KWnMzWi1aRlNKanR6dGRrcg.webp",
    testimonialText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    testimonialAuthor: "Catarina Cunha Madaleno",
    testimonialJob: "Associate Attorney at FPC Legal",
  },
  2: {
    backgroundImage:
      "https://www.fpclegal.pt/xms/img/800x/9c4e9/cT05MCZmPXdlYnAmZmx0cltdPQ/L08zbS8tME0zWnJTbS93R3VNa1pzU21LakZSTS1abS9rUy1uanNtTTNqU21zLU1abXR6dGRrcg.webp",
    testimonialText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
    testimonialAuthor: "Pedro Simões Dias",
    testimonialJob: "Consultant at FPC Legal",
  },
};

const cardColors = {
  0: {
    backgroundColor: "#087f5b",
    fontColor: "#c3fae8",
  },
  1: {
    backgroundColor: "#1864ab",
    fontColor: "#d0ebff",
  },
  2: {
    backgroundColor: "#5f3dc4",
    fontColor: "#e5dbff",
  },
};

// Global Variables
let counter = 0;
const totalData = Object.keys(userData).length;

// Functions
function createDecorationList() {
  const decorationList = document.createElement("ul");
  decorationList.classList.add("decoration-list");

  for (let i = 0; i < totalData; i++) {
    const decorationItem = document.createElement("li");
    decorationItem.classList.add("decoration-item");
    if (i === 0) {
      decorationItem.classList.add("active");
    }
    decorationList.appendChild(decorationItem);
  }

  const decorationContainer = document.querySelector(".decoration");
  decorationContainer.appendChild(decorationList);
}
function updateSlide(counter) {
  const currentData = userData[counter];
  const currentColor = cardColors[counter];

  const carousel = document.querySelector(".carousel");
  const carouselImage = document.querySelector(".carousel__img");
  const testimonialText = document.querySelector(".testimonial-text");
  const testimonialAuthor = document.querySelector(".testimonial-author");
  const testimonialJob = document.querySelector(".testimonial-job");
  const decorationItems = document.querySelectorAll(".decoration-item");

  carousel.style.backgroundColor = currentColor.backgroundColor;
  carouselImage.src = currentData.backgroundImage;
  testimonialText.textContent = currentData.testimonialText;
  testimonialAuthor.textContent = currentData.testimonialAuthor;
  testimonialAuthor.style.color = currentColor.fontColor;
  testimonialJob.textContent = currentData.testimonialJob;
  testimonialJob.style.color = currentColor.fontColor;
  decorationItems.forEach((item, index) => {
    item.style.backgroundColor =
      index === counter ? currentColor.backgroundColor : "transparent";
  });
}
function previousSlide() {
  counter = (counter - 1 + totalData) % totalData;

  updateSlide(counter);
  console.log("Previous slide:", counter);
}
function nextSlide() {
  counter = (counter + 1 + totalData) % totalData;

  updateSlide(counter);
  console.log("Next slide:", counter);
}

// Auto Slides
// Event Listeners
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
carousel.addEventListener(
  "mouseleave",
  () => (autoSlide = setInterval(nextSlide, 5000)),
);

// Initialization
createDecorationList();