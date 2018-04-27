$("#calender").datepicker();

//처음 열때 위치잡아주기
var $windowWidth = $("body").width();
if ($windowWidth <= 1024) {
  // $("nav").css("margin-left", -300);
  $('nav').css('display','none');
  // 바깥 클릭시 메뉴 숨기기
$('.mainContent, aside').on('click',function(){
  var a = $('nav').css('display');
  if(a == 'block'){
    // console.log('닫혀라');
    $("nav").animate({width:'toggle'},350);
    $(".header__hamberMenu").toggleClass("is-opened");
  }
})
} else {
  $("nav").css("display", 'block');
}

// 수동으로 움직일시
$(window).resize(function() {
  var $windowWidth = $("body").width();
  if ($windowWidth <= 1024) {
    $(".header__hamberMenu").removeClass("is-opened");
    $('nav').css('display','none');
  } else {
    $("nav").css("display", 'block');
    }
  });

// 모바일 햄버거 버튼
$(".header__hamberMenu, .header__hamberMenu+span").on("click", function() {
  $(".header__hamberMenu").toggleClass("is-opened");
  $("nav").animate({width:'toggle'},350);
});

// 헤더 알림 버튼
$('.header__alert, .header__tooltip div').on('click',function(){
  // e.stopPropagation();
  $('.header__tooltip').toggleClass('db_im');
})

// 메인에서 메뉴 클릭시
$('.myTreeMenu li').click(function(){
  let index = $(this).closest('li').index();
  // 팝업들은 on2. 깔리는건 on
  // 팝업들은 토글
  // 인맥찾기, 나의 인맥, 채팅, 정보 수정
  console.log(index);
  if(index == 1 || index == 2 || index == 3 || index == 6){
    
    $(this).toggleClass('on2');
    $('.mainContent article').siblings('div').eq(index).toggleClass('on2');
    $('.menuList li').eq(index).toggleClass('on2');
  }
  else{
    // 팝업이 아닌것들
    $('.myTreeMenu li').eq(0).removeClass('on');
    $('.menuList li').eq(0).removeClass('on');
    $('.menuList li').eq(4).removeClass('on');
    $('.menuList li').eq(5).removeClass('on');
    $('.menuList li').eq(index).addClass('on');
    $('.mainContent article').hide();
    $('.mainContent article').siblings('div').eq(index).toggleClass('on');
  }

})


// lnb메뉴 이미지 교체
$('.menuList li a').click(function(e){
  e.preventDefault();
  var menulist = $('.menuList li').eq(0);
  var $li_index = $(this).closest('li').index();
  console.log($li_index);
  // 6번째 이하일때. 내 가계도 ~ 정보 수정
  if($li_index <= 6){
    // 팝업들은 on2. 깔리는건 on
    // 인맥찾기, 나의 인맥, 채팅, 정보 수정
    if($li_index == 1 || $li_index == 2 || $li_index == 3 || $li_index == 6){
        $(this).closest('li').toggleClass('on2');
        $('.mainContent>div').eq($li_index).toggleClass('on2');
        $('.myTreeMenu li').eq($li_index).toggleClass('on2');
    }
    // 내 가계도, 산소 찾기, 가계 예절
    else{
      $('.mainContent>div').removeClass('on').eq($li_index).addClass('on');
      $(this).closest('li').siblings('li').removeClass('on');
      $(this).closest('li').addClass('on');
      if($('.menuList li:nth-child(4)').hasClass('on')){
        $('article').hide();
        // 0,4,5번 제외하기
        $('.menuList li').eq(0).removeClass('on');
        $('.menuList li').eq(4).removeClass('on');
        $('.menuList li').eq(5).removeClass('on');
        $(this).closest('li').addClass('on');
      }
      else{
        $('article').hide();
        // 0,4,5번 제외하기
        $('.menuList li').eq(0).removeClass('on');
        $('.menuList li').eq(4).removeClass('on');
        $('.menuList li').eq(5).removeClass('on');
        $(this).closest('li').addClass('on');
          }
        }
    if(menulist.hasClass('on')){
    }
  }
  
  // return false;
})

// $('.alertNewWrap').css('display','none');
$('.family').css('display','none');

// 일정보기 눌렀을시 버튼 교체 이벤트 - datepicker에서 날짜 선택후 누르면 바뀌는걸로 변경해야됨
$('aside .showBottomCalender .button').click(function(){
  $(this).toggleClass('active');
  $(this).siblings().toggleClass('showCalen');
  return false;
})

// 중앙정렬
function center(content){
  var w_Width = $(window).width();
  var w_Height = $(window).height();
  var c_width = $(content).outerWidth();
  var c_height = $(content).outerHeight();
  var winW2 = (w_Width - c_width) /2;
  var winH2 = (w_Height - c_height) /2;

  if (w_Width>1024) {
    $(content).css({
      'top':winH2,
      'left':winW2
    })
  }
  else{
    $(content).css({
      'top':winH2,
      'left':winW2+50
    })
  }
};
center('.chatt');
center('.relationSearch');
center('.myRelation');
center('.mainContent .editInfo');


//  채팅 팝업 닫기
$(document).on('click','.popup__close', function(){
  // $('.chatt').removeClass('on2');
  $(this).parents('on2').removeClass('on2');
  $('.chatt').removeClass('on');
  $('.menuList li:nth-child(4)').removeClass('on');
  $('.mainContent li:nth-child(4)').removeClass('on');
  return false;
});

closePopup();
// 팝업 닫는 부분에 대해 함수를 만들어야됨
function closePopup(content){
  $(document).on('click','body',function(){
    console.log('aa');
  });
}

  // idx가 반대라 반대로 바꾸는 함수 - 보완이 필요하다. 0과 1뿐만 아니라 012면 210으로 나오는걸 추후에 연습해보자
function cha(idx){
  if(idx == '0'){
    idx = 1;
  }
  else{
    idx = 0;
   }
  return idx;
}

// 채팅 탭
$('.chatt__tab li').click(function(){
  var idx =$(this).index();

  cha(idx);
  // 탭변경(탭의 css);
  $('.chatt__tab li').removeClass('on').eq(idx).addClass('on');
  $('.chatt__tablist').removeClass('active').eq(cha(idx)).addClass('active');

  var chatt__tablist = document.querySelectorAll('chatt__tablist');
  for(var i=0; i<chatt__tablist.length; i++){
    $(this).removeClass('on').eq(idx).addClass('on');
  }
  // 채팅 탭 변경시 채팅 타이틀 변경
  if($('.chatt__tab li:nth-child(1)').hasClass('on')){
    // $('.chatt__title h3').html('');
  }
  else{
    $('.chatt__title h3').html('채팅목록');
  }
})


// 채팅 인맥에서 번호 입력시 - 구분해주기
$('.chatt__pclist').find('.chatt__pclistPhone').each(function(index,item){
  // console.log($(this).text());
  var a = $(this).text();
  var cut1 = a.substring(0,3);
  var cut2 = a.substring(3,7);
  var cut3 = a.substring(7,11);
  var b = cut1 + '-'+ cut2 + '-' + cut3;
  $(item).text(b);
})

// 내 정보 수정 - 이미지 변경부분
$('.profile__imgUploadfile').click(function(){
  $(this).siblings('.popup').toggleClass('db_im');
})