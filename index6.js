// script.js

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    var isValid = true;

    // 验证姓名（这里只是简单非空检查，可以根据需要添加更多验证）
    if (name === "") {
        alert("请输入姓名！");
        isValid = false;
    }

    // 验证邮箱（使用正则表达式进行基本验证）
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("请输入有效的邮箱地址！");
        isValid = false;
    }

    // 验证反馈内容（这里只是简单非空检查）
    if (feedback === "") {
        alert("请输入反馈内容！");
        isValid = false;
    }

    // 如果所有验证都通过，则提交表单
    return isValid;
}