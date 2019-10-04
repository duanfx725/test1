window.onload = function(){
    var QRCodeBox = document.getElementById('QRCodeBox');
    var userNameBox = document.getElementById('userNameBox');
    
    var userNameHead = document.getElementById('userNameHead');
    userNameHead.onclick = function(){
        userNameBox.style.marginRight='0';
        QRCodeBox.style.marginLeft='-400px';
    }
    
    var QRCode = document.getElementById('QRCode');
    QRCode.onclick = function(){
        QRCodeBox.style.marginLeft='0';
        userNameBox.style.marginRight='-400px';
    }

    // ajax
    // var signInPostDom = document.getElementById('signInBtn');
    // var reJudgement = document.getElementById('reJudgement');

    // signInPostDom.onclick = function() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('post', '',true);
    //     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

    //     xhr.onreadystatechange = function() {
    //         if(xhr.readyState === 4){
    //             if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
    //                 var result = parseInt(xhr.responseText);
    //                 if() {
    //                     location.href='../index/index.html';
    //                 } else {
    //                     reJudgement.innerHTML="密码错误";
    //                 }
    //             } 
    //         }
    //     }

    //     xhr.send();
    // }
}