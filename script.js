let toggleBtn = document.querySelector('#toggleBtn');
let menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', clickFn);

function clickFn()
{
    menu.classList.toggle('active'); 
}


(function (global, $) {

    var $menu     = $('.menu li'),
        $contents = $('.scroll'),
        $doc      = $('html, body');
    $(function () {
        // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function(e){
            var $target = $(this).parent(),
                idx     = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
            $doc.stop()
                    .animate({
                        scrollTop :offsetTop
                    }, 800);
            return false;
        });
    });

    // menu class 추가
    $(window).scroll(function(){
        var scltop = $(window).scrollTop();
        $.each($contents, function(idx, item){
            var $target   = $contents.eq(idx),
                i         = $target.index(),
                targetTop = $target.offset().top;

            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
            }
            if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })

    });

}(window, window.jQuery));