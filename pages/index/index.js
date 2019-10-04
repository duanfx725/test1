window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 5;
    var animated = false;
    var interval = 3000;
    var timer;

    //轮播图
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function (){
            if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if(left>-200){
                    list.style.left = -600 * len + 'px';
                }
                if(left<(-600 * len)) {
                    list.style.left = '-600px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }
    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 5) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-600);
        showButton();
    }
    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(600);
        showButton();
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -600 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();

    //回到顶部
    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
        var toTheTop = document.getElementById('toTheTop');
        if(t>=600){
            toTheTop.style.display='block';
        }
        else{
            toTheTop.style.display='none';
        }
    }
    
    //退出登录
    var signOut = document.getElementById('signOut');
    signOut.onclick = function(){
        location.href='../signIn/signIn.html';
    }

    //——————————————————————————————————————增加1————————————————————————————————————————————————————————
    //懒加载
    var clientHeight=getWindow().height;
    //选取所有包含属性data-src的img元素，然后在滚动的时候判断是否在可视区域
    var imgArray=toArray(document.querySelectorAll("[data-src]"));

    function lazyLoad(){
        var loadedIndex=[];//=new Array()

        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        for(let i=0;i<imgArray.length;i++){
            let img=imgArray[i];
            if(img.offsetTop-scrollTop<clientHeight){
                img.src=img.getAttribute("data-src");
                // console.log("img "+img.src.substring(img.src.lastIndexOf("/")+1)+"display.");
                loadedIndex.unshift(i);//数组的开头添加元素||因为删除的时候先要删除后面的，再删除前面的，否则Array删除了前面的，后面的就会自动覆盖到前面来。
            }
        }
        for(let i=0;i<loadedIndex.length;i++){
            imgArray.splice(loadedIndex[i],1);
        }
    }

    //跨浏览器获取可视窗口大小
    function  getWindow (){
        if(typeof window.innerWidth !='undefined') {
            return{
                width : window.innerWidth,
                height : window.innerHeight
            }

        } else{
            return {
                width : document.documentElement.clientWidth,
                height : document.documentElement.clientHeight
            }
        }
    }

    function toArray(arrLike){
        if(typeof Array.from !="function"){
            var result=[];
            for(let i=0;i<arrLike.length;i++){
                result.push(arrLike[i]);
            }
            return result;
        }else{
            return Array.from(arrLike);
        }
    } 
    window.οnscrοll=lazyLoad;
    lazyLoad();

    //——————————————————————————————————————增加2————————————————————————————————————————————————————————
    //sub tag点击显示样式
    var mainTags = document.getElementsByClassName('mainTags');
    var subTags = document.getElementsByClassName('subTags');
    for(var i =0;i<mainTags.length;i++){
        mainTags[i].index = i;
        mainTags[i].onclick = function(){
            console.log(1);
            for(var j=0;j<subTags.length;j++){
                subTags[j].index = j;
                subTags[j].className = 'subTags';
            }
            subTags[this.index].className += ' tagChecked ';
        }
    }


    //--------//
    // var searchPostDom = document.getElementById('searchBtn');

    // searchPostDom.onclick = function() {
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('post', '',true);
    //     xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset-UTF-8')
    
    //     xhr.onreadystatechange = function() {
    //         if(xhr.readyState === 4){
    //             if((xhr.status >= 200 && xhr.status <= 300) || xhr.status === 304) {
    //                 var result = parseInt(xhr.responseText);
    //                 if() {
    //                     location.href='';
    //                 } else {
                        
    //                 }
    //             } 
    //         }
    //     }
    
    //     xhr.send();
    // }

}
