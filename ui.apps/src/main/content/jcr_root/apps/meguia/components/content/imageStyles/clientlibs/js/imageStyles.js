$(document).ready(function () {
    console.log("imageStyles ready");
    $.fn.addClassImg = function(opts) {
        if (opts.clase === "sepia") {
            $("#imgS").addClass('sepia');
        }
        else if (opts.clase  === "byw"){
            $("#imgS").addClass('byw');
        }
    }
});

