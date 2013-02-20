exports.baseController = 'Slide';

this.me.update_value = function(val){
    $.value.text = this.round(val, 0) + '°F';
};

this.me.name = 'Temperature';
$.label.text = 'Temperature';
this.me.update_value(this.me.get_value());