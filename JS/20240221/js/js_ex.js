var Body = {
    SetColor: function (color) {
        document.querySelector('body').style.color = color ;
    }
    ,
    SetBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color ;
    }
}

var Link = {
    SetColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

function ChangeButtonColor(night) {
    if (night.value === '야간모드') {
        Body.SetColor('white')
        Body.SetBackgroundColor('black')
        night.value = '주간모드';
        Link.SetColor('red')
    }
    else {
        Body.SetColor('black')
        Body.SetBackgroundColor('white')
        night.value = '야간모드'
        Link.SetColor('blue')
    }
}