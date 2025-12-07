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
const backButton = document.getElementById("back");
const viewControlsDiv = document.getElementById("optionMenuButtons");
const gameControlButton = document.getElementById("controlsView");
const gameControlView = document.getElementById("controls");



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
        optionMenuDiv.style.display = 'none';
        gameControlView.style.display = 'flex';

        backButton.onclick = () => {
            gameControlView.style.display = 'none';
            optionMenuDiv.style.display = 'flex';
        }

    }
    
    backButton.onclick = () => {
        optionMenuDiv.style.display = 'none';
        menuDiv.style.display = 'flex';
    }


}
