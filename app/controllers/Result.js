// ----> Setup Default Values
var props           = Alloy.Globals.defaults;
var type            = null;
var value           = null;
var last_type       = null;
var extract_units   = 'Pounds';
var extract_type    = 'Dry Malt Extract';
var water_units     = 'Gallons';


$.extract_units.addEventListener('click', function(){
    (extract_units == 'Pounds') ? extract_units = 'Kilograms' : extract_units = 'Pounds';
    calculate();
});
$.extract_type.addEventListener('click', function(){
    (extract_type == 'Dry Malt Extract') ? extract_type = 'Liquid Malt Extract' : extract_type = 'Dry Malt Extract';
    calculate();
});
$.water_units.addEventListener('click', function(){
    (water_units == 'Gallons') ? water_units = 'Litres' : water_units = 'Gallons';
    calculate();
});


var calculate = function(e){
    if(e) { props[e.type] = e.value; }

    // These are more specific ways to correct gravity with a flexible hydrometer calibration
    // They're in here just in case I ever want to switch back
    // var hydro_calibration   = 60;
    // var corrected_gravity   = props['Actual Gravity'] * ((1.00130346 - 0.000134722124 * props['Temperature'] + 0.00000204052596 * Math.pow(props['Temperature'], 2) - 0.00000000232820948 * Math.pow(props['Temperature'], 3)) / (1.00130346 - 0.000134722124 * hydro_calibration + 0.00000204052596 * Math.pow(hydro_calibration, 2) - 0.00000000232820948 * Math.pow(hydro_calibration, 3)));

    var correction          = 1.313454 - 0.132674*props['Temperature'] + 0.002057793*Math.pow(props['Temperature'], 2) - 0.000002627634*Math.pow(props['Temperature'], 3);
    var corrected_gravity   = props['Actual Gravity'] + (correction * 0.001);
    var gravity_points      = 1000*(corrected_gravity - 1)*props['Volume'];
    var target_points       = 1000*(props['Target Gravity'] - 1)*props['Volume'];

    if(corrected_gravity > props['Target Gravity']) {
        value = round(gravity_points/target_points - 1, 2);
        (value != 0) ? type = 'water' : type = null;
    }
    else {
        diff    = target_points - gravity_points;
        value   = round(diff/45, 2);
        (value != 0) ? type = 'extract' : type = null;
    }

    if(type == null && last_type != type){
        $.default_result.opacity = 1;
        $.default_result.zIndex  = 1;
        $.add_extract.opacity    = 0;
        $.add_water.opacity      = 0;
        $.add_extract.zIndex     = 0;
        $.add_water.zIndex       = 0;
        $.equilibrium.text       = 'You have reched gravity equilibrium.';
    } else if(type == 'extract'){

        //Set and show the proper extract units and type
        if(last_type != type){
            $.add_extract.opacity       = 1;
            $.add_extract.zIndex        = 1;
            $.add_water.opacity         = 0;
            $.default_result.opacity    = 0;
            $.add_water.zIndex          = 0; 
            $.default_result.zIndex     = 0;
        }
        $.extract_units.text = extract_units;
        $.extract_type.text  = extract_type;

        //Calculate and set extract value
        var points = value;
        if(extract_type == 'Liquid Malt Extract') {     points*=1.2;      }
        if(extract_units == 'Kilograms') {  points*=.453592; }
        $.extract_value.text = ' ' + round(points, 2) + ' ';

    } else if(type == 'water'){
        if(last_type != type){
            $.add_water.opacity        = 1;
            $.add_water.zIndex         = 1;
            $.add_extract.opacity      = 0;
            $.default_result.opacity   = 0;
            $.add_extract.zIndex       = 0;
            $.default_result.zIndex    = 0; 
        }

        var points = value;
        if(water_units == 'Litres'){
            points*=3.78541
        }

        $.water_units.text = water_units;
        $.water_value.text = ' ' + round(points, 2) + ' ';
    }

    last_type = type;
};

var round = function(val, decimals){
    var rounder = 1;

    if(decimals == 1)        { rounder = 10}
    else if(decimals == 2)   { rounder = 100}
    else if(decimals == 3)   { rounder = 1000}

    var rounded = Math.round(val*rounder)/rounder;
    var fixed   = rounded.toFixed(decimals);
    return fixed
};

exports.calculate = calculate;