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

    var signOut = document.getElementById('signOut');
    signOut.onclick = function(){
        location.href='../signIn/signIn.html';
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
