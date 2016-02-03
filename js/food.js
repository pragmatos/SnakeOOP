function SnakeFood ( opts ) {

    this.xCoord = 5;
    this.yCoord = 8;
    this.xLast = 0;
    this.yLast = 0;
    this.xMax = opts.xMax;
    this.yMax = opts.yMax;
};

SnakeFood.prototype = {
    render: function(  ){
        $('.p_'+this.xLast+'_'+this.yLast).removeClass('food');
        $('.p_'+this.xCoord+'_'+this.yCoord).addClass('food');
    },
    updateFoodPos: function () {
        this.xLast = this.xCoord;
        this.yLast = this.yCoord;
        this.xCoord = ( Math.floor( Math.random()*(this.xMax - 1) ));
        this.yCoord = ( Math.floor( Math.random()*(this.yMax - 1) ));
    }
};