// Setup Default Values
Alloy.Globals.defaults = {
    'Target Gravity'  : 1.054,
    'Actual Gravity'  : 1.048,
    'Temperature'     : 100,
    'Volume'          : 5.5
};
// ---->

// Build Slides and Calculate Function
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
// ---->


// Listen for Global Events
Ti.App.addEventListener('scroll', function(val){
    $.container.setScrollingEnabled(val.result)
});

Ti.Gesture.addEventListener('shake', function(){
    calculator.reset();
    for(var i = 0; i < 30; i++){
        bubble = Alloy.createController('Bubble');
        bubble.append_to_view($.index);
    }
    for(var i=0; i<slides.length; i++){
        slides[i].me.set_value()
    }
});
// ---->


// Some Eye Candy
var bubble_int = setInterval(function(){
    bubble = Alloy.createController('Bubble');
    bubble.append_to_view($.index);
}, 350);

/*var animator        = Alloy.createController('CircleAnimation');
var animate_circles = function(){
    $.circle.animate(animator.make_animation($.circle));
    $.circle2.animate(animator.make_animation($.circle2));
}
animate_circles();
setInterval(animate_circles, 30000);*/
// ---->


//Fade Out StartUp
var fade_startup = Ti.UI.createAnimation({opacity : 0, duration : 500});
$.startup.animate(fade_startup)
fade_startup.addEventListener('complete', function(){
    $.index.remove($.startup);
});


//OPEN!!!
$.index.open();
// ---->