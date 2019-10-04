var rightIcon = document.getElementsByClassName('rightIcon');
var wrongIcon = document.getElementsByClassName('wrongIcon');

var rightTxt = document.getElementsByClassName('rightTxt');
var wrongTxt = document.getElementsByClassName('wrongTxt');

var inputBox = document.getElementsByClassName('inputBox');

var reJudgement = document.getElementsByClassName('reJudgement');
var result=0;


var username = inputBox[0]; 
username.onkeyup=function(){
    //用户名
    if(username.value.match(/^[a‐zA‐Z]\w{5,17}$/)!=null){
        wrongIcon[0].style.opacity=0;
        rightIcon[0].style.opacity=1;
        wrongTxt[0].innerHTML="";
        rightTxt[0].innerHTML="格式正确"
        
        var xhr = new XMLHttpRequest();
        xhr.open('post', '',true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                    var result = parseInt(xhr.responseText);
                    if(result) {
                        reJudgement[0].innerHTML="用户名可用";
                        result=1;
                    } else {
                        reJudgement[0].innerHTML="用户名重复";
                        result=0;
                    }
                } 
            }
        }

        xhr.send();
    }
    else{
        rightIcon[0].style.opacity=0;
        wrongIcon[0].style.opacity=1;
        rightTxt[0].innerHTML="";
        wrongTxt[0].innerHTML="用户名为6-18位，字母开头，只能包含字母、数字和下划线";
        result=0;
        return false;
    }
    
}
inputBox[1].onkeyup=function(){
    //学号
    var studentNum = inputBox[1].value;  
    if(studentNum.match(/^\d{10}$/)!=null){
        wrongIcon[1].style.opacity=0;
        rightIcon[1].style.opacity=1;
        wrongTxt[1].innerHTML="";
        rightTxt[1].innerHTML="符合规范";

        var xhr = new XMLHttpRequest();
        xhr.open('post', '',true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                    var result = parseInt(xhr.responseText);
                    if(result) {
                        reJudgement[1].innerHTML="学号可用";
                        result=1;
                    } else {
                        reJudgement[1].innerHTML="该学号已注册";
                        result=0;
                    }
                } 
            }
        }

        xhr.send();
    }
    else{
        rightIcon[1].style.opacity=0;
        wrongIcon[1].style.opacity=1;
        rightTxt[1].innerHTML="";
        wrongTxt[1].innerHTML="学号格式不正确";
        result=0;
        return;
    }
}
inputBox[2].onkeyup=function(){
    //手机号
    var phoneNum = inputBox[2].value;  
    if(phoneNum.match(/^1\d{10}$/)==null||phoneNum==""){
        rightIcon[2].style.opacity=0;
        wrongIcon[2].style.opacity=1;
        rightTxt[2].innerHTML="";
        wrongTxt[2].innerHTML="手机号格式不正确";
        result=0;
        return false;
    }
    else{
        wrongIcon[2].style.opacity=0;
        rightIcon[2].style.opacity=1;
        wrongTxt[2].innerHTML="";
        rightTxt[2].innerHTML="符合规范";
        result=1;
    }
}
inputBox[3].onkeyup=function(){
    //6-18位，不可包含@/\%四个符号
    var key = inputBox[3].value;  
    if(key.match(/^[^@/\\%]{6,18}$/)!=null){
        rightIcon[3].style.opacity=1;
        wrongIcon[3].style.opacity=0;
        rightTxt[3].innerHTML="符合规范";
        wrongTxt[3].innerHTML="";
        result=1;
    }
    else{
        wrongIcon[3].style.opacity=1;
        rightIcon[3].style.opacity=0;
        wrongTxt[3].innerHTML="密码为6-18位，不可包含@/\%四个符号";
        rightTxt[3].innerHTML="";
        result=0;
        return false;
    }
}
inputBox[4].onkeyup=function(){
    //与密码一致
    var key = inputBox[3].value;
    var aKey = inputBox[4].value;  
    if(aKey==key){
        rightIcon[4].style.opacity=1;
        wrongIcon[4].style.opacity=0;
        rightTxt[4].innerHTML="密码一致";
        wrongTxt[4].innerHTML="";
        result=1;
    }
    else{
        wrongIcon[4].style.opacity=1;
        rightIcon[4].style.opacity=0;
        wrongTxt[4].innerHTML="两次密码不同";
        rightTxt[4].innerHTML="";
        result=0;
        return false;
    }
}

var registerPostDom = document.getElementById('registerPost');

registerPostDom.onclick = function() { 
    if(result==1){
        location.href='../signIn/signIn.html';
    }
    else{
        registerPostDom.style.cursor='not-allowed';
        registerPostDom.style.opacity='0.6';
    }
}

//上传文件开始

//上传图片
// var fileBtn = document.getElementById('fileBtn');
// fileBtn.onchange=function preview(){
//     alert(fileBtn);
//     var file =  document.getElementById('file').value;//获取文件
//     var index = file.lastIndexOf('.'); //获取最后一位小数点
//     var extension =  file.substr(index +  1);
//     var arr = ['jpeg','png','jpg','gif'];
//     if (isInArray(arr,extension)) {
//         var img = document.getElementById("previewimg");
//         img.src = window.URL.createObjectURL(obj.files[0]);
//         var file = obj.files[0];
//         UpladFile(file);
//     } else {
//         alert('请选择正确的图片格式');
//         return false;
//     }
// }

// //上传文件方法
// function UpladFile(fileObj) {
//     var form = new FormData(); // FormData 对象
//         form.append("file", fileObj); // 文件对象
//         form.append('_token','{{ csrf_token() }}');
//         xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
//         xhr.open("post", "http://127.0.0.1/b/1.php", true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
//         xhr.send(form); //开始上传，发送form数据
//         xhr.onreadystatechange = function () {
//            var data = xhr.responseText;
//            console.log(data);

//         }
// }

// /**
//  * 使用循环的方式判断一个元素是否存在于一个数组中
//  * @param {Object} arr 数组
//  * @param {Object} value 元素值
//  */
// function isInArray(arr,value){
//     for(var i = 0; i < arr.length; i++){
//         if(value === arr[i]){
//             return true;
//         }
//     }
//     return false;
// }

//上传文件结束



