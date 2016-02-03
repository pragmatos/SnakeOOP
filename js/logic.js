
$('form').submit(function(e){
	var width = parseInt($('#width').val());
	var height = parseInt($('#height').val());
	console.log(width);
	console.log(height);
    $('.main').hide();
    var html= '';
	for(var i = 0; i < 30; i++){
        if(i!=0)
		 html+= '<br/>';
		for(var j = 0; j < 30; j++)
			html+= '<div class="p_'+i+'_'+j+'"></div>';
	}
	$('.container').append(html);



    var go = setInterval(function(){
        Snake.move();
        //Snake.oneStep();
        Snake.draw();
    },100);
	return false;	
});

$( "body" ).keydown(function (e){Snake.findDirection(e);});

var Snake = {
    direction: [0,1],
    length : 5,
    body :[[3,5],[3,4],[3,3],[3,2],[3,1]],
    tail:[],
    move: function(){
        this.body.unshift(this.oneStep());
        this.tail = this.body.pop();
        console.log(this.body);
        console.log(this.tail);
    },
    findDirection: function(event){
        if(event.keyCode == 39)
            this.direction=[0,1];
        if(event.keyCode == 40)
            this.direction=[1,0];
        if(event.keyCode == 37)
            this.direction=[0,-1];
        if(event.keyCode == 38)
            this.direction=[-1,0];
    },
    draw: function (){

        for(var i = 0; i<this.body.length;i++)
            $('.p_'+this.body[i][0]+'_'+this.body[i][1]).addClass('body');
        //$('.p_'+this.head[0]+'_'+this.head[1]).addClass('head');
        $('.p_'+this.tail[0]+'_'+this.tail[1]).removeClass('body');
        //$('.p_'+this.tail[0]+'_'+this.tail[1]).removeClass('head');
    },
    oneStep:function(){
        var tmp = [];
        tmp[0]= this.body[0][0] + this.direction[0];
        tmp[1]= this.body[0][1] + this.direction[1];
        return tmp;
    }
    };
