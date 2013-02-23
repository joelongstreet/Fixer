exports.baseController = 'Slide';

this.me.update_view = function(val){
    var value = 0
    if(units == 'Celsius'){
        value = this.round(((val - 32)*5)/9, 0)
    } else{
        value = this.round(val, 0);
    }
    $.value.text = value;
};

this.me.switch_units = function(){
    if(units == 'Farenheit'){
        units = 'Celsius';
        $.units.text = '°C';
    } else{
        units = 'Farenheit';
        $.units.text = '°F';
    }
    this.update_view(this.get_value());
};

var units       = 'Farenheit';
this.me.name    = 'Temperature';
$.label.text    = 'Temperature';
$.units.text    = '°F';
$.label.right   = 55;
this.me.update_view(this.me.get_value());