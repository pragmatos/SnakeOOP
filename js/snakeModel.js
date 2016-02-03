function SnakeModel(){
        this.body = [ {x:0,y:3}];
        this.head = this.body[0];
        this.tail = this.body[this.body.length -1];

        this.updated = false;

        this.direction = "right";
        this.xdirection = 0;
        this.ydirection = 1;
        this.snakeDeath = false;
    }
    
    SnakeModel.prototype.tick  = function ( direction ) {
        switch( direction ){
            case "left": if (this.direction == "right") {}
                         else{
                            if(this.updated){
                                this.updateSnakeDirection( 0, -1 );
                                this.direction = "left";
                            }
                         }
                         break;

            case "down": if (this.direction == "up") {}
                         else{
                            if(this.updated){
                                this.updateSnakeDirection( 1, 0 );
                                this.direction = "down";
                            }
                         }
                         break;

            case "right": if (this.direction == "left") {}
                          else{
                            if(this.updated){
                                this.updateSnakeDirection(0 , 1 );
                                this.direction = "right";
                            }
                          }
                          break;

            case "up": if (this.direction == "down") {}
                        else{
                            if(this.updated){
                                this.updateSnakeDirection( -1, 0 );
                                this.direction = "up";
                            }
                        }
                       break;
        }

        this.updated = false;
    };
    SnakeModel.prototype.updateSnakeDirection = function ( xdirection, ydirection ) {
        this.xdirection = xdirection;
        this.ydirection = ydirection;
    };
    SnakeModel.prototype.updateSnakePosition = function () {
        var newHead = {};
		if(this.head.y == 0 && this.direction == 'left')
			this.head.y=Options.yMax;
		if(this.head.y == Options.yMax && this.direction == 'right')
			this.head.y=-1;
		if(this.head.x == 0 && this.direction == 'up')
			this.head.x=Options.xMax;
		if(this.head.x == Options.xMax && this.direction == 'down')
			this.head.x=-1;
        newHead.x = (this.head.x += this.xdirection);
        newHead.y = (this.head.y += this.ydirection);
		
        this.tail = this.body[this.body.length-1];
        this.body.unshift(newHead);

        this.body.pop();
        this.updated = true;
    }
    SnakeModel.prototype.eat = function () {
        var  newTail = this.body[0];
        this.body.push( newTail );
    };