/*
    Name: Retina data
    Description: A jquery retina display via data plugin
    Url: https://github.com/highergroundstudio/jquery-retina-data
    Author: Kyle King (http://highergroundstudio.com)
    Date: 04/23/2013
    Version: 1.0.0
*/

(function( $ ){
    $.fn.retinaData = function() {
        if(window.devicePixelRatio >= 2) {
            // i = index
            // e = element
            // r = retina url
            // h = holder
            this.each(function(i, e, r, h) {
                e=$(e);
                if(!e.attr('src')||!e.data('retina'))return;
                r = e.data('retina');
                e.attr('src', r).addClass('retina-enabled');
            });
        }
        return this;
    }
})( jQuery );
