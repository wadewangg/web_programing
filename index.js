$(document).ready(function(){
    $("#img1").mouseover(function(){
        $("#img1").fadeOut();
         $("#img1").fadeIn();
    });
	
});
$(document).ready(function(){
    $(".col-lg-12").click(function(){
        var div = $(".col-lg-12");  
        
        div.animate({fontSize: '1.5em'}, "slow");
    });
});
$(document).ready(function(){
	$("#hh").hide();
    $("button").click(function(){
        $("#img1").hide("slow", function(){
            
        });
		setTimeout("showpic()",2000);
		});
	
});
function showpic()
{

$("#img1").show("slow", function(){
            
        });	
		setTimeout("showtext()",500);
}
function showtext()
{
$("#hh").show("slow", function(){
            
        });
}

