var $croll = $('nav ul li a')
$croll.on('click', function(e){
    let linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    },1000, 'swing');
    e.preventDefault();
});
