window.onload = function () {
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.onclick = function(){
        console.log(1);
        alert('商品购买成功');
        location.href='../index/index.html';
    }
}