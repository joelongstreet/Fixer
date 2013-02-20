exports.baseController  = 'Slide';

var name                = 'temperature';
var value               = 100;
$.label.text            = 'Temperature';
$.modifier.text         = '100°F';
exports.name            = name;

this.view.modify_value  = function(val){
    value += val;
    $.modifier.text = this.round(value, 0) + '°F';
    Ti.App.fireEvent(name, {
        value : value
    });
};