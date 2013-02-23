exports.baseController = 'Slide';

this.me.modifier = function(val){
    var value = this.get_value() + val/1000;
    return value;
};

this.me.update_view = function(val){
    $.value.text = this.round(val, 3);
};

this.me.name = 'Actual Gravity';
$.label.text = 'Actual Gravity';
this.me.update_view(this.me.get_value());