/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加学校类别*/
        $("#add_schoolType").click
        (
            function()
            {
                var schoolType = $("#schoolType").val();

                var _newSchoolType = "<option value = '1'>" + schoolType + "</option>";
                $("#school_type").append(_newSchoolType);
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:"schoolType=" + schoolType,
                //         success:function(result)
                //         {
                //             var _newSchoolType = "<option value = '" + result + "'>" + schoolType + "</option>";
                //             $("#school_type").append(_newSchoolType);
                //         }
                //     }
                // );
                $("#eduCategory_school").find("option:first").attr("selected",true);
                $("#schoolType").val("");
                $("#school__type").modal('hide');
            }
        );

        /*增加具体学校*/
        $("#add_school").click
        (
            function()
            {
                var _rowNum = $(".table-school tr").length;
                var _eduCategory = $("#edu_category_school").find("option:selected").text();
                var _eduNum = $("#edu_category_school").find("option:selected").val();
                var _schoolType = $("#school_type").find("option:selected").text();
                var _schoolNum = $("#school_type").find("option:selected").val();
                var _school = $("#school").val();
                var _startDate = $("#start_date_school").val();
                var _endDate = $("#end_date_school").val();
                var _schoolAddress = $("#school_address").val();
                if(_school.trim() != "" && _startDate.trim() != "" && _endDate.trim() != "" && _schoolAddress.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 2%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 15%;'>" + _eduCategory + "</td>";
                    _content += "<td style='width: 15%;'>" + _schoolType + "</td>";
                    _content += "<td style='width: 15%;'>" + _school + "</td>";
                    _content += "<td style='width: 15%;'>" + _startDate + "</td>";
                    _content += "<td style='width: 15%;'>" + _endDate + "</td>";
                    _content += "<td style='width: 15%;'>" + _schoolAddress + "</td>";
                    _content += "<td style='text-align: center;width: 8%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-school").css("display");
                    if(_display == "none")
                    {
                        $(".table-school").css("display","block");
                    }
                    $(".tb-school").append(_content);

                    add_a_click_school("add",null);
                }

                var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&schoolNum=" + _schoolNum +
                            "&school=" + _school + "&startDate=" + _startDate + "&endDate=" + _endDate +
                            "&schoolAddress=" + _schoolAddress;
                add_update_delete_school("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体学校数据*/
        function update_school()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#edu_category_school").find("option").each
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
                        $("#school_type").find("option").each
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
                        add_a_click_school("update",item);
                    }
                }
            );
        }

        /*删除具体学校数据*/
        function delete_school()
        {
            var _eduNum = "";
            var _schoolNum = "";
            var _school = "";
            var _startDate = "";
            var _endDate = "";
            var _schoolAddress = "";
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
                        _schoolNum = $(item).data("id");
                    }
                    if(index == 3)
                    {
                        _school = $(item).text();
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
                        _schoolAddress = $(item).text();
                    }
                }
            );

            var row_num = $(".table-school tr").length;
            if(row_num == 2)
            {
                $(".table-school").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-school").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&schoolNum=" + _schoolNum +
                "&school=" + _school + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&schoolAddress=" + _schoolAddress;
            add_update_delete_school("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体学校数据"*/
        function save_school()
        {
            var _eduNum = "";
            var _schoolNum = "";
            var _school = "";
            var _startDate = "";
            var _endDate = "";
            var _schoolAddress = "";
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
                        _schoolNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_schoolNum);
                    }
                    if(index == 3)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _school = _content;
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
                        _schoolAddress = _content;
                        $(item).text(_content);
                    }
                    if(index == 7)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_school("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&eduNum=" + _eduNum + "&schoolNum=" + _schoolNum +
                "&school=" + _school + "&startDate=" + _startDate + "&endDate=" + _endDate +
                "&schoolAddress=" + _schoolAddress;
            add_update_delete_school("update", _data);
        }

        /*具体学校操作ajax管理集合*/
        function add_update_delete_school(type, data)
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
        function add_a_click_school(type,obj)
        {
            if(type == "add")
            {
                $(".table-school").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_school);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_school);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_school);
                $(obj).find("a:first").bind("click",save_school);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_school);
                $(obj).find("a:first").bind("click",update_school);
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