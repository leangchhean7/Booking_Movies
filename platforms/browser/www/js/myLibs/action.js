$('#select-choice-0').on('change', function() {
  alert( $("#select-choice-0").val() );
  alert("here");
  // or $(this).val()
});

function getval(me){
    $("#info").css("display", "inline");
    
    
}
function doAction(){
    alert("Successful Book");
    
    
}


$(document).ready(function() {
    $("#btnSubmit").click(function(){
        alert("button");
    }); 
});

function getValue(sel){
//    alert(sel.value);
    $("#id").css("display", "inline");
}

$('#select-choice-0').blur(function()
{
    if( $(this).val().length === 0 ) {
        //$(this).parents('p').addClass('warning');
        alert("empty");
    }
});




$(document).ready(function(){
  
    
    
})