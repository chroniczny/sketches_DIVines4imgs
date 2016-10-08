/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    var sceneScope = $('.containerScope');
    var fragment = sceneScope.find('> div');
    var reflex = fragment.find('.reflex');

    var numOfCols = 8;
    var numOfRows = 6;


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
                        $(this).css({'transform': 'perspective(400px) rotateX(' + n / 2 + 'deg) rotateY(' + n / 2 + 'deg) scale(' + ((n * 0.2) + 0.4) + ')'});
                        $(this).css({'box-shadow': '0 0 27px -1px rgba(0,0,0,0.9)'});
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
