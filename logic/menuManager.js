
const STATE = {
    MENU: "menu",
    GAME: "game",
    OPTIONS: "options"
};



export class menuManager {


    constructor(){

        //divs
        this.menuDiv = document.getElementById("menu");
        this.optionMenuDiv = document.getElementById("optionsMenu");
        this.gameControlView = document.getElementById("controls");
        this.flashScreen = document.getElementById("flash-screen");
        this.menuMusic = document.getElementById("music");


        //buttons
        this.startButton = document.getElementById("start");
        this.optionsButton = document.getElementById("options");
        this.exitButton = document.getElementById("exit");
        this.gameControlButton = document.getElementById("controlsView");
        this.backControlsButton = document.getElementById("back-controls");
        this.backOptionsButton = document.getElementById("back-options");

        this.currentState = STATE.MENU;

    }

    init(){
        this.flashScreen.style.display = 'none';
        this.menuDiv.style.display = 'flex';
        this.eventListener();
        this.playMusic();
    }

    eventListener(){
        //this.startButton.addEventListener('click', () => this.changeState(STATE.GAME));
        this.optionsButton.addEventListener('click', () => this.changeState(STATE.OPTIONS));
        this.exitButton.addEventListener('click', () => alert("Bye ZUNGA"));

        this.gameControlButton.addEventListener('click', () => this.showControls(true));
        this.backControlsButton.addEventListener('click', () => this.showControls(false));
        this.backOptionsButton.addEventListener('click', () => this.changeState(STATE.MENU));
    }

    changeState(newState){
        this.currentState = newState;
        this.uploadView();

        if (newState == STATE.GAME){
            //startGame();
        }
    }

    uploadView(){
        this.menuDiv.style.display = 'none';
        this.gameControlView.style.display = 'none';
        this.optionMenuDiv.style.display = 'none';

        switch (this.currentState) {
            case STATE.MENU:
                this.menuDiv.style.display = 'flex';
                break;
            case STATE.OPTIONS:
                this.optionMenuDiv.style.display = 'flex';
                break;
        }
    }

    showControls(show){
        this.gameControlView.style.display = show ? 'flex' : 'none';
    }

    playMusic() {
         this.menuMusic.play().catch(error => {
            console.error("Can't init the music: ", error);
        });
    }



}