// jQuery extension
(function($){
    $.fn.extend({
        removeByContent: function(str) {
            return this.each(function(){
                var self = $(this);

                if(self.html().indexOf(str) != -1) self.remove();
            });
        }
    });
})(jQuery);

// your script
$('style').removeByContent('video { -webkit-transform: scaleX(1.5); -moz-transform: scaleX(1.5);}');
$('style').removeByContent('video { -webkit-transform: scaleY(1.5); -moz-transform: scaleY(1.5);}');