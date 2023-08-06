//setting menu-burger
let navBurger = document.getElementById('burger-menu');

function toggleBurgerMenuVisibility() {
    navBurger.classList.toggle('visible');
}
console.log(toggleBurgerMenuVisibility);

//slider
const cardLayout = [...document.querySelectorAll('.card-layout')];
const nxtBtn = document.querySelector('.nxt-btn');
const nxtEndBtn = document.querySelector('.nxt-end-btn');
const preBtn = document.querySelector('.pre-btn');
const preEndBtn = document.querySelector('.pre-end-btn');

console.log(cardLayout);

cardLayout.forEach((item) => {
    let layoutDimensions = item.getBoundingClientRect();
    let layoutWidth = layoutDimensions.width;
    let layoutScrollWidth = item.scrollWidth;

    nxtBtn.addEventListener('click', () => {
        item.scrollLeft += layoutWidth + 27;
    });
    nxtEndBtn.addEventListener('click', () => {
        item.scrollLeft += layoutScrollWidth;
    })

    preBtn.addEventListener('click', () => {
        item.scrollLeft -= layoutWidth + 27;
    });
    preEndBtn.addEventListener('click', () => {
        item.scrollLeft -= layoutScrollWidth;
    })
})

// cardLayout[0].onmousedown = function(event) {
//     moveAt(event.pageX, event.pageY);

//     function moveAt(pageX) {
//         cardLayout[0].scrollLeft += pageX + 'px';
//     }

//     function onMouseMove(event) {
//         moveAt(event.pageX);
//     }

//     cardLayout[0].addEventListener('mousemove', onMouseMove);
// }