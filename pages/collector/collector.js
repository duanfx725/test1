window.onload = function () {
    var cancelIcon = document.getElementsByClassName('cancelIcon');
    var goods = document.getElementsByClassName('goods');

    //删除商品
    for(i=0;i<cancelIcon.length;i++){
        cancelIcon[i].index = i;
        cancelIcon[i].onclick = function(){
            var r = window.confirm('确认要将该宝贝移除收藏夹？');
            if(r==true){
                console.log(1);
                goods[this.index].style.display='none';
            }
            //————————————————————————————AJAX——————————————————————————————————————
            var xhr = new XMLHttpRequest();
            xhr.open('post', '',true);
            xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4){
                    if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                        
                    } 
                }
            }
            xhr.send();
        }
    }
}