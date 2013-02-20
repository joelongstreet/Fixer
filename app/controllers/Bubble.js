var rando = function(hi, lo){
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
};

var left_pos        = rando(Ti.Platform.displayCaps.platformWidth, 0);
var rand_s          = rando(20, 5);
var new_left        = rando(left_pos + 5, left_pos - 5);
$.bubble.left       = rando(Ti.Platform.displayCaps.platformWidth, 0);
$.bubble.width      = rand_s;
$.bubble.height     = rand_s;
$.bubble.bottom     = rand_s*-1;
$.bubble.borderRadius = rand_s/2;

var animation       = Ti.UI.createAnimation({
    bottom          : Ti.Platform.displayCaps.platformHeight,
    left            : new_left,
    duration        : rando(2500, 800)
});

exports.append_to_view = function(view){
    view.add($.bubble);
    $.bubble.animate(animation);
    animation.addEventListener('complete', function(){
        view.remove($.bubble);
    });
};