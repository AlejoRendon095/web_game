
class view{

    constructor(){
        this.canvas = document.getElementById("gameViewCanvas");
        this.ctx = this.canvas.getContext("2d");
    }

    draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
    }


}