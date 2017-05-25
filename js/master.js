$(function() {
    var scale = 1 / devicePixelRatio;
    document.querySelector('meta[name="viewport"]').setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    $(window).resize(function () {
        var deviceWidth = document.documentElement.clientWidth > 1300 ? 1300 : document.documentElement.clientWidth;
        document.documentElement.style.fontSize = (deviceWidth / 6.4) + 'px';
    }).resize();

    //支付 --单价计算
    $("#reduce").click(function () {
        var Number = $("#Number").text();
        Number--;
        if (Number <= 0) {
            Number = 1;
        }
        $("#Number").text(Number);
        Price()
    });
    $("#plus").click(function () {
        var Number = $("#Number").text();
        Number++;
        $("#Number").text(Number);
        Price()
    });
    function Price() {
        var Unit_Price = $("#Unit_Price").text();
        var Number = $("#Number").text();
        var Price = Unit_Price * Number;
        $("#Total_price").text(Price);
    }

    var unit = $("#unit").text(),
        number = $("#number").text(),
        freight = Number($("#freight").text()),
        money = unit * number,
        Total_money = unit * number + freight;
    $("#money").text(money);
    $("#Total_money").text(Total_money);

    //用户我的页面
    $("#user_head").click(function(){
        $("#user_Telephone").show();
    });
    $("#user_Telephone .keep").click(function(){
        $("#user_Telephone").hide();
        if($("#user_Telephone input").val()!=""){
            var ph=/^1[3|5|7|8|][0-9]{9}$/
            if(!(ph.test($("#userphone").val()))){
                $(".spa").text("请输入正确手机号");
                return false;
            }else if(ph){
                var user_t = $("#user_Telephone input").val();
                $("#ago").text(user_t);
                return true;
            }
        }
    });
    $("#Telephone input").blur(function(){
        if($(this).is("#userphone")){            //手机号判断
            var ph=/^1[3|5|7|8|][0-9]{9}$/
            if($("#userphone").val()!=""){
                if(!(ph.test($("#userphone").val()))){
                    $(".spa").text("请输入正确手机号");
                    return false;
                }else if(ph){
                    $(".spa").text("");
                    return true;
                }
            }else{
                $(".spa").text("");
            }
        }
    });

    //用户5个状态
    $(".state-nav li").click(function(){
        $(".state-nav li").removeClass("active");
        $(this).addClass("active");
        var tab_dataId = $(this).attr("data-rel");
        $(".detail_content .tab-content").hide();
        $("#" + tab_dataId).show();
    });

});
