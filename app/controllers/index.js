var acitve_slide    = 0;
var slides          = [
    Alloy.createController('TargetGravity').getView(),
    Alloy.createController('ActualGravity').getView(),
    Alloy.createController('Temperature').getView(),
    Alloy.createController('Volume').getView()
];

for(var i=0; i<slides.length; i++){
    $.container.addView(slides[i]);
}

$.index.open();

var bubble_int = setInterval(function(){
    bubble = Alloy.createController('Bubble');
    bubble.append_to_view($.index);
}, 350);