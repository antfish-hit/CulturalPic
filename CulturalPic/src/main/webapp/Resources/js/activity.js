/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加具体活动*/
        $("#add_activity").click
        (
            function()
            {
                var _rowNum = $(".table-activity tr").length;
                var _activityType = $("#activity_type").find("option:selected").text();
                var _activityNum = $("#activity_type").find("option:selected").val();
                var _activity = $("#activity").val();
                var _startDate = $("#start_date_activity").val();
                var _endDate = $("#end_date_activity").val();
                var _activityAddress = $("#activity_address").val();
                if(_activity.trim() != "" && _startDate.trim() != "" && _endDate.trim() != "" && _activityAddress.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 2%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 10%;'>" + _activityType + "</td>";
                    _content += "<td style='width: 24%;'>" + _activity + "</td>";
                    _content += "<td style='width: 16%;'>" + _startDate + "</td>";
                    _content += "<td style='width: 16%;'>" + _endDate + "</td>";
                    _content += "<td style='width: 16%;'>" + _activityAddress + "</td>";
                    _content += "<td style='text-align: center;width: 8%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-activity").css("display");
                    if(_display == "none")
                    {
                        $(".table-activity").css("display","block");
                    }
                    $(".tb-activity").append(_content);

                    add_a_click_activity("add",null);
                }

                var _data = "personId=" + personId + "&activityNum=" + _activityNum +
                    "&activity=" + _activity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                    "&activityAddress=" + _activityAddress;
                add_update_delete_activity("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体活动数据*/
        function update_activity()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#activity_type").find("option").each
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
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 3)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 4)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 5)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 6)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-floppy-o");
                        add_a_click_activity("update",item);
                    }
                }
            );
        }

        /*删除具体活动数据*/
        function delete_activity()
        {
            var _activityNum = "";
            var _activity = "";
            var _startDate = "";
            var _endDate = "";
            var _activityAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _activityNum = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _activity = $(item).text();
                    }
                    if(index == 3)
                    {
                        _startDate = $(item).text();
                    }
                    if(index == 4)
                    {
                        _endDate = $(item).text();
                    }
                    if(index == 5)
                    {
                        _activityAddress = $(item).text();
                    }
                }
            );

            var row_num = $(".table-activity tr").length;
            if(row_num == 2)
            {
                $(".table-activity").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-activity").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&activityNum=" + _activityNum +
                "&activity=" + _activity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&activityAddress=" + _activityAddress;
            add_update_delete_activity("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体政党数据"*/
        function save_activity()
        {
            var _activityNum = "";
            var _activity = "";
            var _startDate = "";
            var _endDate = "";
            var _activityAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _activityNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_activityNum);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _activity = _content;
                        $(item).text(_content);
                    }
                    if(index == 3)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _startDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 4)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _endDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 5)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _activityAddress = _content;
                        $(item).text(_content);
                    }
                    if(index == 6)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_activity("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&activityNum=" + _activityNum +
                "&activity=" + _activity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&activityAddress=" + _activityAddress;
            add_update_delete_activity("update", _data);
        }

        /*具体政党操作ajax管理集合*/
        function add_update_delete_activity(type, data)
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
                //             alert("学校增加成功");
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
                //             alert("学校修改成功");
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
                //             alert("学校删除成功");
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
        function add_a_click_activity(type,obj)
        {
            if(type == "add")
            {
                $(".table-activity").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_activity);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_activity);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_activity);
                $(obj).find("a:first").bind("click",save_activity);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_activity);
                $(obj).find("a:first").bind("click",update_activity);
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