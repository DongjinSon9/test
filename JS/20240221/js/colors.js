var ALinks = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    }
    ,    //함수 구분자 ' , ' 를 사용
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}

function changecolortest(thiss) {
    if (thiss.value === 'night') {
        Body.setBackgroundColor('black')
        Body.setColor('white')
        thiss.value = 'day'
        ALinks.setColor('red')
    }
    else {
        Body.setBackgroundColor('white')
        Body.setColor('black')
        thiss.value = 'night'

        ALinks.setColor('blue')
    }
}