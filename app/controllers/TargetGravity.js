exports.baseController = 'Slide';

this.me.modifier = function(val){
    var value = this.get_value() + val/1000;
    return value;
};

this.me.update_value = function(val){
    $.value.text = this.round(val, 3);
};

this.me.name = 'Target Gravity';
$.label.text = 'Target Gravity';
this.me.update_value(this.me.get_value());