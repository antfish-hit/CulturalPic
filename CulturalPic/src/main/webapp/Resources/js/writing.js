/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加著作类别*/
        $("#add_writingType").click
        (
            function()
            {
                var writingType = $("#writingType").val();

                var _newWritingType = "<option value = '1'>" + writingType + "</option>";
                $("#writing_type").append(_newWritingType);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:"nameType=" + nameType,
                //         success:function(result)
                //         {
                //             var _newNameType = "<option value = '" + result + "'>" + nameType + "</option>";
                //             $("#name_type").append(_newNameType);
                //         }
                //     }
                // );
                $("#writingType").val("");
                $("#writing__type").modal('hide');
            }
        );

        /*增加具体著作*/
        $("#add_writing").click
        (
            function()
            {
                var _writing = $("#writing").val();
                var _rowNum = $(".table-writing tr").length;
                var _writingType = $("#writing_type").find("option:selected").text();
                var _num = $("#writing_type").find("option:selected").val();
                if(_writing.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 15%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 35%;'>" + _writingType + "</td>";
                    _content += "<td style='width: 35%;'>" + _writing + "</td>";
                    _content += "<td style='text-align: center;width: 15%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-writing").css("display");
                    if(_display == "none")
                    {
                        $(".table-writing").css("display","block");
                    }
                    $(".tb-writing").append(_content);

                    add_a_click_writing("add",null);
                }

                var _data = "personId=" + personId + "&num=" + _num + "&writing=" + _writing;
                add_update_delete_writing("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体著作数据*/
        function update_writing()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#writing_type").find("option").each
                        (
                            function(index,item)
                            {
                                var _writing = $(item).text();
                                var _num = $(item).val();
                                if(_writing == _content)
                                {
                                    _html += "<option selected value = '" + _num + "'>" + _writing + "</option>";
                                }
                                else
                                {
                                    _html += "<option value = '" + _num + "'>" + _writing + "</option>";
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
                        $(item).find("a:first").find("i").attr("class","fa fa-floppy-o");
                        add_a_click_writing("update",item);
                    }
                }
            );
        }

        /*删除具体著作数据*/
        function delete_writing()
        {
            var _num = "";
            var _writing = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _num = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _writing = $(item).text();
                    }
                }
            );

            var row_num = $(".table-writing tr").length;
            if(row_num == 2)
            {
                $(".table-writing").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-writing").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&num=" + _num + "&writing=" + _writing;
            add_update_delete_writing("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体著作数据"*/
        function save_writing()
        {
            var _num = "";
            var _writing = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _num = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_num);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _writing = _content;
                        $(item).text(_content);
                    }
                    if(index == 3)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_writing("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&num=" + _num + "&writing=" + _writing;
            add_update_delete_writing("update", _data);
        }

        /*具体著作操作ajax管理集合*/
        function add_update_delete_writing(type, data)
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
                //             alert("名称增加成功");
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
                //             alert("名称修改成功");
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
                //             alert("名称删除成功");
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
        function add_a_click_writing(type,obj)
        {
            if(type == "add")
            {
                $(".table-writing").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_writing);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_writing);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_writing);
                $(obj).find("a:first").bind("click",save_writing);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_writing);
                $(obj).find("a:first").bind("click",update_writing);
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