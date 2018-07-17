var cards = $('.cards');
var radio = document.getElementsByClassName('slide');

var clear = function() {
    for(let i = 0; i < cards.length; i++ ){
        cards[i].style.display = 'none';
    }
}

var startSlide = (function(){
    clear();
    cards[0].style.display = 'block';
}());

function func(){
    if(radio[0].checked){
        clear();
        cards[0].style.display = 'block';
    }
    else if(radio[1].checked){
        clear();
        cards[1].style.display = 'block';
    }
    else if(radio[2].checked){
        clear();
        cards[2].style.display = 'block';
    }
    
}