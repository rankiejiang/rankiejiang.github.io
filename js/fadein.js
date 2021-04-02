// $("div[class]").on("click", function() {
//     console.log($(this).text());  // 输出点击的 DIV 中的文本
// });

var num = 1;

$(function(){
    var time = setInterval(function(){
        if (num == 101){
            clearInterval(time)
        };
        $("#fade_group").css("opacity",num/100) ;
        num += 1;
        // console.log($("#fade_group").css("opacity"));
    },20);
    // $("#fade_group").hide();
    // $("#fade_group").fadeIn( 2000)
});

// var ele = document.getElementById("fade_group");
// console.log(ele.style.opacity)
// var num = 1;



