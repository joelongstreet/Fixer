exports.baseController  = 'Slide';

var name                = 'actual_gravity';
var value               = 1.040;
$.label.text            = 'Actual Gravity';
$.modifier.text         = '1.040';
exports.name            = name;

this.view.modify_value  = function(val){
    value += val/1000;
    $.modifier.text = this.round(value, 3);
    Ti.App.fireEvent(name, {
        value : value
    });
};