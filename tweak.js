const splash = document.querySelector(".splash");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

const product1 = document.getElementById("product1");
const wrapper = document.getElementById("wrapper");
const newBox = document.getElementById("newBox");

const productBox1 = document.getElementById("productBox1");
const productBox2 = document.getElementById("productBox2");
const productBox3 = document.getElementById("productBox3");
const productBox4 = document.getElementById("productBox4");
const productBox5 = document.getElementById("productBox5");
const productBox6 = document.getElementById("productBox6");
function getDetail(nomor) {
  newBox.style.display = "block";
  wrapper.style.display = "none";

  if (nomor === 1) {
    productBox1.style.display = "flex";
  } else if (nomor === 2) {
    productBox2.style.display = "flex";
  } else if (nomor === 3) {
    productBox3.style.display = "flex";
  } else if (nomor === 4) {
    productBox4.style.display = "flex";
  } else if (nomor === 5) {
    productBox5.style.display = "flex";
  } else if (nomor === 6) {
    productBox6.style.display = "flex";
  }
}

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// const close = document.querySelector("close");
// function onBack(wrapper) {
//   window.location.reload();
// }
