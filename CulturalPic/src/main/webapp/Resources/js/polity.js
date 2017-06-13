/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加政党类别*/
        $("#add_polityType").click
        (
            function()
            {
                var polityType = $("#polityType").val();

                var _newPolityType = "<option value = '1'>" + polityType + "</option>";
                $("#polity_type").append(_newPolityType);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:"diplomaType=" + diplomaType,
                //         success:function(result)
                //         {
                //             var _newDiplomaType = "<option value = '" + result + "'>" + diplomaType + "</option>";
                //             $("#diploma_type").append(_newDiplomaType);
                //         }
                //     }
                // );
                $("#polityType").val("");
                $("#polity__type").modal('hide');
            }
        );

        /*增加具体政党*/
        $("#add_polity").click
        (
            function()
            {
                var _rowNum = $(".table-polity tr").length;
                var _polityType = $("#polity_type").find("option:selected").text();
                var _polityNum = $("#polity_type").find("option:selected").val();
                var _polity = $("#polity").val();
                var _startDate = $("#start_date_polity").val();
                var _endDate = $("#end_date_polity").val();
                var _polityAddress = $("#polity_address").val();
                if(_polity.trim() != "" && _startDate.trim() != "" && _endDate.trim() != "" && _polityAddress.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 2%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 16%;'>" + _polityType + "</td>";
                    _content += "<td style='width: 16%;'>" + _polity + "</td>";
                    _content += "<td style='width: 16%;'>" + _startDate + "</td>";
                    _content += "<td style='width: 16%;'>" + _endDate + "</td>";
                    _content += "<td style='width: 16%;'>" + _polityAddress + "</td>";
                    _content += "<td style='text-align: center;width: 8%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-polity").css("display");
                    if(_display == "none")
                    {
                        $(".table-polity").css("display","block");
                    }
                    $(".tb-polity").append(_content);

                    add_a_click_polity("add",null);
                }

                var _data = "personId=" + personId + "&polityNum=" + _polityNum +
                    "&polity=" + _polity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                    "&polityAddress=" + _polityAddress;
                add_update_delete_polity("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体政党数据*/
        function update_polity()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#polity_type").find("option").each
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
                        add_a_click_polity("update",item);
                    }
                }
            );
        }

        /*删除具体政党数据*/
        function delete_polity()
        {
            var _polityNum = "";
            var _polity = "";
            var _startDate = "";
            var _endDate = "";
            var _polityAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _polityNum = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _polity = $(item).text();
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
                        _polityAddress = $(item).text();
                    }
                }
            );

            var row_num = $(".table-polity tr").length;
            if(row_num == 2)
            {
                $(".table-polity").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-polity").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&polityNum=" + _polityNum +
                "&polity=" + _polity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&polityAddress=" + _polityAddress;
            add_update_delete_polity("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体政党数据"*/
        function save_polity()
        {
            var _polityNum = "";
            var _polity = "";
            var _startDate = "";
            var _endDate = "";
            var _polityAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _polityNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_polityNum);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _polity = _content;
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
                        _polityAddress = _content;
                        $(item).text(_content);
                    }
                    if(index == 6)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_polity("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&polityNum=" + _polityNum +
                "&polity=" + _polity + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&polityAddress=" + _polityAddress;
            add_update_delete_polity("update", _data);
        }

        /*具体政党操作ajax管理集合*/
        function add_update_delete_polity(type, data)
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
        function add_a_click_polity(type,obj)
        {
            if(type == "add")
            {
                $(".table-polity").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_polity);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_polity);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_polity);
                $(obj).find("a:first").bind("click",save_polity);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_polity);
                $(obj).find("a:first").bind("click",update_polity);
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