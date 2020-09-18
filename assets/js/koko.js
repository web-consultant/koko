$(function() {
    
$('[data-toggle="tooltip"]').tooltip()



$('.koko-key-points li a').click(function() {

    var kokoKeyPoints = $("#koko-carousel, #koko-vert-content");
    var cnt = $(this).attr('data-content');
    $( "#koko-carousel").removeClass( "col-md-10" ).addClass( "col-md-7" );
    $( "#koko-vert-content p").html(cnt);
    kokoKeyPoints.fadeIn("slow");

});

$('#koko-key-points-close').click(function() {
    var kokoKeyPoints = $("#koko-carousel, #koko-vert-content");
    kokoKeyPoints.fadeOut( "slow", function() {
        $("#koko-vert-content").hide();
        $( "#koko-carousel").removeClass( "col-md-7" ).addClass( "col-md-10" );
        $("#koko-carousel").fadeIn();
      });
});
    
// $('#koko-step1').mouseover(function(){
//    // alert('ok');
// })


});

AOS.init({
    duration: 700,
    easing: "ease-out-quad",
    once: !0,
    startEvent: "load"
});
