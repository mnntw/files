
$(function () {
    let form = layui.form
        ,laydate = layui.laydate,
        laypage = layui.laypage,
        layer = layui.layer,
        table = layui.table;
    //常规用法
    laydate.render({
        elem: '#test1'
    });
    laydate.render({
        elem: '#test2'
    });




    let i=1,j=1,k=1;
    $('.add-btn').click(function () {
        i++;
        addstrs1(i);
        form.render();
    });

    $('body').on("click",".btn-del",function () {
         var pre = $(this);
        layer.confirm('确定要删除么？',{
                btn:['确定','取消']
        },function () {
            $(pre).parent().parent().remove();
            layer.closeAll('dialog');
        })

        //
    });


    function getRandomNum() {
        return parseInt(Math.random()*50);
    }
    function addstrs1(i) {
        let  iNums = getRandomNum();
        let strs1;
             strs1 = '<tr>\n' +
                 '                            <td style="display: none">\n' +
                 '                                <input type="text" name="number1" value="'+i+'">\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <input type="text"  name="StartTime" class="layui-input" id="test1'+iNums+'" >\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <input type="text" name="EndTime" class="layui-input" id="test2'+iNums+'" >\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <input type="text" name="Major" class="layui-input">\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <select name="Education" lay-filter="">\n' +
                 '                                    <option value="">请选择你的学历</option>\n' +
                 '                                    <option value="大专及以下">大专及以下</option>\n' +
                 '                                    <option value="本科">本科</option>\n' +
                 '                                    <option value="研究生(硕士)">研究生(硕士)</option>\n' +
                 '                                    <option value="研究生(博士)">研究生(博士)</option>\n' +
                 '                                </select>\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <input type="text" name="SchType" class="layui-input">\n' +
                 '                            </td>\n' +
                 '                            <td>\n' +
                 '                                <select name="Education" lay-filter="">\n' +
                 '                                    <option value="">请选择您的教育类型</option>\n' +
                 '                                    <option value="全日制">全日制</option>\n' +
                 '                                    <option value="在职">在职</option>\n' +
                 '                                </select>\n' +
                 '                            </td>\n' +
                 '                            <td style="text-align: center"><button type="button" class="layui-btn layui-btn-danger btn-del">删除</button></td>\n' +
                 '                        </tr>';
        $('.addlists').append(strs1);
        //重新渲染
        laydate.render({
            elem: '#test1'+iNums
            ,trigger: 'click' //采用click弹出
        });
        laydate.render({
            elem: '#test2'+iNums
            ,trigger: 'click' //采用click弹出
        });
    }



})
