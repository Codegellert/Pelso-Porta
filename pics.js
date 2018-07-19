let images = [
     'url(kepek/balcsi1.jpg)', 'url(kepek/balcsi2.jpg)', 'url(kepek/balcsi3.jpg)', 'url(kepek/balcsi4.jpg)', 'url(kepek/coffe.jpg)'
    ],
    pic = $('.pic'),
    bigpic = $('.bigpic'),
// Starting backgrounds for each box
    start = (function(){
        bigpic[0].style.backgroundImage = images[0];
        for(i=0; i< 5;i++){
            pic[i].style.backgroundImage = images[i];
                        };
        
    }());


pic.on('click',function(){
    
    bigpic[0].style.backgroundImage = this.style.backgroundImage;
    $(this).addClass('opacity');
    $(this).siblings().removeClass('opacity');
})