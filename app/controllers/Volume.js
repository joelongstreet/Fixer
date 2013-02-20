exports.baseController  ='Slide';

var value               = 5.5;
$.label.text            = 'Volume';
$.modifier.text         = '5.5';

this.view.modify_value  = function(val){
    value += val/10;
    $.modifier.text = this.round(value, 1);
}