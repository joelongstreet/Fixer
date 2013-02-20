exports.baseController  ='Slide';

var value               = 1.040;
$.label.text            = 'Actual Gravity';
$.modifier.text         = '1.040';

this.view.modify_value  = function(val){
    value += val/1000;
    $.modifier.text = this.round(value, 3);
}