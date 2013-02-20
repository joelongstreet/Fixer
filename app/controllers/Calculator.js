var props = Alloy.Globals.defaults

exports.calculate = function(e){
    props[e.type]           = e.value;
    
    // LOL, WHAT THE FUCK!?! - there's no way this is right
    var hydro_calibration   = 60;
    var corrected_gravity   = props['Actual Gravity'] * ((1.00130346 - 0.000134722124 * props['Temperature'] + 0.00000204052596 * Math.pow(props['Temperature'], 2) - 0.00000000232820948 * Math.pow(props['Temperature'], 3)) / (1.00130346 - 0.000134722124 * hydro_calibration + 0.00000204052596 * Math.pow(hydro_calibration, 2) - 0.00000000232820948 * Math.pow(hydro_calibration, 3)));
    var gravity_points      = 1000*(corrected_gravity - 1)*props['Volume'];
    var target_points       = 1000*(props['Target Gravity'] - 1)*props['Volume'];
    var result              = null;

    if(corrected_gravity > props['Target Gravity']) {
        result = 'Add ' + round(gravity_points/target_points, 2) + ' gallons of water';
    }
    else {
        diff = target_points - gravity_points
        result = 'Add ' + round(diff/45, 2) + ' lbs of DME';
    }

    return result;
}


exports.reset = function(){
    props = Alloy.Globals.defaults;
}


var round = function(val, decimals){
    var rounder = 1;

    if(decimals == 1)        { rounder = 10}
    else if(decimals == 2)   { rounder = 100}
    else if(decimals == 3)   { rounder = 1000}

    var rounded = Math.round(val*rounder)/rounder;
    var fixed   = rounded.toFixed(decimals);
    return fixed
};