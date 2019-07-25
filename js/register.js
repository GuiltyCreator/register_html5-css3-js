// 验证用户注册数据有效性
function verifyRegisterBeforeSave() {
    // 利用 document.getElementById 获取 html 中的注册输入数据
    // 获取输入的用户名称
    var username = document.getElementById("username").value;

    //TODO 获取输入的：登录密码
    var password = //TODO 填充代码

    //TODO 获取输入的：重复密码
    var repeatPassword = //TODO 填充代码

    //TODO 获取输入的：电子邮箱
    var email = //TODO 填充代码

    // 利用JavaScript中的 if 判断语句验证注册信息有效性
    if (username == "") {
        alert("用户不允许为空！");
        return false;
    } else if ( //TODO 填充代码 ) {
        alert("密码不允许为空！");
        return false;
    } else if ( //TODO 填充代码 ) {
        alert("重复密码不允许为空！");
        return false;
    } else if ( //TODO 填充代码 ) {
        alert("电子邮件不允许为空！");
        return false;
    } else if (username.length < 6 || username.length > 20) {
        alert("用户名长度应在6到20个字符之间！");
        return false;
    } else if ( //TODO 填充代码 ) {
        alert("密码或重复密码不能和用户名相同！");
        return false;
    } else if (password.length < 6 || password.length > 20 || repeatPassword.length < 6 || repeatPassword.length > 20) {
        alert("密码或重复密码长度应在6到20个字符之间！");
        return false;
    } else if ( //TODO 填充代码 ) {
        alert("密码和重复密码不同，请重新输入！");
        return false;
    } else {
        alert("登陆成功！");
        return true;
    }

    return true;
}