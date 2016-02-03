function Field ( opts ) {
        this.context = $(opts.elementId);
        this.xMax = opts.xMax;
        this.yMax = opts.yMax;
    }

Field.prototype.render = function () {
        var html='';
        for(var i = 0; i < this.xMax; i++){
            html+= '</br>';
            for(var j = 0; j < this.yMax; j++)
                html+= '<div class="p_'+i+'_'+j+'"></div>';
        }
        this.context.append(html);
};