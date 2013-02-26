function Slide(){
    var last_point  = 0;

    this.set_value = function(val){
        this.value = this.modifier(val);
        Ti.App.fireEvent(this.name, {
            value : this.value
        });
        this.update_view(this.value);
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

    this.switch_units = function(){};

    this.touch_start = function(e){
        last_point = e.y;
    };

    this.touch_move = function(e){
        if(Math.abs(last_point - e.y) > 20){
            Ti.App.fireEvent('scroll', { result : false });
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
        Ti.App.fireEvent('scroll', { result : true });
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
    self.me.touch_end(e);
});
$.label.addEventListener('click', function(e){
    self.me.switch_units();
});
$.value.addEventListener('click', function(e){
    self.me.switch_units();
});
$.units.addEventListener('click', function(e){
    self.me.switch_units();
});