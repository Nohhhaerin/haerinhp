$(function(){
  // 페이지 스크롤
  $('#gnb a').on('click', function(){
    var hash = this.hash;
    console.log(hash)
    
    var top = $(hash).offset().top;
    console.log(top);
    
    $('html, body').animate({
      scrollTop: top
    }, 500)
    
    return false;
  });

  // 모바일 토글 버튼
  $('#btn-toggle').click(function(){
    $('#gnb')
      .slideToggle(0.4)
      .toggleClass('show');
    
    if($('#gnb').hasClass('show')){
      $(this)
        .find('i')
        .removeClass('fa-bars')
        .addClass('fa-times');
    } else{
      $(this)
        .find('i')
        .removeClass('fa-times')
        .addClass('fa-bars')
    }
  });
  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  $(window).scroll(function () {
    var about = parseInt($('#about').offset().top)-700;
    var s = $(window).scrollTop();
    if (s >= about) {
  
      $('#about .skill_list > li > div ').addClass('on');
      $('#about .skill_list').addClass('on');
  
    }
    console.log(s)
    console.log(about)
    });
  
    var scrollY = 0;

  $(window).resize(function(){
    var w = $(window).width();
    if (w >= 768){
      $('#gnb').css('display', 'none');
    }
  });

  $(window).scroll(function () {
    var about = parseInt($('#about').offset().top) 
    var s = $(window).scrollTop();
    if (s >= about) {

      run_pie()
      // $('#about .skills1 > .chart').addClass('on');
      // $('#about .skills1').addClass('on');

    }
    console.log(s)
    console.log(about)
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#fixed_top').fadeIn();
    } else {
      $('#fixed_top').fadeOut();
    }
  });

  $("#fixed_top").click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  
})