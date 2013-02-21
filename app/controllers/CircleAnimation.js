exports.make_animation = function(circle) {

    this.rando = function(hi, lo){
        return Math.floor(Math.random() * (hi - lo + 1)) + lo;
    };

    nx  = this.rando(-500, 500);
    ny  = this.rando(-500, 500);

    var animation = Ti.UI.createAnimation({
        top         : ny,
        left        : nx,
        duration    : 30000
    });

    return animation;
}