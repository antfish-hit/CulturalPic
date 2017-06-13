define(
    ['jquery','bootstrap'],
    function($)
    {
        function changeHeight()
        {
            var _height = $(".container").height();
            var w_height = $(document).height();
            if(_height < w_height)
            {
                $("iframe",parent.document).height(w_height);
            }
            else
            {
                $("iframe",parent.document).height(_height+100);
            }
        };

        /*-----模块全局变量区---start-----*/
        //确认密码
        var _pwd = "";
        //验证码
        var _code = "";

        /*-----模块全局变量区---end-----*/

        /*注册与登陆文本框change事件*/
        function change_event(obj)
        {
            var id = $(obj).attr("id");
            var _content = "";
            var _rep = "";
            switch (id)
            {
                case 'account':
                    var _text = $(obj).val();
                    var _rep = /^[\w]+[@][\w]+[\\.][a-z]+$/;
                    if(_text.trim() == "")
                    {
                        _content = "电子邮箱不能为空！";
                        return _content;
                    }
                    else if(!_rep.test(_text))
                    {
                        _content = "电子邮箱应符合xxx@xxx.xxx的格式！";
                        return _content;
                    }
                    break;

                case 'email':
                    var _text = $(obj).val();
                    var _rep = /^[\w]+[@][\w]+[\\.][a-z]+$/;
                    if(_text.trim() == "")
                    {
                        _content = "电子邮箱不能为空！";
                        return _content;
                    }
                    else if(!_rep.test(_text))
                    {
                        _content = "电子邮箱应符合xxx@xxx.xxx的格式！";
                        return _content;
                    }
                    else
                    {
                        $.ajax
                        (
                            {
                                type:'post',
                                url:'',
                                data:'email=' + _text,
                                success:function(result)
                                {
                                    if(result == '1')
                                    {
                                        _content = "电子邮箱已存在！";
                                        return _content;
                                    }
                                },
                                error:function()
                                {
                                    _content = "访问服务器异常，请刷新页面！";
                                    return _content;
                                }
                            }
                        );
                    }
                    break;

                case 'password':
                    var _text = $(obj).val();
                    var _rep = /^[\w]+$/;
                    if(_text.trim() == "")
                    {
                        _content = "密码不能为空!";
                        return _content;
                    }
                    else if(!_rep.test(_text))
                    {
                        _content = "密码只能包含数字与字母!";
                        return _content;
                    }
                    _pwd = _text;
                    break;

                case 'login_pwd':
                    var _text = $(obj).val();
                    var _rep = /^[\w]+$/;
                    if(_text.trim() == "")
                    {
                        _content = "密码不能为空!";
                        return _content;
                    }
                    else if(!_rep.test(_text))
                    {
                        _content = "密码只能包含数字与字母!";
                        return _content;
                    }
                    _pwd = _text;
                    break;

                case 're_pwd':
                    var _text = $(obj).val();
                    if(_text.trim() == "")
                    {
                        _content = "请再次输入密码!";
                        return _content;
                    }
                    else if(_pwd == "")
                    {
                        _content = "请先输入密码!";
                        return _content;
                    }
                    else if(_pwd != _text)
                    {
                        _content = "输入的密码不一致!";
                        return _content;
                    }
                    break;

                case 'code':
                    var _text = $(obj).val();
                    if(_text.trim() == "")
                    {
                        _content = "请输入验证码!";
                        return _content;
                    }
                    else if(_code.toLowerCase() != _text.toLowerCase())
                    {
                        _content = "验证码错误!";
                        create_code();
                        return _content;
                    }
                    break;
            }

        };

        /*为文本框绑定弹出框内容并显示*/
        function bind_tipContent(obj,content)
        {
            var _id = "#" + $(obj).attr("id") + "_tipContent";
            $(obj).popover('show');
            $(_id).text(content);
            var _top = $(_id).parent().parent();
            var __height = parseInt(_top.css('top').substring(0,_top.css('top').indexOf('p')-1)) - 10 + 'px';
            _top.css('top',__height);
        }

        function bind_tips(obj)
        {
            var _id = $(obj).attr("id") + "_tipContent";
            var _html = "<div id = '"+ _id +"' ></div>";
            $(obj).popover
            (
                {
                    trigger: 'manual',
                    placement: 'right', //top, bottom, left or right
                    container: 'body',
                    html: 'true',
                    content: _html,
                }
            ).bind('blur',function ()
            {
                var _content = change_event(obj);
                if(_content != null)
                {
                    bind_tipContent(obj,_content);
                }
            }).bind('focus',function()
                {
                    $(obj).popover('hide');
                });
        };

        /*创建验证码*/
        function create_code()
        {
            var _length = 4;
            _code = "";
            var array = new Array(0,1,2,3,4,5,6,7,8,9
                ,'a','b','c','d','e','f','g','h','i','j','k','l','m'
                ,'n','o','p','q','r','s','t','u','v','w','x','y','z'
                ,'A','B','C','D','E','F','G','H','I','J','K','L','M'
                ,'N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

            for(var i = 0; i < _length; i++)
            {
                _code += array[(Math.floor(Math.random() * 62))];
            }
            if(_code.length != _length)
            {
                create_code();
            }
            show_code(_code);
        };

        /*绘制验证码*/
        function show_code(code)
        {
            var img = document.getElementById("code_img");
            var canvas = img.getContext("2d");
            canvas.clearRect(0,0,1000,1000);
            canvas.font = "75px 'Microsoft Yahei'";
            canvas.fillText(code,50,100);
            canvas.fillStyle = "black";
        };

        return{
            changeHeight : changeHeight,
            create_code : create_code,
            bind_tips : bind_tips
        };
    }
);