const refs = {
    startBtn: document.querySelector('button[start-btn]'),
    gameStartCard: document.querySelector('.game-start'),
    gameCard: document.querySelector('.game-section'),
    menuCard: document.querySelector('.menu-section'),
    menuOpenButton: document.querySelector('.menu-open-btn'),
    menuCloseButton: document.querySelector('.menu-close-btn'),
    gameCardDesktop: document.querySelector('.game-desktop'),
    gameOverCard: document.querySelector('.game-end'),
    firstAnswerItem: document.querySelector('.to-end-game'),
    firstAnswerItemDesktop: document.querySelector('.to-end-game-desktop'),
    endButton: document.querySelector('.end-button'),

}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.menuOpenButton.addEventListener('click', toggleMenu);
refs.menuCloseButton.addEventListener('click', toggleMenu);
refs.firstAnswerItem.addEventListener('click', endTheGame);
refs.firstAnswerItemDesktop.addEventListener('click', endTheGameDesktop)
refs.endButton.addEventListener('click', restartTheGame);


function onStartBtnClick(){
    if (window.innerWidth >= 1440) {
        refs.gameStartCard.classList.add('is-hidden');
        refs.gameCardDesktop.classList.remove('is-hidden');
    }
    else{
        refs.gameStartCard.classList.add('is-hidden');
        refs.gameCard.classList.remove('is-hidden');
    }
    
}

function toggleMenu(){
    refs.gameCard.classList.toggle('is-hidden');
    refs.menuCard.classList.toggle('is-hidden');
}

function endTheGame(){
    refs.gameCard.classList.add('is-hidden');
    refs.gameOverCard.classList.remove('is-hidden');
}

function endTheGameDesktop(){
    refs.gameCardDesktop.classList.add('is-hidden');
    refs.gameOverCard.classList.remove('is-hidden');
}

function restartTheGame(){
    refs.gameOverCard.classList.add('is-hidden');
    refs.gameStartCard.classList.remove('is-hidden');
}
