/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    var sceneScope = $('.containerScope');
    var fragment = sceneScope.find('.fragment');
    var reflex = fragment.find('.reflex');

    var numOfCols = 8;
    var numOfRows = 6;

    function scope() {

        //reflex.each(function (idx, el) {
        //    $(this).on('click', function (event) {
        //        $(this).addClass('red-0');
        //        var targetX = $(this).parent().attr('data-x');
        //        var targetY = $(this).parent().attr('data-y');
        //        console.log(targetX, targetY);
        //
        //    });
        //    $(this).on('mouseleave', function (event) {
        //        $(this).removeClass('red-0');
        //    });
        //});

        fragment.on('mouseover', function (event) {

            //for (var n = 0; n < fragment.length; n++) {
            fragment.each(function (idx, el) {

                //console.log(event.target.getAttribute('class'));

                var distanceX = Math.abs(event.target.getAttribute('data-x')- $(this).attr('data-x'));
                var distanceY = Math.abs(event.target.getAttribute('data-y')- $(this).attr('data-y'));
                console.log("this: "+event.target.getAttribute('data-x'),event.target.getAttribute('data-y'), " f:"+ $(this).attr('data-x'), $(this).attr('data-y'), "dist X: " + distanceX, "dist Y: " + distanceY);


                if ((distanceX == 0) && ( distanceY == 0)) {
                    $(this).attr('class', "");
                    $(this).addClass('red-0'); // lub classToggle()
                    $(this).text(distanceX+", "+distanceY );
                }
                else if (((distanceX == 1) && ( distanceY <= 1)) || ((distanceX == 0) && ( distanceY <= 1))) {
                    $(this).attr('class', "");
                    $(this).addClass('red-1'); // lub classToggle()
                    $(this).text(distanceX+", "+distanceY );
                }
                else if (((distanceX == 2) && ( distanceY <= 2))  || ((distanceX <= 1) && ( distanceY <= 2))) {
                    $(this).attr('class', "");
                    $(this).addClass('red-2'); // lub classToggle()
                    $(this).text(distanceX+", "+distanceY );
                }
                // …





                else {
                    $(this).attr('style', "");
                    $(this).addClass('red-5');
                    // lub classToggle()
                    $(this).text(distanceX+", "+distanceY );
                }
            })
        });

        //fragment.on('mouseleave', function (event) {
        //            $(this).removeClass('red-0');
        //        });


    }

    scope();
});
