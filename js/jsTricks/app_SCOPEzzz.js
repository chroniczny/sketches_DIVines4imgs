/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    var sceneScope = $('.containerScope');
    var fragment = sceneScope.find('> div');
    var reflex = fragment.find('.reflex');

    var numOfCols = 8;
    var numOfRows = 6;

    function scope() {

        fragment.on('mouseover', function (event) {


            fragment.each(function (idx, el) {

                //console.log(event.target.getAttribute('class'));
                var myTarget = event.target; // używam js - bo tak umiem aby określić co będzie wywoływało event
                var targetParent = myTarget.parentElement; // rodzic diva z błyskiem


                // wariant z wartością bezwględną - daje promienisty prostokąt
                //               var distanceX = Math.abs(targetParent.getAttribute('data-x')- $(this).attr('data-x'));
                //               var distanceY = Math.abs(targetParent.getAttribute('data-y')- $(this).attr('data-y'));
                //               console.log("this: "+targetParent.getAttribute('data-x'),targetParent.getAttribute('data-y'), " f:"+ $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceX, "dist Y: " + distanceY);
                //
                //
                //               if ((distanceX == 0) && ( distanceY == 0)) {
                //                   $(this).attr('class', "");
                //                   $(this).addClass('red-0'); // lub classToggle()
                //                   $(this).children().text(distanceX+", "+distanceY );
                //               }
                //               else if (((distanceX == 1) && ( distanceY <= 1)) || ((distanceX == 0) && ( distanceY <= 1))) {
                //                   $(this).attr('class', "");
                //                   $(this).addClass('red-1'); // lub classToggle()
                //                   $(this).children().text(distanceX+", "+distanceY );
                //               }
                //               else if (((distanceX == 2) && ( distanceY <= 2))  || ((distanceX <= 1) && ( distanceY <= 2))) {
                //                   $(this).attr('class', "");
                //                   $(this).addClass('red-2'); // lub classToggle()
                //                   $(this).children().text(distanceX+", "+distanceY );
                //               }
                //               else if (((distanceX == 3) && ( distanceY <= 3))  || ((distanceX <= 2) && ( distanceY <= 3))) {
                //                   $(this).attr('class', "");
                //                   $(this).addClass('red-3'); // lub classToggle()
                //                   $(this).children().text(distanceX+", "+distanceY );
                //               }
                //               else {
                //                   $(this).attr('style', "");
                //                   $(this).addClass('red-5');
                //                   //            lub classToggle()
                //                   $(this).children().text(distanceX+", "+distanceY );
                //               }
                //           })

                // wariant bez wartoci bewzględnej - przesunięcie elementu
// event wywołany na
                var distanceXleft = targetParent.getAttribute('data-x') - $(this).attr('data-x');
                var distanceYtop = targetParent.getAttribute('data-y') - $(this).attr('data-y');
                console.log("this: " + targetParent.getAttribute('data-x'), targetParent.getAttribute('data-y'), " f:" + $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceXleft, "dist Y: " + distanceYtop);
//fragment.children().attr('class', 'reflexion');
                var moveX = -20% + distanceXleft * 40;
                var moveY = -22% + distanceYtop * 40;

                $(this).children().attr('class', "");
                $(this).children().addClass('reflexion'); // lub classToggle()
                $(this).children().finish().animate({'left': moveX, 'top': moveY}, 100);


                //if ((distanceXleft == 0) && ( distanceYtop == 0)) {
                //    $(this).children().attr('class', "");
                //    $(this).children().addClass('reflexion'); // lub classToggle()
                //    $(this).children().animate({'left': '0', 'top': '0'});
                //    $(this).children().text(distanceXleft + ", " + distanceYtop);
                //}
                //else if (((distanceXleft == 1) && ( distanceYtop <= 1)) || ((distanceXleft == 0) && ( distanceYtop <= 1))) {
                //    $(this).children().attr('class', "");
                //    $(this).children().addClass('reflexion'); // lub classToggle()
                //    $(this).children().animate({'left': '0', 'top': '0'});
                //    $(this).children().text(distanceXleft + ", " + distanceYtop);
                //}
                //else if (((distanceXleft == 2) && ( distanceYtop <= 2)) || ((distanceXleft <= 1) && ( distanceYtop <= 2))) {
                //    $(this).children().attr('class', "");
                //    $(this).children().addClass('reflexion'); // lub classToggle()
                //    $(this).children().text(distanceXleft + ", " + distanceYtop);
                //}
                //else if (((distanceXleft == 3) && ( distanceYtop <= 3)) || ((distanceXleft <= 2) && ( distanceYtop <= 3))) {
                //    $(this).children().attr('class', "");
                //    $(this).children().addClass('reflexion'); // lub classToggle()
                //    $(this).children().text(distanceXleft + ", " + distanceYtop);
                //}
                //else {
                //    $(this).children().attr('style', "");
                //    $(this).children().addClass('reflexion');
                //    //            lub classToggle()
                //    $(this).children().text(distanceXleft + ", " + distanceYtop);
                //}
            });

            // wariant z x+y -> promieniście romboidalny


        });

        //fragment.on('mouseleave', function (event) {
        //            $(this).removeClass('red-0');
        //        });


    }

    scope();
});
