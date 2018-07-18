
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 0 ){
            $('.logo').css({
                'padding-top':'0' , 
                'padding-bottom':'0'
            });
            $('nav ul').css('padding', '10px 30px');  
            $('nav').css('background-color','rgba(0,0,0,0.5)')      
        }else{
            $('.logo').css({
                'padding-top':'20px' , 
                'padding-bottom':'20px'
            });
            $('nav ul').css('padding', '30px');  
            $('nav').css('background-color','')  
        }
    })
