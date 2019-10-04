window.onload = function () {
    //返回上一页
    var returnToDetail = document.getElementById('returnToDetail');
    returnToDetail.onclick = function(){
        console.log('a');
        location.href='../detail/detail.html';
    }

    //跳到购物车结算
    var toShoppingCart = document.getElementById('toShoppingCart');
    toShoppingCart.onclick = function(){
        console.log('b');
        location.href='../shopCart/shopCart.html';
    }
}