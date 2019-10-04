window.onload = function () {
    var picLi = document.getElementsByClassName('picLi');
    var showImg = document.getElementsByClassName('showImg');
    
    //展示图片
    showImg[0].style.display='block';
    for(var i=0;i<picLi.length;i++){
        picLi[i].index = i;
        picLi[i].onmouseover = function(){
            for(var i = 0; i<picLi.length;i++){               
                picLi[i].style.borderColor='white'; 
                showImg[i].style.display='none';
            }
            this.style.borderColor="red";
            showImg[this.index].style.display='block';
        }
    }
    
    //放大镜
    
    // (function(window){
    //     function $(id){
    //         return document.getElementById(id);
    //     };
    //     // 获取对象
    //     var demo = $("demo"),
    //     smilBox = $("smil_box"),
    //     mask = $("mask"),
    //     bigBox = $("big_box"),
    //     bigImg = document.getElementsByClassName('big_img');
        
    //     // smilBox的hover事件
    //     smilBox.onmouseover = function(){
    //         mask.style.display = "block";
    //         bigBox.style.display = "block";
    //     };
    //     smilBox.onmouseout = function(){
    //         mask.style.display = "none";
    //         bigBox.style.display = "none";
    //     };
    //     // 鼠标移动事件
    //     smilBox.onmousemove = function(event){
    //         var event = event || window.event;
    //         // 获取鼠标在页面上的坐标
    //         var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    //         var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    //         // mask的位置坐标
    //         var boxX = pageX - demo.offsetLeft;
    //         var boxY = pageY - demo.offsetTop;
    //         var maskX = boxX - mask.offsetWidth / 2;
    //         var maskY = boxY - mask.offsetHeight / 2;
    //         // 限制mask的移动范围
    //         if( maskX < 0 ){
    //             maskX = 0;
    //         };
    //         if( maskX > smilBox.offsetWidth - mask.offsetWidth){
    //             maskX = smilBox.offsetWidth - mask.offsetWidth;
    //         };
    //         if( maskY < 0 ){
    //             maskY = 0;
    //         };
    //         if( maskY > smilBox.offsetHeight - mask.offsetHeight){
    //             maskY = smilBox.offsetHeight - mask.offsetHeight;
    //         };
    //         // 黄色遮罩层的位置坐标
    //         mask.style.top = maskY + "px";
    //         mask.style.left = maskX + "px";
            
    //         for(var i=1;i<bigImg.length;i++){
    //             bigImg[i].index = i;
                
            
    //         // 大图片移动的比例
    //         var prop = ( bigImg[i].offsetWidth - bigBox.offsetWidth ) / (smilBox.offsetWidth - mask.offsetWidth);
    //         // 大图片的坐标
    //         var bigImgX = prop * maskX;
    //         var bigImgY = prop * maskY;
    //         bigImg[i].style.top = -bigImgY + "px";
    //         bigImg[i].style.left = -bigImgX + "px";
    //         }
    //     }
    // })(window)


    //侧边导航
    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
        var detailList = document.getElementById('detailList');
        if(t>=700){
            detailList.style.display='block';
        }
        else{
            detailList.style.display='none';
        }
    }

    //细节导航
    var goodsDetail = document.getElementById('goodsDetail');
    var markDetail = document.getElementById('markDetail');
    var goodsBtn = document.getElementById('goodsBtn');
    var remarkBtn = document.getElementById('remarkBtn');

    remarkBtn.onclick = function (){ 
        goodsDetail.style.display='none';
        markDetail.style.display='block';
        remarkBtn.className='check';
        goodsBtn.className=' ';
    }
    goodsBtn.onclick = function (){ 
        markDetail.style.display='none';
        goodsDetail.style.display='block';
        goodsBtn.className='check';
        remarkBtn.className=' ';
    }

    //数量加减
    var plusBtn = document.getElementById('plusBtn');
    var minBtn = document.getElementById('minBtn');
    var count = document.getElementById('count');
    var judge = document.getElementById('judge');

    plusBtn.onclick = function(){
        count.value=parseInt(count.value)+1;
    }
    minBtn.onclick = function(){
        if(count.value<2){
            minBtn.style.cursor='not-allowed';
        }
        else{
            minBtn.style.cursor='';
            count.value-='1';
        }
    }
    count.oninput = function(){
        if(count.value<1){
            judge.innerHTML='请输入正确的商品数量';
        }
        else{
            judge.innerHTML='';
        }
    }

    //购物车跳转
    var toShopCartBtn = document.getElementById('toShopCartBtn');
    toShopCartBtn.onclick = function(){
        location.href='../jump/jumpX.html';
    }

    //ajax
    var collectStarPostDom = document.getElementById('collectStar');

    collectStarPostDom.onclick = function() {
        console.log(1);
        var xhr = new XMLHttpRequest();
        xhr.open('post', '',true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4){
                if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
                    var result = parseInt(xhr.responseText);
                    
                    
                } 
            }
        }

        xhr.send();
    }
}
