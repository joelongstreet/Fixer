function Slide(){
    var start_point = 0;
    var last_point  = 0;

    this.touch_start = function(e){
        start_point = e.y;

        if(e.y > Ti.Platform.displayCaps.platformHeight*.75){
            this.modify_value(-1);
        } else if(e.y < Ti.Platform.displayCaps.platformHeight*.25){
            this.modify_value(1);
        }
    };

    this.touch_move = function(e){
        if(Math.abs(last_point - e.y) > 20){
            if(last_point > e.y){
                this.modify_value(1);
            } else{
                this.modify_value(-1)
            }
            last_point = e.y;
        }
    };

    this.touch_end = function(e){
        last_point = e.y;
    };

    this.modify_value = function(val){};

    this.round = function(val, decimals){
        var rounder = 1;

        if(decimals == 1)        { rounder = 10}
        else if(decimals == 2)   { rounder = 100}
        else if(decimals == 3)   { rounder = 1000}

        var rounded = Math.round(val*rounder)/rounder;
        var fixed   = rounded.toFixed(decimals);
        return fixed
    };
}

this.view   = new Slide();
var self    = this;

$.container.addEventListener('touchstart', function(e) {
    self.view.touch_start(e);
});
$.container.addEventListener('touchmove', function(e) {
    self.view.touch_move(e);
});
$.container.addEventListener('touchend', function(e) {
    self.view.touch_move(e);
});