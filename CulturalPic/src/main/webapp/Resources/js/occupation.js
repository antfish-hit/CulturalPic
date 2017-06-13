/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加机构名称*/
        $("#add_instituteName").click
        (
            function()
            {
                var instituteName = $("#instituteName").val();

                var _newInstituteName = "<option value = '1'>" + instituteName + "</option>";
                $("#institute").append(_newInstituteName);
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
                $("#statusCategory_institute").find("option:first").attr("selected",true);
                $("#instituteName").val("");
                $("#new_institute").modal('hide');
            }
        );

        /*增加职业名称*/
        $("#add_occupationName").click
        (
            function()
            {
                var occupationName = $("#occupationName").val();

                var _newOccupationName = "<option value = '1'>" + occupationName + "</option>";
                $("#occupation").append(_newOccupationName);
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
                $("#statusCategory_occupation").find("option:first").attr("selected",true);
                $("#instituteName_occupation").find("option:first").attr("selected",true);
                $("#occupationName").val("");
                $("#new_occupation").modal('hide');
            }
        );

        /*增加具体职业*/
        $("#add_occupation_name").click
        (
            function()
            {
                var _rowNum = $(".table-occupation tr").length;
                var _statusCategory = $("#status_category").find("option:selected").text();
                var _statusNum = $("#status_category").find("option:selected").val();
                var _institute = $("#institute").find("option:selected").text();
                var _instituteNum = $("#institute").find("option:selected").val();
                var _occupation = $("#occupation").find("option:selected").text();
                var _occupationNum = $("#occupation").find("option:selected").val();
                var _occupationName = $("#occupation_name").val();
                var _startDate = $("#start_date_occupation").val();
                var _endDate = $("#end_date_occupation").val();
                var _occupationAddress = $("#occupation_address").val();
                if(_occupationName.trim() != "" && _startDate.trim() != "" && _endDate.trim() != "" && _occupationAddress.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 2%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 13%;'>" + _statusCategory + "</td>";
                    _content += "<td style='width: 13%;'>" + _institute + "</td>";
                    _content += "<td style='width: 13%;'>" + _occupation + "</td>";
                    _content += "<td style='width: 13%;'>" + _occupationName + "</td>";
                    _content += "<td style='width: 13%;'>" + _startDate + "</td>";
                    _content += "<td style='width: 13%;'>" + _endDate + "</td>";
                    _content += "<td style='width: 13%;'>" + _occupationAddress + "</td>";
                    _content += "<td style='text-align: center;width: 7%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-occupation").css("display");
                    if(_display == "none")
                    {
                        $(".table-occupation").css("display","block");
                    }
                    $(".tb-occupation").append(_content);

                    add_a_click_occupation("add",null);
                }

                var _data = "personId=" + personId + "&statusNum=" + _statusNum + "&instituteNum=" + _instituteNum +
                    "&occupationNum=" + _occupationNum + "&occupationName=" + _occupationName + "&startDate=" + _startDate +
                    "&endDate=" + _endDate + "&occupationAddress=" + _occupationAddress;
                add_update_delete_occupation("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体职业数据*/
        function update_occupation()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#status_category").find("option").each
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
                        $("#institute").find("option").each
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
                        var _html = "";
                        $("#occupation").find("option").each
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
                        $(item).html("<input type='text' class='form-control' value = '" + _content + "'/>");
                    }
                    if(index == 8)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-floppy-o");
                        add_a_click_occupation("update",item);
                    }
                }
            );
        }

        /*删除具体职业数据*/
        function delete_occupation()
        {
            var _statusNum = "";
            var _instituteNum = "";
            var _occupationNum = "";
            var _occupationName = "";
            var _startDate = "";
            var _endDate = "";
            var _occupationAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    if(index == 1)
                    {
                        _statusNum = $(item).data("id");
                    }
                    if(index == 2)
                    {
                        _instituteNum = $(item).data("id");
                    }
                    if(index == 3)
                    {
                        _occupationNum = $(item).text();
                    }
                    if(index == 4)
                    {
                        _occupationName = $(item).text();
                    }
                    if(index == 5)
                    {
                        _startDate = $(item).text();
                    }
                    if(index == 6)
                    {
                        _endDate = $(item).text();
                    }
                    if(index == 7)
                    {
                        _occupationAddress = $(item).text();
                    }
                }
            );

            var row_num = $(".table-occupation tr").length;
            if(row_num == 2)
            {
                $(".table-occupation").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-occupation").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&statusNum=" + _statusNum + "&instituteNum=" + _instituteNum +
                "&occupationNum=" + _occupationNum + "&occupationName=" + _occupationName + "&startDate=" + _startDate +
                "&endDate=" + _endDate + "&occupationAddress=" + _occupationAddress;
            add_update_delete_occupation("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体职业数据"*/
        function save_occupation()
        {
            var _statusNum = "";
            var _instituteNum = "";
            var _occupationNum = "";
            var _occupationName = "";
            var _startDate = "";
            var _endDate = "";
            var _occupationAddress = "";
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = "";
                    if(index == 1)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _statusNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_statusNum);
                    }
                    if(index == 2)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _instituteNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_instituteNum);
                    }
                    if(index == 3)
                    {
                        _content = $(item).find("select").find("option:selected").text();
                        _occupationNum = $(item).find("select").find("option:selected").val();
                        $(item).text(_content);
                        $(item).data("id",_occupationNum);
                    }
                    if(index == 4)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _occupationName = _content;
                        $(item).text(_content);
                    }
                    if(index == 5)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _startDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 6)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _endDate = _content;
                        $(item).text(_content);
                    }
                    if(index == 7)
                    {
                        _content = $(item).find("input[type='text']").val();
                        _occupationAddress = _content;
                        $(item).text(_content);
                    }
                    if(index == 8)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_occupation("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&statusNum=" + _statusNum + "&instituteNum=" + _instituteNum +
                "&occupationNum=" + _occupationNum + "&occupationName=" + _occupationName + "&startDate=" + _startDate +
                "&endDate=" + _endDate + "&occupationAddress=" + _occupationAddress;
            add_update_delete_occupation("update", _data);
        }

        /*具体职业操作ajax管理集合*/
        function add_update_delete_occupation(type, data)
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
        function add_a_click_occupation(type,obj)
        {
            if(type == "add")
            {
                $(".table-occupation").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_occupation);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_occupation);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_occupation);
                $(obj).find("a:first").bind("click",save_occupation);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_occupation);
                $(obj).find("a:first").bind("click",update_occupation);
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