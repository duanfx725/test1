window.onload = function () {
    // for hover
    var type = document.getElementById('type');
    var typeHover = document.getElementById('typeHover');
    type.onmouseover = function(){
        typeHover.style.display='block';
    }
    type.onmouseout = function(){
        typeHover.style.display='none';
    }

    var mark = document.getElementById('mark');
    var markHover = document.getElementById('markHover');
    mark.onmouseover = function(){
        markHover.style.display='block';
    }
    mark.onmouseout = function(){
        markHover.style.display='none';
    }

    var discount = document.getElementById('discount');
    var discountHover = document.getElementById('discountHover');
    discount.onmouseover = function(){
        discountHover.style.display='block';
    }
    discount.onmouseout = function(){
        discountHover.style.display='none';
    }

    //for shopping cart
    
}