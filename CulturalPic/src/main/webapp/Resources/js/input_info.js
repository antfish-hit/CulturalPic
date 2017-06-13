/*全局变量存储区-----start-----*/
/*人物ID*/
var personId;
/*拼音正则表达式*/
var pinyin_rep = /^[A-Z][a-z]*$/;
/*全局变量存储区-----end-----*/

/*jQuery-----start-----*/
$(
    function()
    {
        /*jQuery事件区-----start-----*/
        /*提交人物基本信息*/
        $("#base_submit").click
        (
            function()
            {
                //存储人物基本信息
                // var formData = new formData();
                // var full_name = $("#full_name").val();
                // var first_name = $("#first_name").val();
                // var first_pinyin = $("#first_pinyin").val();
                // var second_name = $("#second_name").val();
                // var second_pinyin = $("#second_pinyin").val();
                // var sex = $("#sex").val();
                // var birth_date = $("#birth_date").val();
                // var birth_minguo = $("#birth_minguo").val();
                // var death_date = $("#death_date").val();
                // var death_minguo = $("#death_minguo").val();
                // var nation = $("#nation").val();
                // formData.add("full_name",full_name);
                // formData.add("first_name",first_name);
                // formData.add("first_pinyin",first_pinyin);
                // formData.add("second_name",second_name);
                // formData.add("second_pinyin",second_pinyin);
                // formData.add("sex",sex);
                // formData.add("birth_date",birth_date);
                // formData.add("birth_minguo",birth_minguo);
                // formData.add("death_date",death_date);
                // formData.add("death_minguo",death_minguo);
                // formData.add("nation",nation);
                //
                // $.ajax
                // (
                //     {
                //         type:"post",
                //         url:"",
                //         data:formData,
                //         processData:false,
                //         contentType:false,
                //         success:function(result)
                //         {
                //             if(result != null && result != "")
                //             {
                //                 $("a").attr("disabled",false);
                //                 personId = result;
                //             }
                //         },
                //         error:function()
                //         {
                //             alert("访问系统异常，请刷新页面重试！");
                //         }
                //     }
                // );

                //启用a标签click事件
                changeContent();

                //加载名称类别
                var _nameType = get_nameType();
                $("#name_type").html(_nameType);

                //加载地点类别
                var _addressCategory = get_addressCategory();
                $("#address_category").html(_addressCategory);
                alert("基本资料提交成功！");
            }
        );

        /*自动生成完整拼音*/
        $("#first_name,#second_name,#first_pinyin,#second_pinyin").change
        (
            function()
            {
                var full_name = $("#first_name").val() + $("#second_name").val();
                var full_pinyin = $("#first_pinyin").val() + " " + $("#second_pinyin").val();
                $("#name_pinyin").text(full_name + " (" + full_pinyin + ")");
            }
        );

        /*判断所填写的拼音是否满足首字母大写其余小写*/
        $("#first_pinyin,#second_pinyin").change
        (
            function()
            {
                var full_pinyin = $(this).val();
                if(full_pinyin != "")
                {
                    if(!pinyin_rep.test(full_pinyin))
                    {
                        alert("拼音必须是字母，且首字母应大写，其余应小写！");
                    }
                }
            }
        );

        /*进入页面提示需要先提交基本资料才能填写其他资料*/
        $("document").ready
        (
            function()
            {
                alert("添加并提交基本资料后，才能继续添加其他信息！");
            }
        );
        /*jQuery事件区-----end-----*/

        /*jQuery新建function区-----start-----*/
        //为a标签附加单击事件，单击显示指定框体
        function changeContent()
        {
            $("a").click
            (
                function()
                {
                    var _class = $(this).text();
                    $(".option").each
                    (
                        function(index,item)
                        {
                            var div_class = $(item).children("div").attr("class");
                            if(_class == div_class)
                            {
                                $(item).css("display","block");
                            }
                            else
                            {
                                $(item).css("display","none");
                            }
                        }
                    );
                    change_iframeHeight();
                }
            );
        }

        //修改iframe高度
        function change_iframeHeight()
        {
            var _height = $(".container").height();
            $("iframe",parent.document).height(_height+70);
        }

        /*获取名称类别*/
        function get_nameType()
        {
            // alert("获取所有名称类别");
            var _content = "<option value = ''-1'>请选择</option>" +
                "<option value = '0'>字</option>" +
                "<option value = '1'>号</option>";
            return _content;
            // $.ajax
            // (
            //     {
            //         type:"post",
            //         url:"",
            //         dataType:"json",
            //         success:function(array)
            //         {
            //             var _content = "<option value = '-1'>请选择</option>";
            //             for(var i in array)
            //             {
            //                 _content += "<option value = '" + array[i].id + "'>" + array[i].name + "</option>";
            //             }
            //             return _content;
            //         },
            //         error:function()
            //         {
            //             alert("访问系统异常，请刷新页面重试！");
            //         }
            //     }
            // );
        }

        /*获取地点类别*/
        function get_addressCategory()
        {
            // alert("获取所有地点类别");
            var _content = "<option value = ''-1'>请选择</option>" +
                " <option value = '0'>出生地</option>" +
                " <option value = '1'>工作地</option>" +
                " <option value = '2'>去世地</option>" +
                " <option value = '3'>祖籍</option>";
            return _content;
            // $.ajax
            // (
            //     {
            //         type:"post",
            //         url:"",
            //         dataType:"json",
            //         success:function(array)
            //         {
            //             var _content = "<option value = '-1'>请选择</option>";
            //             for(var i in array)
            //             {
            //                 _content += "<option value = '" + array[i].id + "'>" + array[i].name + "</option>";
            //             }
            //             return _content;
            //         },
            //         error:function()
            //         {
            //             alert("访问系统异常，请刷新页面重试！");
            //         }
            //     }
            // );
        }

        /*jQuery新建function区-----end-----*/
    }
);
/*jQuery-----end-----*/