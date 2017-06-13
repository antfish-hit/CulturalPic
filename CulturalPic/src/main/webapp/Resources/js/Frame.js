$(
    function()
    {
        $("document").ready
        (
            function()
            {
                $(".copyright").find("footer").html("&copy;" + new Date().getFullYear() + " - 民国人物资源库");
            }
        );

        $("li").mouseover
        (
            function() { $(this).addClass("active"); }
        );

        $("li").mouseleave
        (
            function() { $(this).removeClass("active"); }
        );

        $("iframe").load
        (
            function()
            {
                var _height = $(this).contents().find(".container").height();
                $(this).height(_height+70);
                $("iframe").contents().find(".container").css("margin-top","5%");
            }
        );

        $("li").click
        (
            function()
            {
                var address = $(this).children("a").attr("id");
                $("iframe").attr("src",address);
            }
        );
    }
);