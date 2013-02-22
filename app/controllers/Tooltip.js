$.email.addEventListener('click', function(){
    var emailDialog             = Titanium.UI.createEmailDialog();
    emailDialog.subject         = 'Regarding 1.041 Fixer';
    emailDialog.toRecipients    = ['joelongstreet@gmail.com'];
    emailDialog.messageBody     = 'Hi';
    emailDialog.open();
});

$.close.addEventListener('click', function(){
    Ti.App.fireEvent('help', { value : 'close' });
    var fade_out = Ti.UI.createAnimation({opacity : 0, duration : 700});
    $.wrapper.animate(fade_out);
    fade_out.addEventListener('complete', function(){
        $.wrapper.remove($.wrapper);
    });
});