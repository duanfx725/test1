window.onload = function () {
    //计算还能输入的字数
    var wordCheck = document.getElementById('wordCheck');
    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.onkeyup = function(){
        var str = textarea.value.length ;
        var max = 500;
        var t = max - parseInt(str);
        wordCheck.innerHTML=t;
    }   

    //打星星
    var num1 =finalNum1 = tempNum1= 0;
    var lis1 = document.getElementsByClassName("star1");
    //num:传入点亮星星的个数
    //finalNum:最终点亮星星的个数
    //tempNum:一个中间值
    function fnShow(num1) {
        finalNum1 = num1 || tempNum1;//如果传入的num为0，则finalNum取tempNum的值
        for (var i = 0; i < lis1.length; i++) {
            if(i < finalNum1){
                lis1[i].className +=  " light ";
            }
            else{
                lis1[i].className =  "star1";
            }//点亮星星就是加class为light的样式
        }
    }
    for (var i = 1; i <= lis1.length; i++) {
        lis1[i - 1].index = i;
        lis1[i - 1].onmouseover = function() { //鼠标经过点亮星星。
            fnShow(this.index);//传入的值为正，就是finalNum
        }
        lis1[i - 1].onmouseout = function() { //鼠标离开时星星变暗
            fnShow(0);//传入值为0，finalNum为tempNum,初始为0
        }
        lis1[i - 1].onclick = function() { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
            tempNum1= this.index;
        }
    }

    var num2 =finalNum2 = tempNum2= 0;
    var lis2 = document.getElementsByClassName("star2");
    //num:传入点亮星星的个数
    //finalNum:最终点亮星星的个数
    //tempNum:一个中间值
    function fnShow2(num2) {
        finalNum2 = num2 || tempNum2;//如果传入的num为0，则finalNum取tempNum的值
        for (var i = 0; i < lis2.length; i++) {
            if(i < finalNum2){
                lis2[i].className +=  " light ";
            }
            else{
                lis2[i].className =  "star2";
            }//点亮星星就是加class为light的样式
        }
    }
    for (var i = 1; i <= lis2.length; i++) {
        lis2[i - 1].index = i;
        lis2[i - 1].onmouseover = function() { //鼠标经过点亮星星。
            fnShow2(this.index);//传入的值为正，就是finalNum
        }
        lis2[i - 1].onmouseout = function() { //鼠标离开时星星变暗
            fnShow2(0);//传入值为0，finalNum为tempNum,初始为0
        }
        lis2[i - 1].onclick = function() { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
            tempNum2= this.index;
        }
    }

    var num3 =finalNum3 = tempNum3= 0;
    var lis3 = document.getElementsByClassName("star3");
    //num:传入点亮星星的个数
    //finalNum:最终点亮星星的个数
    //tempNum:一个中间值
    function fnShow3(num3) {
        finalNum3 = num3 || tempNum3;//如果传入的num为0，则finalNum取tempNum的值
        for (var i = 0; i < lis3.length; i++) {
            if(i < finalNum3){
                lis3[i].className +=  " light ";
            }
            else{
                lis3[i].className =  "star3";
            }//点亮星星就是加class为light的样式
        }
    }
    for (var i = 1; i <= lis3.length; i++) {
        lis3[i - 1].index = i;
        lis3[i - 1].onmouseover = function() { //鼠标经过点亮星星。
            fnShow3(this.index);//传入的值为正，就是finalNum
        }
        lis3[i - 1].onmouseout = function() { //鼠标离开时星星变暗
            fnShow3(0);//传入值为0，finalNum为tempNum,初始为0
        }
        lis3[i - 1].onclick = function() { //鼠标点击,同时会调用onmouseout,改变tempnum值点亮星星
            tempNum3= this.index;
        }
    }
}