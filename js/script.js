
var Options = {
    speed: 200,
    yMax:30,
    xMax:30,
    multipler: 1

};
function Start(){

    Field = new Field( {elementId: "#snake", yMax: Options.yMax, xMax: Options.xMax} );
    Field.render();
    
    Snakefood = new SnakeFood( {xMax: Field.xMax, yMax: Field.yMax});
    Snake = new SnakeController( {
                            model: new SnakeModel,
                            food : Snakefood,
                            view : new SnakeView
                        });
    Game = new GameController();
    turnPace = StartInteval(Options);

}
Start();

function StartInteval(o){
    return setInterval( Game.nextTurn, o.speed );
}
function GameController ( opts ) {
    this.nextTurn = function () {
        Snake.move();
        Snake.render();
    };
}





