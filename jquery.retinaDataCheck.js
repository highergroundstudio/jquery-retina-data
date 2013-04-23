/*
    Name: Retina data
    Url: https://github.com/highergroundstudio/jquery-retina-data
    Author: Kyle King (http://highergroundstudio.com)
    Date: 04/23/2013
    Version: 1.0.0
*/

(function( $ ){
    $.fn.retinaData = function() {
        if(window.devicePixelRatio >= 2) {
            this.each(function(i, e, r, h) {
                e=$(e);
                if(!e.attr('src')||!e.data('retina'))return;
                r = e.data('retina');
                h = e.attr('src', r).removeClass('retina').addClass('retina-enabled');
                $.ajax({url: r, type: "HEAD", success: function(){h;}});
            });
        }
        return this;
    }
})( jQuery );
