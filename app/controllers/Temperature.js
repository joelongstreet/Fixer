exports.baseController  ='Slide';

var value               = 100;
$.label.text            = 'Temperature';
$.modifier.text         = '100°F';

this.view.modify_value  = function(val){
    value += val;
    $.modifier.text = this.round(value, 0) + '°F';
}