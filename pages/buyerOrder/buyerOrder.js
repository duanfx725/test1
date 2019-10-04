window.onload = function () {
    var deleteBtn = document.getElementsByClassName('deleteBtn');
    var itemDetail = document.getElementsByClassName('itemDetail');

    //删除商品
    for(i=0;i<deleteBtn.length;i++){
        deleteBtn[i].index = i;
        deleteBtn[i].onclick = function(){
            var r = window.confirm('确定要删除该订单吗');
            if(r==true){
                console.log(1);
                itemDetail[this.index].style.display='none';
            }
            //————————————————————————————AJAX——————————————————————————————————————
            // var xhr = new XMLHttpRequest();
            // xhr.open('post', '',true);
            // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

            // xhr.onreadystatechange = function() {
            //     if(xhr.readyState === 4){
            //         if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                        
            //         } 
            //     }
            // }
            // xhr.send();
        }
    }
}