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