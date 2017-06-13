/*加载依赖的js模块*/
require.config
({
    path:
        {
            'jquery':'jquery',
            'bootstrap':'bootstrap.min',
            'util':'util'
        }
});

/*启用本身的js代码*/
require
    (
        ['jquery','bootstrap','util'], function($, _, util)
        {
            /*加载页面时画布加载验证码*/
            $("document").ready(function(){ util.create_code(); });

            /*为二维码添加点击事件*/
            $("#code_img").click( function(){ util.create_code(); });


            /*为输入框附加错误弹出框*/
            $("div>input").each
            (
                function (index,item)
                {
                    util.bind_tips(item);
                }
            );

        }
    );