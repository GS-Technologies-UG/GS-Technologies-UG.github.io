var $ = jQuery.noConflict();

    /* Homepage Boxes Animations
    ===================================================================================================================================*/


    $(window).on('ready load resize', function() {
        function resetBoxAnimations() {
            $('.box-background').css({ opacity: 1 });
            $('.box-info').css({ opacity: 1 });
            $('#box-area').css('background-size', '100%');
        }

        $('.box').mouseenter(function() {
            if ($(window).width() > 1220) {
                var backImageUrl = $(this).find('.back-image').css('background-image').replace(/^url\(['"](.+)['"]\)/, '$1');
                $('#box-area').css('background-image', 'url("' + backImageUrl + '")');
                $('#box-area').stop().animate({ backgroundSize: '100%' }, 0);
                $('.box-background').css({ opacity: 0 });
                $(this).find('.box-background').css({ opacity: 1 });
                $('.box-info').not(this).css({ opacity: 0 });
                $(this).find('.box-info').css({ opacity: 1 });
                $(this).css({ opacity: 1 });
                $('.box').not(this).removeClass('visible')


                setTimeout(function() {
                    $('#box-area').stop().animate({ backgroundSize: '110%' }, 10000);
                }, 100);
            }
        });


        $('#box-area').mouseleave(function() {
            resetBoxAnimations();
        });

        $('.visible').mouseleave(function() {
            $('#box-area').stop().css({ backgroundSize: '100%' }, 0);
        });

        $('.box').click(function(e) {
            if ($(window).width() > 1220) {
                e.preventDefault(); // prevent default anchor behavior
                var boxLink = $(this).find('.box-link').attr('href');

                $('.box').not(this).addClass('disable-mouse');

                $('.box').animate({ borderWidth: 0 });

                $('#box-area').addClass('cover');

                $('body, html').animate({ scrollTop: dynamicScrollOffset + 'px' }, 300)

                $('.box').addClass('disable-mouse').animate({ opacity: 0 });



                setTimeout(function() {
                    window.location = boxLink;
                }, 1500);
            }
        });

        
        /* Boxes Snap Animation
    ===================================================================================================================================*/

        var IdleSnapTime = setInterval(snapViewToGrid, 500);
        var idleTime = 0;
        var dynamicScrollOffset;
        var boxOffset1;
        var boxOffset2;


        function snapViewToGrid() {
            if ($('body').hasClass('home')) {
                if ($(window).width() > 1220) {
                    idleTime++
                    if (idleTime >= 2 && $(window).scrollTop() >= boxOffset1 && $(window).scrollTop() <= boxOffset2) {
                        $('html, body').stop().animate({ scrollTop: dynamicScrollOffset }, 500)
                    } else if ($(window).scrollTop() == dynamicScrollOffset) {
                        idleTime = 0;
                    }
                }
            }
        }

    });
