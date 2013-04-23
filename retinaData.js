/*
    Name: Retina data
    Description: A jquery retina display via data plugin
    Author: Kyle King (http://highergroundstudio.com)
    Date: 04/23/2013
    Version: 1.0.0
*/

(function( $ ){
    $.fn.retinaData = function() {
        // if(window.devicePixelRatio >= 2) {
        if(true){
            // i = index
            // e = element
            // r = retina url
            // h = holder
            this.each(function(i, e, r, h) {
                e=$(e);
                if(!e.attr('src')||!e.data('retina'))return;
                r = e.data('retina');
                h = e.attr('src', r).removeClass('retina').addClass('retina-displayed');
            });
        }
        return this;
    }
})( jQuery );
