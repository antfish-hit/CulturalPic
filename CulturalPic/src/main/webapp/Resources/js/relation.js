/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加关系类别*/
        $("#add_shipType").click
        (
            function()
            {
                var shipType = $("#shipType").val();

                var _newShipType = "<option value = '1'>" + shipType + "</option>";
                $("#ship_type").append(_newShipType);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:"shipType=" + shipType,
                //         success:function(result)
                //         {
                //             var _newShipType = "<option value = '" + result + "'>" + shipType + "</option>";
                //             $("#ship_type").append(_newShipType);
                //         }
                //     }
                // );
                $("#shipCategory").find("option:first").attr("selected",true);
                $("#shipType").val("");
                $("#ship__type").modal('hide');
            }
        );

        /*增加具体别名*/
        $("#add_ship").click
        (
            function()
            {
                var _name = $("#ship").val();
                var _rowNum = $(".table-ship tr").length;
                var _shipCategory = $("#ship_category").find("option:selected").text();
                var _categoryNum = $("#ship_category").find("option:selected").val();
                var _shipType = $("#ship_type").find("option:selected").text();
                var _typeNum = $("#ship_type").find("option:selected").val();
                if(_name.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 10%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 26%;'>" + _shipCategory + "</td>";
                    _content += "<td style='width: 26%;'>" + _shipType + "</td>";
                    _content += "<td style='width: 26%;'>" + _name + "</td>";
                    _content += "<td style='text-align: center;width: 10%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-ship").css("display");
                    if(_display == "none")
                    {
                        $(".table-ship").css("display","block");
                    }
                    $(".tb-ship").append(_content);

                    add_a_click_ship("add",null);
                }

                var _data = "personId=" + personId + "&categoryNum=" + _categoryNum +
                    "&typeNum=" + _typeNum + "&name=" + _name;
                add_update_delete_ship("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体名称数据*/
        function update_ship()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#ship_category").find("option").each
                        (
                            function(index,item)
                            {
                                var _name = $(item).text();
                                var _num = $(item).val();
                                if(_name == _content)
                                {
                                    _html += "<option selected value = '" + _num + "'>" + _name + "</option>";
                                }
                                else
                                {
                                    _html += "<option value = '" + _num + "'>" + _name + "</option>";
                                }
                            }
                        );
                        $(item).html("<select class='form-control'>" + _html + "</select>");
                    }
                    if(index == 2)
                    {
                        var _html = "";
                        $("#ship_type").find("option").each
                        (
                            function(index,item)
                            {
                                var _name = $(item).text();
                                var _num = $(item).val();
                                if(_name == _content)
                                {
                                    _html += "<option selected value = '" + _num + "'>" + _name + "</option>";
                                }
                                else
                                {
                                    _html += "<option value = '" + _num + "'>" + _name + "</option>";
                                }
                            }
                        );
                        $(item).html("<select class='form-control'>" + _html + "</select>");
                    }
                    if(index == 3)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 4)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-floppy-o");
                        add_a_click_ship("update",item);
                    }
                }
            );
        }

        /*删除具体名称数据*/
        function delete_ship()
        {
            var _categoryNum = "";
            var _typeNum = "";
            var _name = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _categoryNum = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _typeNum = $(item).data("id");
                    }
                    if(index == 3)
                    {
                        _name = $(item).text();
                    }
                }
            );

            var row_num = $(".table-ship tr").length;
            if(row_num == 2)
            {
                $(".table-ship").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-ship").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&categoryNum=" + _categoryNum +
                "&typeNum=" + _typeNum + "&name=" + _name;
            add_update_delete_ship("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体名称数据"*/
        function save_ship()
        {
            var _categoryNum = "";
            var _typeNum = "";
            var _name = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _categoryNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_categoryNum);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _typeNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_typeNum);
                    }
                    if(index == 3)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _name = _content;
                        $(item).text(_content);
                    }
                    if(index == 4)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_ship("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&categoryNum=" + _categoryNum +
                "&typeNum=" + _typeNum + "&name=" + _name;
            add_update_delete_ship("update", _data);
        }

        /*具体名称操作ajax管理集合*/
        function add_update_delete_ship(type, data)
        {
            if(type == "add")
            {
                alert("增加成功！-->data=" + data);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:data,
                //         success:function()
                //         {
                //             alert("关系增加成功");
                //         },
                //         error:function()
                //         {
                //             alert("访问系统异常，请刷新页面重试！");
                //         }
                //     }
                // );
            }
            if(type == "update")
            {
                alert("修改成功！-->data=" + data);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:data,
                //         success:function()
                //         {
                //             alert("关系修改成功");
                //         },
                //         error:function()
                //         {
                //             alert("访问系统异常，请刷新页面重试！");
                //         }
                //     }
                // );
            }
            if(type == "delete")
            {
                alert("删除成功！-->data=" + data);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:data,
                //         success:function()
                //         {
                //             alert("关系删除成功");
                //         },
                //         error:function()
                //         {
                //             alert("访问系统异常，请刷新页面重试！");
                //         }
                //     }
                // );
            }
        }

        /*为表格中a标签增加单击事件*/
        function add_a_click_ship(type,obj)
        {
            if(type == "add")
            {
                $(".table-ship").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_ship);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_ship);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_ship);
                $(obj).find("a:first").bind("click",save_ship);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_ship);
                $(obj).find("a:first").bind("click",update_ship);
            }
        }

        //修改iframe高度
        function change_iframeHeight()
        {
            var _height = $(".container").height();
            $("iframe",parent.document).height(_height+70);
        }
        /*jQuery新建function区-----end-----*/
    }
);
/*jQuery-----end-----*/