window.addEventListener("scroll", function () {
  let navbar = document.querySelector("header");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  console.log(navbar);
});

let image = document.querySelector(".bg-change>img");
console.log(image.src);

let images = [
  "./img/slide-1-min.jpg",
  "./img/slide-3-min.jpg",
  "./img/girl-3718526_1920-min.jpg",
];

let index = 0;

function updateImage() {
  image.src = images[index];

  index = (index + 1) % images.length;
}

setInterval(updateImage, 4000);
