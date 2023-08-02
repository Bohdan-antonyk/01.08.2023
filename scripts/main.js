let windowEl = document.querySelector('.window');
let windowOpenEl = document.querySelector('.window-open');
let rightSideWindowBlock = document.querySelector('.right-side-wrapper-window');

windowEl.addEventListener('click',(event)=>{
    windowEl.classList.toggle('window-open');
    event.stopPropagation();
})

rightSideWindowBlock.addEventListener('click',(event)=>{
    rightSideWindowBlock.classList.toggle('right-side-wrapper-window-open');
    event.stopPropagation();
})
