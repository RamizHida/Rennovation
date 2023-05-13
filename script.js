let dropDown = document.querySelector('.menu-icon');
let menu = document.querySelector('.heading');
let headerContainer = document.querySelector('.heading--container');
let expand = true;
dropDown.addEventListener('click', () => {
  if (expand) {
    expand = false;
    menu.classList.remove('collapsed');
  } else {
    menu.classList.add('collapsed');
    menu.removeAttribute('collapsed');
    expand = true;
  }
});

let img0 = 'resources/builder.png';
let img1 = 'resources/stairs.png';
let img2 = 'resources/IMG_8031.png';
let img3 = 'resources/IMG_8418.png';
let img4 = 'resources/IMG_8233.png';
let img5 = 'resources/IMG_4697.png';
let img6 = 'resources/img673.png';
let img7 = 'resources/IMG_8234.png';
let img8 = 'resources/IMG_8232.png';
let img9 = 'resources/IMG_7537.png';

let imgContainer = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9];
let imgCount = 0;

let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let currentImgSrc = document.querySelector('#shown--image');

leftArrow.addEventListener('click', prevImg);
rightArrow.addEventListener('click', nextImg);

function prevImg() {
  if (imgCount == 0) {
    imgCount = 9;
    return currentImgSrc.setAttribute('src', `${imgContainer[imgCount]}`);
  }
  imgCount--;
  currentImgSrc.setAttribute('src', `${imgContainer[imgCount]}`);
}

function nextImg() {
  if (imgCount == 9) {
    imgCount = 0;
    return currentImgSrc.setAttribute('src', `${imgContainer[imgCount]}`);
  }
  imgCount++;
  currentImgSrc.setAttribute('src', `${imgContainer[imgCount]}`);
}
