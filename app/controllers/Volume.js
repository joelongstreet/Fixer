exports.baseController = 'Slide';

this.me.modifier = function(val){
    var value = this.get_value() + val/10;
    return value;
};

this.me.update_value = function(val){
    $.value.text = this.round(val, 1);
};

this.me.name = 'Volume';
$.label.text = 'Volume';
this.me.update_value(this.me.get_value());