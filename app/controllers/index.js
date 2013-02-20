Alloy.Globals.defaults = {
    'Target Gravity'  : 1.040,
    'Actual Gravity'  : 1.040,
    'Temperature'     : 100,
    'Volume'          : 5.5
};

var calculator      = Alloy.createController('Calculator');
var slides          = [
    Alloy.createController('TargetGravity'),
    Alloy.createController('ActualGravity'),
    Alloy.createController('Temperature'),
    Alloy.createController('Volume')
];

for(var i=0; i<slides.length; i++){
    $.container.addView(slides[i].getView());
    Ti.App.addEventListener(slides[i].me.name, function(e) {
        $.result.text = calculator.calculate(e);
    });
}

$.index.open();

Ti.Gesture.addEventListener('shake', function(){
    calculator.reset();
    for(var i = 0; i < 200; i++){
        bubble = Alloy.createController('Bubble');
        bubble.append_to_view($.index);
    }
    for(var i=0; i<slides.length; i++){
        slides[i].me.set_value()
    }
});

var bubble_int = setInterval(function(){
    bubble = Alloy.createController('Bubble');
    bubble.append_to_view($.index);
}, 350);