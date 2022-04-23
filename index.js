const refs = {
    startBtn: document.querySelector('button[start-btn]'),
    gameStartCard: document.querySelector('.game-start'),
    gameCard: document.querySelector('.game-section'),
    menuCard: document.querySelector('.menu-section'),
}

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(){
    refs.gameStartCard.classList.add('is-hidden');
    refs.gameCard.classList.add('is-hidden');
    refs.menuCard.classList.remove('is-hidden');
}
