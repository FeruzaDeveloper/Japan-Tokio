const items = document.querySelectorAll('.slider-item');
const ItemCount = items.length;

// next__slide
const nextItem = document.querySelector('.next');
let count = 0;

nextItem.addEventListener('click', showNextItem);

function showNextItem() {
    items[count].classList.remove('active');
    if (count < ItemCount - 1) {
        count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active');
    console.log(count);
}

// previous__slide
const previousItem = document.querySelector('.previous');
previousItem.addEventListener('click', showPreiveItem);

function showPreiveItem() {
    items[count].classList.remove('active');
    if (count > 0) {
        count--;
    } else {
        count = ItemCount - 1;
    }
    items[count].classList.add('active');
}

// hamburger button yasash
const navItem = document.querySelector('a.toggle-nav');
navItem.addEventListener('click', toggleNavigation);

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}