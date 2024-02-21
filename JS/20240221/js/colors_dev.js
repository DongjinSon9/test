 // function ASetColor(color) {   /* ctr + sift + L 로 단어 전체 선택 후 일괄 수정 */
        //     var alist = document.querySelectorAll('a');
        //     var i = 0;
        //     while (i < alist.length) {
        //         alist[i].style.color = color;
        //         console.log(alist[i]);
        //         i = i + 1;
        //     }
        // }


        var Links = {
            // 키 : setColor
            // 값 : function ~ 문장
            setColor: function (color) {
                var alist = document.querySelectorAll('a');
                var i = 0;
                while (i < alist.length) {
                    alist[i].style.color = color;
                    i = i + 1;
                }
            }
        }



        // a태그의 글자색을 변경

        // function BodySetColor(color) {
        //     document.querySelector('body').style.color = color;
        // }
        // function BodySetBackgroudSetColor(color) {
        //     document.querySelector('body').style.backgroundColor = color;
        // }
        // body의 글자색과 배경색을 변경

        // 주의사항 : 함수 사용시 인자값으로 문자열 타입으로 입력하기.


        /* 
        1.함수를 호출한다(사용한다)
        2.함수를 정의한 곳으로 이동한다
        3.함수를 정의한 곳에서 this 어디로 가냐면 thiss로 간다.
         */
        function changecolortest(thiss) {   /* 정의 시 사용되는 소괄호 안의 호칭 = 파라미터, 파라미터 이름값은 아무거나 사용해도 되지만 의미를 담는 게 좋다. */
            // var target = document.querySelector('body');
            if (thiss.value === 'night') {
                // target.style.backgroundColor = 'black';
                // BodySetBackgroudSetColor('black')
                // target.style.color = 'white';
                // BodySetColor('white')
                Body.setBackgroundColor('black')
                Body.setColor('white')
                thiss.value = 'day'
                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     alist[i].style.color = 'powderblue';
                //     console.log(alist[i]);
                //     i = i + 1;
                // }
                // ASetColor('red')
                Links.setColor('red')
            }
            else {
                // target.style.backgroundColor = 'white';
                // BodySetBackgroudSetColor('white')
                // target.style.color = 'black';
                // BodySetColor('black')


                Body.setBackgroundColor('white')
                Body.setColor('black')

                thiss.value = 'night'

                // var alist = document.querySelectorAll('a');
                // var i = 0;
                // while (i < alist.length) {
                //     alist[i].style.color = 'blue';
                //     console.log(alist[i]);
                //     i = i + 1;
                // }
                // ASetColor('blue')
                Links.setColor('blue')

            }
        }


        //body라는 이름으로 객체 형태이고, 해당 객체 안에 속성으로 익명함수를 이용하고 있다.

        var Body = {
            setColor: function (color) {
                document.querySelector('body').style.color = color;
            }
            ,    //함수 구분자 ' , ' 를 사용
            setBackgroundColor: function (color) {
                document.querySelector('body').style.backgroundColor = color;
            }
        }