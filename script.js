// Ubah ini dari let menjadi const karena tidak perlu diubah
const slides = document.getElementsByClassName("slider-image");


// Tambahkan array untuk menyimpan informasi gambar
const imageInfo = [
    { title: "Introduction to HTML" },
    { title: "Introduction to CSS" },
    { title: "Introduction to JavaScript" },
    { title: "JavaScript Intermediate" },
];

function setupSlides() {
    // Tambahkan inisialisasi slideIndex di sini
    window.slideIndex = 0;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${100 * i}%)`;
    }
}

function changeSlide(n) {
    window.slideIndex += n;
    if (window.slideIndex >= slides.length) {window.slideIndex = 0}
    if (window.slideIndex < 0) {window.slideIndex = slides.length - 1}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${100 * (i - window.slideIndex)}%)`;
    }

    smoothTransition();
    updateSliderList();
    updateImageDescription();
}

function jumpToSlide(index) {
    slideIndex = index;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(${100 * (i - slideIndex)}%)`;
    }
    smoothTransition();
    updateSliderList();
    updateImageDescription();
}

function updateSliderList() {
    let sliderItems = document.getElementsByClassName("slider-item");
    for (let i = 0; i < sliderItems.length; i++) {
        if (i === slideIndex) {
            sliderItems[i].classList.add("active");
        } else {
            sliderItems[i].classList.remove("active");
        }
    }
}

function updateImageDescription() {
    const titleElement = document.getElementById("image-title");
    const textElement = document.getElementById("image-text");
    
    titleElement.textContent = imageInfo[slideIndex].title;
    textElement.textContent = imageInfo[slideIndex].description;
}

// Inisialisasi posisi slide dan deskripsi
setupSlides();
updateSliderList();
updateImageDescription();

// Tambahkan ini ke fungsi showSlides() yang sudah ada
function showSlides() {
    // ... kode yang sudah ada ...
s
    // Update slider list
    let sliderItems = document.getElementsByClassName("slider-item");
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove("active");
    }
    sliderItems[currentSlide].classList.add("active");
}

// Tambahkan fungsi ini untuk membuat transisi lebih halus
function smoothTransition() {
    let sliderItems = document.getElementsByClassName("slider-item");
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].style.transition = "all 0.3s ease";
    }
    setTimeout(() => {
        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.transition = "";
        }
    }, 300);
}

// Fungsi untuk menampilkan slide pertama
function showFirstSlide() {
    window.slideIndex = 0;
    changeSlide(0);
}

// Panggil fungsi ini setelah setupSlides
showFirstSlide();

