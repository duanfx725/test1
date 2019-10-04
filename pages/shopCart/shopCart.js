window.onload = function () {
    var itemCount = document.getElementById('itemCount');
    
    var plusBtn = document.getElementsByClassName('plusBtn');
    var minBtn = document.getElementsByClassName('minBtn');
    var count = document.getElementsByClassName('count');

    var deleteBtn = document.getElementsByClassName('deleteBtn');
    var cartOrder = document.getElementsByClassName('cartOrder');

    var toCollectorBtn = document.getElementsByClassName('toCollectorBtn');

    var barTakeAll = document.getElementById('barTakeAll');
    var cartTakeAll = document.getElementById('cartTakeAll');
    var takeIt = document.getElementsByClassName('takeIt');

    var store1 = document.getElementById('store1');
    var item = document.getElementsByClassName('store1');

    var itemCount = document.getElementById('itemCount');

    var aPriceSum = document.getElementsByClassName('aPriceSum');
    var nowPrice = document.getElementsByClassName('nowPrice');
    var countBtn = document.getElementsByClassName('countBtn');
    
    var total1 = document.getElementById('total1');
    var total2 = document.getElementById('total2');

    var containerBg = document.getElementById('containerBg');

    //数量加减
    for(i=0;i<plusBtn.length;i++){
        plusBtn[i].index = i;
        plusBtn[i].onclick = function(){
            count[this.index].value=parseInt(count[this.index].value)+1;
            //计算总金额
            if(takeIt[this.index].checked == true){
                total1.innerHTML=parseFloat(nowPrice[this.index].innerHTML)+parseFloat(total1.innerHTML);
                total2.innerHTML = total1.innerHTML;
            }
        }
    }
    for(i=0;i<minBtn.length;i++){
        minBtn[i].index = i;
        minBtn[i].onclick = function(){
            if(parseInt(count[this.index].value)<2){
                minBtn[this.index].style.cursor='not-allowed';
            }
            else{
                minBtn[this.index].style.cursor='';
                count[this.index].value=parseInt(count[this.index].value)-1;
                //计算总金额
                if(takeIt[this.index].checked == true){
                    total1.innerHTML=(parseFloat(total1.innerHTML)-parseFloat(nowPrice[this.index].innerHTML))*100/100;
                    total2.innerHTML = total1.innerHTML;
                }
            }
        }
    }
    
    for(i=0;i<count.length;i++){
        count[i].index = i;
        count[i].oninput = function(){
            if(parseInt(count[this.index].value)<1){
                count[this.index].value=1;
            }
        }
    }
    
    //删除商品
    for(i=0;i<deleteBtn.length;i++){
        deleteBtn[i].index = i;
        deleteBtn[i].onclick = function(){
            var r = window.confirm('确认要删除该宝贝吗？');
            if(r==true){
                console.log(1);
                cartOrder[this.index].style.display='none';
            }
        }
    }
    
    //移入收藏夹
    for(i=0;i<toCollectorBtn.length;i++){
        toCollectorBtn[i].index = i;
        toCollectorBtn[i].onclick = function(){
            alert('成功加入收藏夹');
        }
    }

    //全选
    barTakeAll.onchange = function(){
        if(barTakeAll.checked==true){
            cartTakeAll.checked=true;
            for(i=0;i<takeIt.length;i++){
                takeIt[i].checked = true ;
            } 
            var sum=0;
            for(i=0;i<aPriceSum.length;i++){
                console.log(1);
                
                aPriceSum[i].index = i;
                sum += parseFloat(aPriceSum[i].innerHTML);
            }
            total1.innerHTML=(sum)*100/100;
            total2.innerHTML = total1.innerHTML;
        }
        else{
            cartTakeAll.checked=false;
            for(i=0;i<takeIt.length;i++){
                takeIt[i].checked = false ;
            }
            total1.innerHTML=total2.innerHTML=0;
        } 
    }
            
    cartTakeAll.onchange = function(){
        if(cartTakeAll.checked==true){
            barTakeAll.checked=true;
            for(i=0;i<takeIt.length;i++){
                takeIt[i].checked = true ;
            } 
            var sum=0;
            for(i=0;i<aPriceSum.length;i++){
                console.log(1);
                
                aPriceSum[i].index = i;
                sum += parseFloat(aPriceSum[i].innerHTML);
            }
            total1.innerHTML=(sum)*100/100;
            total2.innerHTML = total1.innerHTML;
        }
        else{
            barTakeAll.checked=false;
            for(i=0;i<takeIt.length;i++){
                takeIt[i].checked = false ;
            }
            total1.innerHTML=total2.innerHTML=0;
        } 
    }
    
    //计算数量
    for (var j = 0; j < takeIt.length; j++) {
        takeIt[j].index = j;
        takeIt[j].onclick = function count(){
            var sum = 0;
            var a = 0;
            console.log(sum);
            for (var i = 0; i < takeIt.length; i++) {
                takeIt[i].index=i;
                if(takeIt[i].checked==true){
                    sum++;
                    a = 0;
                }
                else{
                    a = 1;
                }
            } 
            if(a == 0){
                barTakeAll.checked=false;
                cartTakeAll.checked=false;
            }  
            else{
                barTakeAll.checked=true;
                cartTakeAll.checked=true;
            }      
            itemCount.value = sum;
        }
    }
    barTakeAll.onclick = function(){
        var sum = 0;
        if(barTakeAll.checked==true){
            sum = takeIt.length ;
        }
        else{
            sum = 0;
        } 
        itemCount.value = sum;
    }
    cartTakeAll.onclick = function(){
        var sum = 0;
        if(cartTakeAll.checked==true){
            sum = takeIt.length ;
        }
        else{
            sum = 0 ;
        } 
        itemCount.value = sum;
    }
    store1.onclick = function(){
        var sum = parseInt(itemCount.value);
        if(store1.checked==true){
            sum += item.length ;
        }
        else{
            sum -= item.length;
        } 
        itemCount.value = sum;
    }

    //计算小计
    for(i=0;i<countBtn.length;i++){
        countBtn[i].index = i;
        var s;
        countBtn[i].onclick = function(){
            s = nowPrice[this.index].innerText*parseFloat(count[this.index].value) ;
            aPriceSum[this.index].innerHTML = s.toFixed(2);
        }
    }

    //计算总额
    for(i=0;i<takeIt.length;i++){
        takeIt[i].index = i;
        takeIt[i].onclick = function(){
            if(takeIt[this.index].checked == true){
                total1.innerHTML=(parseFloat(aPriceSum[this.index].innerHTML)+parseFloat(total1.innerHTML))*100/100;
                total2.innerHTML = total1.innerHTML;
            }
            else{
                total1.innerHTML=(parseFloat(total1.innerHTML)-parseFloat(aPriceSum[this.index].innerHTML))*100/100;
                total2.innerHTML = total1.innerHTML;
            }
            // 计算数量
            var sum = 0;
            for (var j = 0; j < takeIt.length; j++) {
                takeIt[j].index=j;
                if(takeIt[j].checked==true){
                    sum++;
                }
            }         
            itemCount.value = sum;
        }
    }


}