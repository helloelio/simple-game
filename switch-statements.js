const sonic = document.querySelector('.sonic');
let jump = 'jump 1s';
let disableJump = () => {
    jump = '';
};
let x = 0;
let y = 0;
let rotate = 0;
let speed = 10;
let flipped = false;

let topArrow = document.querySelector('.arrow-top');
let rightArrow = document.querySelector('.arrow-right');
let bottomArrow = document.querySelector('.arrow-bottom');
let leftArrow = document.querySelector('.arrow-left');

let buttonControls = (event) => {
    console.log(event.target.classList.value);
    switch (event.target.classList.value) {
        case 'arrow-right':
            x = x + 1;
            flipped = false;
            break;
        case 'arrow-left':
            x = x - 1;
            flipped = true;
            break;
        case 'arrow-top':
            y = y - 1;
            break;
        case 'arrow-bottom':
            y = y + 1;
            break;
    }
    sonic.setAttribute(
        'style',
        `
    --rotateX: ${flipped ? '180deg' : '0'};
    --x: ${x * speed}px;
    --y: ${y * speed}px;
    --rotate: ${rotate}deg;
  `
    );
};
topArrow.addEventListener('click', buttonControls);
rightArrow.addEventListener('click', buttonControls);
bottomArrow.addEventListener('click', buttonControls);
leftArrow.addEventListener('click', buttonControls);

let handleKeyDown = (event) => {
    if (!event.key.includes('Arrow')) {
        return;
    }
    switch (event.key) {
        case 'ArrowUp':
            y = y - 1;

            break;
        case 'ArrowDown':
            y = y + 1;

            break;
        case 'ArrowLeft':
            x = x - 1;
            flipped = true;
            break;
        case 'ArrowRight' || rightButtonClick:
            x = x + 1;
            flipped = false;
            break;
        default:
            console.log('That is not a valid move');
            break;
    }
    sonic.setAttribute(
        'style',
        `
    --rotateX: ${flipped ? '180deg' : '0'};
    --x: ${x * speed}px;
    --y: ${y * speed}px;
    --rotate: ${rotate}deg;
    --anim: ${jump}
  `
    );
    console.log(x, y);
};
window.addEventListener('keydown', handleKeyDown);
