var $croll = $('.goto');


$croll.on('click', function(e){
    let linkHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(linkHref).offset().top
    },2000, 'swing');
    console.log($(linkHref).offset().top);
    e.preventDefault();
});
