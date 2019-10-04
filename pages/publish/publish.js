window.onload = function () {
    //计算还能输入的字数
    var wordCheck = document.getElementById('wordCheck');
    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.onkeyup = function(){
        var str = textarea.value.length ;
        var max = 1000;
        var t = max - parseInt(str);
        wordCheck.innerHTML=t;
    } 
}