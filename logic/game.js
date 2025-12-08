const STATE = {
    MENU: "menu",
    GAME: "game",
    OPTIONS: "options"
};

const menuMusic = document.getElementById("music");
const flashScreen = document.getElementById("flash-screen");
const menuDiv = document.getElementById("menu");
const mainMenuButton = document.getElementById("mainMenu");


const optionMenuDiv = document.getElementById("optionsMenu");
const backControlsButton = document.getElementById("back-controls");
const backOptionsButton = document.getElementById("back-options");
const gameControlView = document.getElementById("controls");

const viewControlsDiv = document.getElementById("optionMenuButtons");
const gameControlButton = document.getElementById("controlsView");




let currentState = STATE.MENU;

document.addEventListener('DOMContentLoaded', () => {
    handleFlashScreen();

});

function initMenu() {

    flashScreen.style.display = 'none';
    menuDiv.style.display = 'flex';

    menuMusic.play().catch(error => {
        console.error("No se pudo iniciar la música del menú:", error);
    });

    console.log("Estado actual:", currentState);

    document.getElementById("start").onclick = () => {
        currentState = STATE.GAME;
        //menuMusic.onpause;
        //startGame();
    }

    document.getElementById("options").onclick = () => {
        currentState = STATE.OPTIONS;
        optionsMenu();
    }

    document.getElementById("exit").onclick = () => {
        alert("Bye ZUNGA");
    }


}

function handleFlashScreen() {
    mainMenuButton.onclick = initMenu;
}


function optionsMenu() {
    menuDiv.style.display = 'none';
    optionMenuDiv.style.display = 'flex';
    gameControlButton.onclick = () => {
        gameControlView.style.display = 'flex';
    }
    backControlsButton.onclick = () => {
        gameControlView.style.display = 'none';

    }

    backOptionsButton.onclick = () => {
        optionMenuDiv.style.display = 'none';
        menuDiv.style.display = 'flex';
    }


}
