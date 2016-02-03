function SnakeController(params){
        this.snake = params.model;
        this.food = params.food;
        this.view = params.view;
        new SnakeBinder(this.snake);
}

SnakeController.prototype.move = function(){
    this.snake.updateSnakePosition();
};
SnakeController.prototype.render = function () {
        var collisionOpts = { occupiedCoords: {x: this.food.xCoord, y: this.food.yCoord } ,
            occupiedSize: 1,
            occupierCoords: { x: this.snake.head.x, y: this.snake.head.y } ,
            occupierSize: 1};
        if ( this.checkCollision( collisionOpts ) ){
            this.food.updateFoodPos();
            console.log(this.food.xCoord, " ___", this.food.yCoord);
            for(var i = 0; i < this.snake.body.length;i++)
                if(this.snake.body[i].x == this.food.xCoord && this.snake.body[i].y == this.food.yCoord){
                    console.log(this.food.xCoord, "1", this.food.yCoord);
                    this.food.updateFoodPos();
                    console.log(this.food.xCoord, "2", this.food.yCoord);
                }

            this.snake.eat();
           
        }
/*
        else if (( this.snake.model.head.x > (this.field.xMax - 1) ) || ( this.snake.model.head.y >  (this.field.yMax - 1) )){//transforms by 3
            clearInterval( turnPace );
            this.Finish('teritory');
        }

        else if (( this.snake.model.head.x < 0 ) || ( this.snake.model.head.y < 0 )){
            clearInterval( turnPace );
            this.Finish('teritory');
        }
		*/

       else if ( this.snakeCollision() ){
            clearInterval( turnPace );
            alert('END');
        }

        this.food.render();
        this.view.draw( this.snake.body, this.snake.tail );
    };
    SnakeController.prototype.checkCollision = function(opts) {
        var occupiedCoords = opts['occupiedCoords'];
        var occupiedSize = opts['occupiedSize'];
        var occupierCoords = opts['occupierCoords'];
        var occupierSize = opts['occupierSize'];


        var xOverlap = this.checkAxisOverlap({ occupiedPoint: occupiedCoords['x'],
            occupiedSize: occupiedSize,
            occupierPoint: occupierCoords['x'],
            occupierSize: occupierSize });

        var yOverlap = this.checkAxisOverlap({ occupiedPoint: occupiedCoords['y'],
            occupiedSize: occupiedSize,
            occupierPoint: occupierCoords['y'],
            occupierSize: occupierSize });

        return (xOverlap && yOverlap)
    };
    SnakeController.prototype.checkAxisOverlap = function(opts) {
        var occupiedStart = opts["occupiedPoint"];
        var occupiedEnd = opts["occupiedPoint"];// + opts["occupiedSize"]
        var occupierStart = opts["occupierPoint"];
        var occupierEnd = opts["occupierPoint"];// + opts["occupierSize"]

        if ( occupierStart >= occupiedStart && occupierStart <= occupiedEnd ) { return true; }
        if ( occupierEnd >= occupiedStart && occupierEnd <= occupiedEnd ) { return true; }

        return false;
    };
    SnakeController.prototype.snakeCollision = function () {
        for(  var i=1, segs = this.snake.body; i<segs.length; i++ ){
            (( segs[i].x == this.snake.head.x ) && ( segs[ i ].y == this.snake.head.y )) ? this.snake.snakeDeath = true : "";
        }
        return this.snake.snakeDeath;
    };





function SnakeBinder ( model ) {
    this.model = model;
    this.changeDirection();
};
SnakeBinder.prototype.changeDirection = function() {
    var self = this;
    document.onkeydown = function( e ) {
        e = e || window.event;
        switch(e.which || e.keyCode) {
            case 37: self.model.tick("left");
                break;

            case 38: self.model.tick("up");
                break;

            case 39: self.model.tick("right");
                break;

            case 40: self.model.tick("down");
                break;

        }
        e.preventDefault();
    };
};