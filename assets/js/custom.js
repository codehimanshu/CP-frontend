/*prevent parent scoll of subelement has a scroll*/
$.fn.isolatedScroll = function() {
    this.bind('mousewheel DOMMouseScroll', function (e) {
        var delta = e.wheelDelta || (e.originalEvent && e.originalEvent.wheelDelta) || -e.detail,
            bottomOverflow = this.scrollTop + $(this).outerHeight() - this.scrollHeight >= 0,
            topOverflow = this.scrollTop <= 0;

        if ((delta < 0 && bottomOverflow) || (delta > 0 && topOverflow)) {
            e.preventDefault();
        }
    });
    return this;
};
$('.filter-box .submenu').isolatedScroll();
$( window ).resize(positionFooter);
function positionFooter()
{
  if($('footer').css('position') == 'fixed')
  {
    if($('body').height()+$('footer').outerHeight() > window.innerHeight)
    {
      $('footer').css({'position':'static'});
    }
  }
  else
  {
    if($('body').height()<window.innerHeight){
      $('footer').css({'position':'fixed','bottom':0,'width':'100%'});
    }          
  }      
}
positionFooter(); 