$(document).ready(function(){
   console.log("faq ready");
   $(".response").hide();
   $(".question").click(showResponse);
});

function showResponse(){
    $(this).toggleClass('active').next('.response').slideToggle();
    return false;
}

function showResponse2() {
    $(".response").show();
}

