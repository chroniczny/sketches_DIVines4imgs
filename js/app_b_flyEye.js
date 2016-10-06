/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    var sceneScope = $('.containerScope');
    var fragment = sceneScope.find('> div');
    var reflex = fragment.find('.reflex');

    var numOfCols = 8;
    var numOfRows = 6;



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

});
