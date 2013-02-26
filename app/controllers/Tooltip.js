$.email.addEventListener('click', function(){
    var emailDialog             = Titanium.UI.createEmailDialog();
    emailDialog.subject         = 'Regarding 1.041 Fixer';
    emailDialog.toRecipients    = ['joelongstreet@gmail.com'];
    emailDialog.messageBody     = 'Hi';
    emailDialog.open();
});

$.se_link.addEventListener('click', function(){
    Ti.Platform.openURL('http://homebrew.stackexchange.com/questions/4137/temperature-correction-for-specific-gravity');
});

$.borg_link.addEventListener('click', function(){
    Ti.Platform.openURL('http://hbd.org/brewery/library/HydromCorr0992.html');
});

$.close.addEventListener('click', function(){
    Ti.App.fireEvent('help', { value : 'close' });
});

var help_open = false;

exports.open = function($index, $wrapper){

    var fade_in     = Ti.UI.createAnimation({opacity : 1, duration : 500});
    var fade_out    = Ti.UI.createAnimation({opacity : 0, duration : 500});

    if(!help_open){
        $index.add($.container)
        $wrapper.animate(fade_out);
        $.container.animate(fade_in);
        help_open = true;
    }
};


exports.close = function($index, $wrapper){

    var fade_in     = Ti.UI.createAnimation({opacity : 1, duration : 500});
    var fade_out    = Ti.UI.createAnimation({opacity : 0, duration : 500});

    if(help_open){
        $.container.animate(fade_out);
        $wrapper.animate(fade_in);
    
        fade_out.addEventListener('complete', function(){
            $index.remove($.container);
        });
        help_open = false;
    }
};