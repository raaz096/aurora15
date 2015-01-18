
(function($) {
  "use strict";

//==== On Document Ready ========
$(document).ready(function(){

$("#countdown").countdown("2015/08/22", function(event) {
	var $this = $(this).html(event.strftime(''
     + '<div class="col-sm-3 countdown-col"><span class="countdown-time"> %-D </span> days </div> '
     + '<div class="col-sm-3 countdown-col"><span class="countdown-time"> %H </span> hr </div>'
     + '<div class="col-sm-3 countdown-col"><span class="countdown-time"> %M </span> min </div>'
     + '<div class="col-sm-3 countdown-col"><span class="countdown-time"> %S </span> sec </div>'));
});

 

});
})(jQuery);

