$(document).ready(function () {
        console.log("form ready");
        $("#divTelephone").show();
        $.fn.showPhone = function(opts) {
            if (opts.telephone ) {
                $("#divTelephone").hide();
            }
        }
    });

