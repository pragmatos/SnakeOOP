function SnakeView(){
        
}

SnakeView.prototype.draw = function ( body, tail) {
        $('.p_'+tail.x+'_'+tail.y).removeClass('body').removeClass('head');
        for (var i=0; i<body.length; i++){
            if(i==0) {
                $('.p_' + body[i].x + '_' + body[i].y).addClass('head');
            }
            else {
                $('.p_' + body[i].x + '_' + body[i].y).addClass('body').removeClass('food');
            }
        }
};
