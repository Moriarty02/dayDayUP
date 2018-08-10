###《高效前端 web高效编程与优化实践》读书计划~
2018-04-04 00:09:31
1.处理装机必备max打点问题
2.高效前端 46页
3.和后端沟通完成开平付费下载的文件上传逻辑待测试
jquery的swf上传插件 setUploadUrl这个API对URL的改写是全局的
如果页面存在多个上传插件 慎用 修改一次以后会对页面内的所有的上传url进行修改
最后决定让后端修改上传的接口 后端自己做中转处理 带上is_lianyun参数判断是否转发到apk/apkfee接口
2018-04-04 13:31:49
Fibonacci数列

function fibonacci(n) {
    if(n==1 || n == 2)
        return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}
非递归实现
https://blog.csdn.net/winglet/article/details/2485140
2018-04-08 23:42:36
mac find命令
find . -name "*蝙蝠侠*"
# 找出当前目录以及其所有子目录下所有名字中包含“蝙蝠侠”三字的文件
php面向对象
::引用类下面的static方法和参数
php链接数据库
本地root 数据库密码123456
字符集设置要让页面 php文件 php链接 数据库字符集统一为utf8
设置请求header
header("Content-Type: text/html;charset=utf-8");
设置php链接为utf8
$conn->set_charset("utf8");
js高阶函数应用
function return function
高阶+箭头函数
var has=p->o->return o.hasOwnProperty(p);
var a={b:'name'};
has("b")(a)


