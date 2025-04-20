$(window).scroll(function(){
    //获取滚动条滚动的位置
    var top = $(window).scrollTop();
    if(top > 20){
        $('.q_header').addClass("q_header_fixed");
        $('.sp_header').addClass("sp_header_fixed");
    }
    else if(top <= 20){
        $('.q_header').removeClass("q_header_fixed");
        $('.sp_header').removeClass("sp_header_fixed");
    }
})

// q_nav_son start!
$(document).ready(function(){
    $('ul.q_nav>li').mouseover(function(){
      $(this).find('.q_nav_son').stop().slideDown(200);
    }).mouseleave(function(){
      $(this).find('.q_nav_son').stop().slideUp(0);
    });
    $('ul.q_nav>li').each(function(){
        var ishaveli = $(this).find('.q_nav_son>li');
        if(ishaveli.length == 0){
            $(this).find('.q_nav_son').css('padding','0');
        }
    });
});
// q_nav_son end!

$(document).ready(function(){
  $('.languages').click(function(){
    $('.lang_ul').slideToggle(100);
  });
});
