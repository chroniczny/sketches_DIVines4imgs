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
                    $(this).addClass('light-0'); // lub classToggle()
                }
                else if (((distanceX == 1) && ( distanceY <= 1)) || ((distanceX == 0) && ( distanceY <= 1))) {
                    $(this).attr('class', "");
                    $(this).addClass('light-1');
                }
                else if (((distanceX == 2) && ( distanceY <= 2)) || ((distanceX <= 1) && ( distanceY <= 2))) {
                    $(this).attr('class', "");
                    $(this).addClass('light-2');
                }
                else if (((distanceX == 3) && ( distanceY <= 3)) || ((distanceX <= 2) && ( distanceY <= 3))) {
                    $(this).attr('class', "");
                    $(this).addClass('light-3');
                }
                else {
                    $(this).attr('style', "");
                    $(this).addClass('light-5');
                }
            });
        });
        //* do wariantu WARTOŚC BEZWZGLEDNA:
        sceneScope.on('mouseleave',function (event) {

            fragment.children().attr('style', "");
        });
    }
    scope();

});
