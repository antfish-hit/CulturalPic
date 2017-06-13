/*全局变量存储区-----start-----*/
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*增加地点类别*/
        // $("#add_address").click
        // (
        //     function()
        //     {
        //         var nameType = $("#address").val();
        //
        //         var _newNameType = "<option value = '1'>" + nameType + "</option>";
        //         $("#name_type").append(_newNameType);
        //         // $.ajax
        //         // (
        //         //     {
        //         //         type:"post",
        //         //         url:"",
        //         //         data:"nameType=" + nameType,
        //         //         success:function(result)
        //         //         {
        //         //             var _newNameType = "<option value = '" + result + "'>" + nameType + "</option>";
        //         //             $("#name_type").append(_newNameType);
        //         //         }
        //         //     }
        //         // );
        //         $("#nameType").val("");
        //         $("#name__type").modal('hide');
        //     }
        // );

        /*增加具体地点*/
        $("#add_address").click
        (
            function()
            {
                var _address = $("#address").val();
                var _rowNum = $(".table-addressCategory tr").length;
                var _addressCategory = $("#address_category").find("option:selected").text();
                var _num = $("#address_category").find("option:selected").val();
                if(_address.trim() != "")
                {
                    var _content = "";
                    _content += "<tr><td style='width: 15%;'>" + _rowNum + "</td>";
                    _content += "<td style='width: 35%;'>" + _addressCategory + "</td>";
                    _content += "<td style='width: 35%;'>" + _address + "</td>";
                    _content += "<td style='text-align: center;width: 15%;'><a>" +
                        "<i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
                        "<a><i class='fa fa-times' aria-hidden='true'></i></a></td>";
                    _content += "</tr>";

                    var _display = $(".table-addressCategory").css("display");
                    if(_display == "none")
                    {
                        $(".table-addressCategory").css("display","block");
                    }
                    $(".tb-addressCategory").append(_content);

                    add_a_click_addressCategory("add",null);
                }

                var _data = "personId=" + personId + "&num=" + _num + "&address=" + _address;
                add_update_delete_addressCategory("add", _data);
                change_iframeHeight();
            }
        );

        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        /*修改具体地点数据*/
        function update_addressCategory()
        {
            $(this).parent().parent().children("td").each
            (
                function(index,item)
                {
                    var _content = $(item).text();
                    if(index == 1)
                    {
                        var _html = "";
                        $("#address_category").find("option").each
                        (
                            function(index,item)
                            {
                                var _address = $(item).text();
                                var _num = $(item).val();
                                if(_address == _content)
                                {
                                    _html += "<option selected value = '" + _num + "'>" + _address + "</option>";
                                }
                                else
                                {
                                    _html += "<option value = '" + _num + "'>" + _address + "</option>";
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
                        add_a_click_addressCategory("update",item);
                    }
                }
            );
        }

        /*删除具体地点数据*/
        function delete_addressCategory()
        {
            var _num = "";
            var _address = "";
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
                        _address = $(item).text();
                    }
                }
            );

            var row_num = $(".table-addressCategory tr").length;
            if(row_num == 2)
            {
                $(".table-addressCategory").css("display","none");
            }
            $(this).parent().parent().remove();

            $(".table-addressCategory").find("tr").each
            (
                function(index,item)
                {
                    if(index != 0)
                    {
                        $(item).find("td:first").text(index);
                    }
                }
            );

            var _data = "personId=" + personId + "&num=" + _num + "&address=" + _address;
            add_update_delete_addressCategory("delete", _data);
            change_iframeHeight();
        }

        /*"保存具体地点数据"*/
        function save_addressCategory()
        {
            var _num = "";
            var _address = "";
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
                        _address = _content;
                        $(item).text(_content);
                    }
                    if(index == 3)
                    {
                        $(item).find("a:first").find("i").attr("class","fa fa-pencil");
                        add_a_click_addressCategory("save",item);
                    }
                }
            );

            var _data = "personId=" + personId + "&num=" + _num + "&address=" + _address;
            add_update_delete_addressCategory("update", _data);
        }

        /*具体地点操作ajax管理集合*/
        function add_update_delete_addressCategory(type, data)
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
                //             alert("地点增加成功");
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
                //             alert("地点修改成功");
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
                //             alert("地点删除成功");
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
        function add_a_click_addressCategory(type,obj)
        {
            if(type == "add")
            {
                $(".table-addressCategory").find("tr:last").find("td:last").find("a").each
                (
                    function(index,item)
                    {
                        if(index == 0)
                        {
                            $(item).bind("click",update_addressCategory);
                        }
                        if(index == 1)
                        {
                            $(item).bind("click",delete_addressCategory);
                        }
                    }
                );
            }
            if(type == "update")
            {
                $(obj).find("a:first").unbind("click",update_addressCategory);
                $(obj).find("a:first").bind("click",save_addressCategory);
            }
            if(type == "save")
            {
                $(obj).find("a:first").unbind("click",save_addressCategory);
                $(obj).find("a:first").bind("click",update_addressCategory);
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