var calculator      = Alloy.createController('Calculator');
var slides          = [
    Alloy.createController('TargetGravity'),
    Alloy.createController('ActualGravity'),
    Alloy.createController('Temperature'),
    Alloy.createController('Volume')
];

for(var i=0; i<slides.length; i++){
    $.container.addView(slides[i].getView());
    Ti.App.addEventListener(slides[i].name, function(e) {
        $.result.text = calculator.calculate(e);
    });
}

$.index.open();

var bubble_int = setInterval(function(){
    bubble = Alloy.createController('Bubble');
    bubble.append_to_view($.index);
}, 350);