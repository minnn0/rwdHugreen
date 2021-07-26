(function() {
    var winW = 0; // 창 넓이값 초기화
    var sc = 0; // 스크롤값 초기화
    
    // gnb 슬라이드
    $('.gnb .depth1').on('mouseenter', function() {
        $('#header').addClass('on');
        $(this).find('.depth2').addClass('open');
    });
    $('#header').on('mouseleave', function() {
        $('#header').removeClass('on');
        $(this).find('.depth2').removeClass('open');
    });

    // 팝업 닫기
    $('.popup .btn_close').on('click', function() {
        $(this).parent().hide();
    });

    // 메인비주얼
    var video = $('.main_visual video');
    video.on('ended',function(){
      video.css('opacity', 0);
    });

    // main_case 슬라이드
    var caseSlider = new Swiper('.case_slider', {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // main_work 비디오 애니메이션
    $('.main_work li').on('mouseenter',function() {
        winW = $(window).outerWidth();

        if(winW > 1200) {
            $(this).find('video').stop().fadeIn(300);
            $(this).find('video')[0].currentTime = 0;
            $(this).find('video')[0].play();
        }
    }).on('mouseleave',function() {
        if(winW > 1200) {
            $(this).find('video').stop().fadeOut(300);
        }
    });

    // 모바일 검색 버튼
    $('#header .top_search .m_btn_search').on('click', function(e) {
        e.preventDefault();
        
        $(this).toggleClass('open');
        $('.search_open').toggle();
    });

    $(window).resize(function () {
        winW = $(window).outerWidth();

        if(winW > 1200) {
            $('#header .top_search .m_btn_search').removeClass('open');
            $('.search_open').hide();
        }
    }).trigger('resize');

    // footer 패밀리사이트 리스트 슬라이드 
    $('#footer .family_site').on('click', function() {
        $(this).toggleClass('on');
        $(this).find('.fam_list').slideToggle();
    });

    //  탑 버튼
    var btnTop = $('#footer .btn_top')
    btnTop.hide();

    $(window).scroll(function() {

        sc = $(this).scrollTop();

        if(sc >= 400) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }
    }).trigger('scroll');

    btnTop.on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({scrollTop: 0});
    });


    // ---------- 1200 태블릿 분기점 ------------
    // 메뉴 열기
    $('#header .btn_menu_open').on('click', function() {
        $('#header .dimm').fadeIn();
        $('#header .m_gnb_box').addClass('open');
    });

    $('#header .btn_menu_close').on('click', function() {
        $('#header .dimm').fadeOut();
        $('#header .m_gnb_box').removeClass('open');
    });

    // 메뉴 아코디언
    $('#header .m_gnb_box .depth1>li>a').on('click', function() {
        $(this).siblings('.depth2').stop().slideToggle().parent().siblings().find('.depth2').stop().slideUp();

        $(this).toggleClass('on').parent().siblings().find('>a').removeClass('on');
    });
})();