(function($) {

    $('.ql-editor strong').remove();

// Ініціалізація слайдера
$(document).ready(function() {
    $('.team_carousel').flickity({
        // cellAlign: 'left',
        initialIndex: 0,
        groupCells: true,
        contain: true,
        // groupCells: 3,
        autoPlay: 10000,
        // draggable: false,
        wrapAround: true,
        prevNextButtons: false
   });
});

// Робим слайдер одиничним при малому розширенні
$(window).on("load resize", function(){
    var windowWidth = $(window).width();
    if(innerWidth < 992){
        $(".team_carousel").flickity({
            groupCells: false
        });
    } else{
        $(".team_carousel").flickity({
            groupCells: true
        });
    };
});

// анімація переходу по якорям
$(window).ready(function(){
    $(".for_ancor, main").on("click",".ancor", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-90}, 1000);
    });
});

// кнопка "вверх"
$(document).scroll(function(){
    if($(window).scrollTop()>=400){
        $('#up').fadeIn(250);
    }
    else{
        $('#up').fadeOut(250);
    }
    var h = $(window).height();
    $(window).scroll(function(){
        if (($(this).scrollTop()+h) >= $(".footer").offset().top) {
            $("#up").css({"position": "absolute"});
        } 
        if (($(this).scrollTop()+h) < $(".footer").offset().top) {
            $("#up").css({"position": "fixed"});
        }
    });
});

// Калькулятор
$( function() {
    $(document).ready(function() {

      var miN = 1,
      miNv = 1,
      maX = 7,
      valuE = 2,
      k = 0,
      result = 2,
      margin = 0,
      perc_w = 0;

      $('.calc_slider_value_number').remove();

            // вивід значень тарифу в блоках
            for(i=miN-1;i<maX;i++)
            {
              if(myArray[i] != null){
                $('.test_calc_slider_value').append('<span class="calc_slider_value_number">' + myArray[i] + '</span>');
                k++;
                } 
            }
        proc= 100/(k);
        $('.calc_slider_value_number').css({"width": + proc +"%"});
        $(".button_text_ind").hide();
        $(".doc_numb").text(myArray[0]);
        $(".doc_numb").text("Спробувати демо безкоштовно");
        $(".button_text").hide();

        var arr = myArray[1],
        arrLength = myArray.lenth;


        // обрахунок залежно від положення повзунка
        $( "#slider-range-min" ).slider({
            range: "min",
            value: miNv,
            min: miN,
            max: k,
            slide: function( event, ui ) {

                for(q=0;q<ui.value;q++)
                {
                    $(".button_text").show();
                    $(".doc_numb").text(myArray[q]);
                }
                if(myArray[q] == arrLength){
                    $(".button_text_ind").show();
                    $(".button_text").hide();
                    $(".doc_numb").hide();
                }
                else {
                    $(".button_text_ind").hide();
                    $(".button_text").show();
                    $(".doc_numb").show();
                }
                if(myArray[q] == arr){
                    $(".doc_numb").text("Спробувати демо безкоштовно");
                    $(".button_text").hide();
                }
                for(j=0;j<ui.value;j++)
                {
                    result = papPrice[j] - ePrice[j];
                }
                $( "#p_price" ).val(papPrice[j-1]);
                $( "#el_price" ).val(ePrice[j-1]);
                $( "#econ" ).val( result );

                $(".calc_slider_value_number:nth-child(2)").on("click", function() {
                    ui.value = 2;
                });
            }
        }); 

        // Підгонка калькулятора залежно від кількості значень
        $(window).on("load resize", function() {
            if(k<4){
                perc_w = 0.685;
                margin = 15;
                $(".ui-slider-horizontal").css({"margin-left": + margin +"%"});
                $("#slider-range-min").width($(".test_calc_slider_value").width()*perc_w);
            }else if(k<5){
                perc_w = 0.76;
                margin = 11.5;
                $(".ui-slider-horizontal").css({"margin-left": + margin +"%"});
                $("#slider-range-min").width($(".test_calc_slider_value").width()*perc_w);
            }else if(k<6){
                perc_w = 0.82;
                margin = 9.5;
                $(".ui-slider-horizontal").css({"margin-left": + margin +"%"});
                $("#slider-range-min").width($(".test_calc_slider_value").width()*perc_w);
            }else if(k<7){
                perc_w = 0.85;
                margin = 7.5;
                $(".ui-slider-horizontal").css({"margin-left": + margin +"%"});
                $("#slider-range-min").width($(".test_calc_slider_value").width()*perc_w);
            }else if(k<8){
                perc_w = 0.87;
                margin = 6.5;
                $(".ui-slider-horizontal").css({"margin-left": + margin +"%"});
                $("#slider-range-min").width($(".test_calc_slider_value").width()*perc_w);
            }
        });
    // вивід значень калькулятора
        $( "#p_price" ).val(papPrice[0]);
        $( "#el_price" ).val(ePrice[0]);
        $( "#econ" ).val(papPrice[0] - ePrice[0] );
    });
});

})(jQuery)