$(document).ready(function () {
        console.log("ready");
        $("#divTelephone").show();
        $.fn.showPhone = function(opts) {

            if (opts.telephone ) {
                $("#divTelephone").hide();
            }
        }
    });

