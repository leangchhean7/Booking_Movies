
function getval(me) {
//    $("#info").css("display", "inline");
    $("#Price").val("5$");
}
$("#dialog").dialog({
    autoOpen: false,
    show: {
        effect: "blind",
        duration: 1000
    },
    hide: {
        effect: "explode",
        duration: 1000
    }
});

function cal(sender) {
    var total = sender.value * 5;

    $("#total").val(total);


}

$("#btnSubmit").click(function () {
    alert("Successful Book");
});
$(document).ready(function () {
    var select = '';
    for (i = 1; i <= 100; i++) {
        select += '<option val=' + i + '>' + i + '</option>';
    }
    $('#selectSeat').html(select);


    $("#trailerButton").click(function () {
        $("#videoTrailer").css("display", "inline");

    });

});

function getValue(sel) {
//    alert(sel.value);
    $("#id").css("display", "inline");
}

$('#select-choice-0').blur(function ()
{
    if ($(this).val().length === 0) {
        //$(this).parents('p').addClass('warning');
        alert("empty");
    }
});



