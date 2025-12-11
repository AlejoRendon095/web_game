
class gameEngine{

    static instance;

    constructor(){
        if(gameEngine.instance != null){
            return gameEngine.instance;
        }
    }

    // the way to implements singleton in this lenguaje is so strange :O

    static getInstance(){
        if(this.instance == null){
            gameEngine.instance = new gameEngine();
            return instance;
        } else{
            return gameEngine.instance;
        }
    }

}