$(document).ready(function(){

    $('#bto-1-5').click(function(){


        $('p').removeClass('font-2-5')
        $('p').removeClass('font-2-0')
        $('p').addClass('font-1-5');

    });

    $('#bto-2-0').click(function(){
        $('p').removeClass('font-2-5')
        $('p').removeClass('font-1-5')
        $('p').addClass('font-2-0');
    });

    $('#bto-2-5').click(function(){
        $('p').removeClass('font-1-5')
        $('p').removeClass('font-2-0')
        $('p').addClass('font-2-5');
    });

});