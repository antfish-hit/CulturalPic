/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加学历类别*/
        $("#add_diplomaType").click
        (
            function()
            {
                var diplomaType = $("#diplomaType").val();

                var _newDiplomaType = "<option value = '1'>" + diplomaType + "</option>";
                $("#diploma_type").append(_newDiplomaType);
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
                $("#statusCategory").find("option:first").attr("selected",true);
                $("#diplomaType").val("");
                $("#diploma__type").modal('hide');
            }
        );

        /*增加具体学历*/
        $("#add_diploma").click
        (
            function()
            {
                var _rowNum = $(".table-diploma tr").length;
                var _eduCategory = $("#edu_category_diploma").find("option:selected").text();
                var _eduNum = $("#edu_category_diploma").find("option:selected").val();
                var _diplomaType = $("#diploma_type").find("option:selected").text();
                var _diplomaNum = $("#diploma_type").find("option:selected").val();
                var _diploma = $("#diploma").val();
                var _startDate = $("#start_date_diploma").val();
                var _endDate = $("#end_date_diploma").val();
                var _diplomaAddress = $("#diploma_address").val();
                if(_diploma.trim() != "" && _startDate.trim() != "" && _endDate.trim() != "" && _diplomaAddress.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 2%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 15%;'>" + _eduCategory + "</td>";
                    _content += "<td style='width: 15%;'>" + _diplomaType + "</td>";
                    _content += "<td style='width: 15%;'>" + _diploma + "</td>";
                    _content += "<td style='width: 15%;'>" + _startDate + "</td>";
                    _content += "<td style='width: 15%;'>" + _endDate + "</td>";
                    _content += "<td style='width: 15%;'>" + _diplomaAddress + "</td>";
                    _content += "<td style='text-align: center;width: 8%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-diploma").css("display");
                    if(_display == "none")
                    {
                        $(".table-diploma").css("display","block");
                    }
                    $(".tb-diploma").append(_content);

                    add_a_click_diploma("add",null);
                }

                var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&diplomaNum=" + _diplomaNum +
                    "&diploma=" + _diploma + "&startDate=" + _startDate + "&endDate=" + _endDate +
                    "&diplomaAddress=" + _diplomaAddress;
                add_update_delete_diploma("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体学历数据*/
        function update_diploma()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#edu_category_diploma").find("option").each
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
                        $("#diploma_type").find("option").each
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
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 5)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 6)
                    {
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 7)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-floppy-o");
                        add_a_click_diploma("update",item);
                    }
                }
            );
        }

        /*删除具体学历数据*/
        function delete_diploma()
        {
            var _eduNum = "";
            var _diplomaNum = "";
            var _diploma = "";
            var _startDate = "";
            var _endDate = "";
            var _diplomaAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _eduNum = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _diplomaNum = $(item).data("id");
                    }
                    if(index == 3)
                    {
                        _diploma = $(item).text();
                    }
                    if(index == 4)
                    {
                        _startDate = $(item).text();
                    }
                    if(index == 5)
                    {
                        _endDate = $(item).text();
                    }
                    if(index == 6)
                    {
                        _diplomaAddress = $(item).text();
                    }
                }
            );

            var row_num = $(".table-diploma tr").length;
            if(row_num == 2)
            {
                $(".table-diploma").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-diploma").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&diplomaNum=" + _diplomaNum +
                "&diploma=" + _diploma + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&diplomaAddress=" + _diplomaAddress;
            add_update_delete_diploma("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体学历数据"*/
        function save_diploma()
        {
            var _eduNum = "";
            var _diplomaNum = "";
            var _diploma = "";
            var _startDate = "";
            var _endDate = "";
            var _diplomaAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _eduNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_eduNum);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _diplomaNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_diplomaNum);
                    }
                    if(index == 3)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _diploma = _content;
                        $(item).text(_content);
                    }
                    if(index == 4)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _startDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 5)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _endDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 6)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _diplomaAddress = _content;
                        $(item).text(_content);
                    }
                    if(index == 7)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_diploma("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&diplomaNum=" + _diplomaNum +
                "&diploma=" + _diploma + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&diplomaAddress=" + _diplomaAddress;
            add_update_delete_diploma("update", _data);
        }

        /*具体学历操作ajax管理集合*/
        function add_update_delete_diploma(type, data)
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
        function add_a_click_diploma(type,obj)
        {
            if(type == "add")
            {
                $(".table-diploma").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_diploma);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_diploma);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_diploma);
                $(obj).find("a:first").bind("click",save_diploma);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_diploma);
                $(obj).find("a:first").bind("click",update_diploma);
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