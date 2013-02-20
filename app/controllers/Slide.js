function Slide(){
    var start_point = 0;
    var last_point  = 0;

    this.set_value = function(val){
        if(typeof(val) != 'undefined'){
            this.value = this.modifier(val);
        } else{
            this.value = Alloy.Globals.defaults[this.name];
        }
        Ti.App.fireEvent(this.name, {
            value : this.value
        });
        this.update_value(this.value);
    };

    this.get_value = function(){
        if(this.value == null){
            return Alloy.Globals.defaults[this.name];
        }
        return this.value;
    };

    this.modifier = function(val){
        return this.get_value() + val
    };

    this.touch_start = function(e){
        start_point = e.y;

        if(e.y > Ti.Platform.displayCaps.platformHeight*.75){
            this.set_value(-1);
        } else if(e.y < Ti.Platform.displayCaps.platformHeight*.25){
            this.set_value(1);
        }
    };

    this.touch_move = function(e){
        if(Math.abs(last_point - e.y) > 20){
            if(last_point > e.y){
                this.set_value(1);
            } else{
                this.set_value(-1)
            }
            last_point = e.y;
        }
    };

    this.touch_end = function(e){
        last_point = e.y;
    };

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

this.me     = new Slide();
var self    = this;

$.container.addEventListener('touchstart', function(e) {
    self.me.touch_start(e);
});
$.container.addEventListener('touchmove', function(e) {
    self.me.touch_move(e);
});
$.container.addEventListener('touchend', function(e) {
    self.me.touch_move(e);
});