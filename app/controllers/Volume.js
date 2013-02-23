exports.baseController = 'Slide';

this.me.modifier = function(val){
    var value = this.get_value() + val/10;
    return value;
};

this.me.update_view = function(val){
    var value = 0
    if(units == 'Litres'){
        value = this.round(val*3.78541, 1);
    } else{
        value = this.round(val, 1);
    }
    $.value.text = value;
};

this.me.switch_units = function(){
    if(units == 'Gallons'){
        units = 'Litres';
        $.units.text    = 'L.';
        $.label.right   = 60;
    } else{
        units = 'Gallons';
        $.units.text    = 'Gal.';
        $.label.right   = 75;
    }
    this.update_view(this.get_value());
};

var units       = 'Gallons';
this.me.name    = 'Volume';
$.label.text    = 'Volume';
$.units.text    = 'Gal.';
$.label.right   = 75;
this.me.update_view(this.me.get_value());