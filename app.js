const list = document.querySelector(".gallaryCarousel--ImgContainerList");
const imgs = Array.from(list.children);
const nextButton = document.querySelector(".gallaryCarouselBtn--Right");
const prevButton = document.querySelector(".gallaryCarouselBtn--Left");
const carouselNav = document.querySelector(".gallaryCarouselNav");
const dots = Array.from(carouselNav.children);
const imgWidth = imgs[0].getBoundingClientRect().width;


const settingPosition = (img, index) => {
    img.style.left = imgWidth * index + "px";
};
imgs.forEach(settingPosition);

// Move Image Function
const moveImg = (list, currentImg, targetImg) => {
    list.style.transform = "translateX(-" + targetImg.style.left + ")";
    currentImg.classList.remove("currentImg");
    targetImg.classList.add("currentImg");
};

// Updating The Color Of Dots On Click Function
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("currentImg");
    targetDot.classList.add("currentImg");
}

// Hide/Show Arrow 
const hideShowArrow = (imgs, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("hidden");
        nextButton.classList.remove("hidden");
    } else if (targetIndex === imgs.length -1) {
        prevButton.classList.remove("hidden");
        nextButton.classList.add("hidden");
    } else {
        prevButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
    };
};

nextButton.addEventListener("click", (evt) => {
    const currentImg = list.querySelector(".currentImg");
    const nextImg = currentImg.nextElementSibling;
    const currentDot = carouselNav.querySelector(".currentImg");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = imgs.findIndex((img) => img === nextImg);

    moveImg(list, currentImg, nextImg);
    updateDots(currentDot, nextDot);
    hideShowArrow(imgs, prevButton, nextButton, nextIndex);
});

prevButton.addEventListener("click", (evt) => {
    const currentImg = list.querySelector(".currentImg");
    const prevImg = currentImg.previousElementSibling;
    const currentDot = carouselNav.querySelector(".currentImg");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = imgs.findIndex((img) => img === prevImg);

    moveImg(list, currentImg, prevImg);
    updateDots(currentDot, prevDot);
    hideShowArrow(imgs, prevButton, nextButton, prevIndex);
});

carouselNav.addEventListener("click", (evt) => {
    const targetDot = evt.target.closest("button");

    if (!targetDot) return;

    const currentImg = list.querySelector(".currentImg");
    const currentDot = carouselNav.querySelector(".currentImg");
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetImg = imgs[targetIndex];

    moveImg(list, currentImg, targetImg);
    updateDots(currentDot, targetDot);
    hideShowArrow(imgs, prevButton, nextButton, targetIndex);
});


























// const settingPosition = (img, index) => {
//     img.style.left = imgWidth * index + "px";
// };
// imgs.forEach(settingPosition);

// const moveImg = (list, currentImg, targetImg) => {
//     list.style.transform = "translateX(-" + targetImg.style.left + ")";
//     currentImg.classList.remove("currentImg");
//     targetImg.classList.add("currentImg");
// };

// nextButton.addEventListener("click", (e) => {
//     const currentImg = list.querySelector(".currentImg");
//     const nextImg = currentImg.nextElementSibling;

//     moveImg(list, currentImg, nextImg);
// });

// nextButton.addEventListener("click", (e) => {
//     const currentImg = list.querySelector(".currentImg");
//     const prevImg = currentImg.previousElementSibling;

//     moveImg(list, currentImg, prevImg);
// });

// carouselNav.addEventListener("click", (e) => {
//     const targetDot = e.target.closest("button");

//     if (!targetDot) return;
// });