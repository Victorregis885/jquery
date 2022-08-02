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


    //Funções para manipulação das imagens

    $('#btn-hide').click(function(){
        $('.image').fadeOut(2500);
        $('.menu').fadeToggle('slow');

    });
    
    
    $('#btn-show').click(function(){
        $('.image').fadeIn(2500);
        $('.menu').fadeToggle('slow');

    });



    //iNICANDO O MENU 

    $('.menu').hide();

    $('.nav-bar').click(function(){
        $('.menu').fadeToggle('slow');
    });
});