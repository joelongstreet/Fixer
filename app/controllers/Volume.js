exports.baseController  = 'Slide';

var name                = 'volume';
var value               = 5.5;
$.label.text            = 'Volume';
$.modifier.text         = '5.5';
exports.name            = name;

this.view.modify_value  = function(val){
    value += val/10;
    $.modifier.text = this.round(value, 1);
    Ti.App.fireEvent(name, {
        value : value
    });
};