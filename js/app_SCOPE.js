/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    var sceneScope = $('.containerScope');
    var fragment = sceneScope.find('> div');
    var reflex = fragment.find('.reflex');

    var numOfCols = 8;
    var numOfRows = 6;


    // * WAARIANT z wartością bezwględną - daje promienisty prostokąt

    function scope() {

        fragment.on('mouseover', function (event) {

            fragment.each(function (idx, el) {

                var myTarget = event.target; // używam js - bo tak umiem aby określić co będzie wywoływało event
                var targetParent = myTarget.parentElement; // rodzic diva z błyskiem

                var distanceX = Math.abs(targetParent.getAttribute('data-x') - $(this).attr('data-x'));
                var distanceY = Math.abs(targetParent.getAttribute('data-y') - $(this).attr('data-y'));
                console.log("this: " + targetParent.getAttribute('data-x'), targetParent.getAttribute('data-y'), " f:" + $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceX, "dist Y: " + distanceY);
                //$(this).children().text(distanceX + ", " + distanceY);

                if ((distanceX == 0) && ( distanceY == 0)) {
                    $(this).attr('class', "");
                    $(this).addClass('red-0'); // lub classToggle()
                }
                else if (((distanceX == 1) && ( distanceY <= 1)) || ((distanceX == 0) && ( distanceY <= 1))) {
                    $(this).attr('class', "");
                    $(this).addClass('red-1');
                }
                else if (((distanceX == 2) && ( distanceY <= 2)) || ((distanceX <= 1) && ( distanceY <= 2))) {
                    $(this).attr('class', "");
                    $(this).addClass('red-2');
                }
                else if (((distanceX == 3) && ( distanceY <= 3)) || ((distanceX <= 2) && ( distanceY <= 3))) {
                    $(this).attr('class', "");
                    $(this).addClass('red-3');
                }
                else {
                    $(this).attr('style', "");
                    $(this).addClass('red-5');
                }
            });
        });
        //* do wariantu WARTOŚC BEZWZGLEDNA:
        sceneScope.on('mouseleave',function (event) {

            fragment.children().attr('style', "");
        });
    }
    //scope();

    // ** WAARIANT bez wartoci bewzględnej - przesunięcie elementu
    function flyEye() {

        fragment.on('mouseover', function (event) {

            fragment.each(function (idx, el) {

                var myTarget = event.target; // używam js - bo tak umiem aby określić co będzie wywoływało event
                var targetParent = myTarget.parentElement; // rodzic diva z błyskiem

                var distanceXleft = targetParent.getAttribute('data-x') - $(this).attr('data-x');
                var distanceYtop = targetParent.getAttribute('data-y') - $(this).attr('data-y');
                console.log("this: " + targetParent.getAttribute('data-x'), targetParent.getAttribute('data-y'), " f:" + $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceXleft, "dist Y: " + distanceYtop);

                var moveX = distanceXleft * 9;
                var moveY = distanceYtop * 9;

                $(this).children().attr('class', "");
                $(this).children().addClass('reflexion'); // lub classToggle()
                $(this).children().finish().animate({'left': -20 + moveX, 'top': -22 + moveY}, 50);
            });
        });
        sceneScope.on('mouseleave', function (event) {
            //$(this).children().attr('style', "");
            $(this).children().children().removeClass('reflexion');
        });
    }

    flyEye();


    // *** WAARIANT z x+y -> promieniście romboidalny
    function roseteGap() {

        fragment.on('mouseover', function (event) {

            fragment.each(function (idx, el) {

                var myTarget = event.target; // używam js - bo tak umiem aby określić co będzie wywoływało event
                var targetParent = myTarget.parentElement; // rodzic diva z błyskiem

                var distanceX = targetParent.getAttribute('data-x') - $(this).attr('data-x');
                var distanceY = targetParent.getAttribute('data-y') - $(this).attr('data-y');
                console.log("this: " + targetParent.getAttribute('data-x'), targetParent.getAttribute('data-y'), " f:" + $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceX, "dist Y: " + distanceY);

                var distanceXsumY = Math.abs(distanceX) + Math.abs(distanceY);

                for (var n = 0; n < numOfCols; n++) {
                    if (distanceXsumY == n) {
                        $(this).attr('style', "");
                        //$(this).addClass('bang-' + n); // lub classToggle()
                        $(this).css({'transform': 'perspective(400px) rotateX(' + n / 2 + 'deg) rotateY(' + n / 2 + 'deg) scale(' + ((n * 0.2) + 0.4) + ')'});
                        $(this).css({'box-shadow': '0 0 27px -1px rgba(0,0,0,0.9)'});
                        //$(this).children().text(distanceX + ", " + distanceY);
                    }
                }
            })
        });
        //* do wariantu WARTOŚC BEZWZGLEDNA:
        sceneScope.on('mouseleave', function (event) {
            $(this).children().attr('style', "");
            $(this).children().children().attr('style', "");
        });


    }

    roseteGap();
});
