// file

// home section starts

var menuBtn = document.querySelector(".main-navbar .menu-btn");
var menuList = document.querySelector(".main-navbar .nav-list");
var menuListItems = document.querySelectorAll(".nav-list li a");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menuList.classList.toggle("active");
});
/*/ classList adalah properti dari elemen DOM yang mengembalikan objek DOMTokenList yang mewakili daftar kelas yang ada pada elemen tersebut.
Ini menyediakan metode untuk menambahkan (add), menghapus (remove), mengganti (replace), memeriksa (contains), dan men-toggle (toggle) kelas CSS pada elemen. */
for (var i = 0; i < menuListItems.length; i++) {
  menuListItems[i].addEventListener("click", menuItemClicked);
}
function menuItemClicked() {
  menuBtn.classList.remove("active");
  menuList.classList.remove("active");
}

var homeSection = document.querySelector(".home");
window.addEventListener("scroll", pageScrollFunction);
window.addEventListener("load", pageScrollFunction);

function pageScrollFunction() {
  if (window.scrollY > 120) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}
// home section ends
// scrol dipicu saat pengguna menggulir halaman
// load dipicu saat seluruh halaman selesai dimuat

/* Saat pengguna menggulir lebih dari 120 piksel dari atas halaman, elemen dengan kelas .home akan mendapatkan kelas tambahan active.
Jika pengguna menggulir kembali ke atas sehingga posisi scroll kurang dari atau sama dengan 120 piksel, kelas active akan dihapus dari elemen tersebut. */

// partner slider starts
$(".partners-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class ='fa-solid fa-arrow-left'></i>",
    "<i class ='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// partners slider ends

// testimonial section starts
$(".testimonials-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class ='fa-solid fa-arrow-left'></i>",
    "<i class ='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
  },
});
