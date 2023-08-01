let nav = document.querySelectorAll('header nav');
const navBurger = nav[1];

function toggleBurgerMenuVisibility() {
    navBurger.classList.toggle('visible');
}
console.log(toggleBurgerMenuVisibility);

const cardLayout = [...document.querySelectorAll('.card-layout')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

cardLayout.forEach((item, i) => {
    let layoutDimensions = item.getBoundingClientRect();
    let layoutWidth = layoutDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        if (window.innerWidth > 851) {
            item.scrollLeft += layoutWidth / 2;
        }
        else {
            item.scrollLeft += layoutWidth;
        }
    });

    preBtn[i].addEventListener('click', () => {
        if (window.innerWidth > 851) {
            item.scrollLeft -= layoutWidth / 2;
        }
        else {
            item.scrollLeft -= layoutWidth;
        }
    });

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