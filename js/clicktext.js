// build time:Thu Feb 04 2021 10:58:07 GMT+0800 (CST)
var a_idx=0;$(document).ready(function(){$("body").click(function(e){var t=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var o=$("<span/>").text(t[a_idx]);a_idx=(a_idx+1)%t.length;var a=e.pageX,i=e.pageY;o.css({"z-index":9999999,top:i-20,left:a,position:"absolute","font-weight":"bold",color:"#ff6651"});$("body").append(o);o.animate({top:i-180,opacity:0},3e3,function(){o.remove()})});setTimeout("delay()",2e3)});function delay(){$(".buryit").removeAttr("onclick")}
//rebuild by neat 