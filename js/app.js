/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {


    function jinn() {

        var scene = $('.jinnContainer');
        var elem = scene.find('.jinnF');
        var elem1 = scene.find('.Fragm-1');
        var redP = scene.find('.redpoint');

        var oldMousePositionX = 0; // client bo działam w obszarze div...
        var oldMousePositionY = 0;

        console.log(oldMousePositionX, oldMousePositionY);
// ustawiam elementy w css, a nie tutaj

        scene.on('mousemove', function (event) {
            // 5.
            elem.removeClass('go-back');
            var currentMousePositionX = event.clientX; // czy clientX? nie wiem czy tu to coś zmienia
            var currentMousePositionY = event.clientY;

            if (event.target != this) { // jeśli wjezdzam na kwadrt to nie rób tego eventu...
                //console.log(event.target);
                elem.addClass('go-back'); // odbiera klasę go-back żeby zrobić łagodny transition
                // powraca do pozycji wyjściowej
                return;
            }

            var mouseMoveX = currentMousePositionX - oldMousePositionX; // old
            var mouseMoveY = currentMousePositionY - oldMousePositionY;

            elem.each(function (idx, el) {
                //powrót do pozycji bazowej:
                var basePosX = $(this).attr('data-right');
                console.log(basePosX);
                var basePosY = $(this).attr('data-top');
                console.log(basePosY);
                $(this).position({
                    'left': basePosX,
                    'top': basePosY
                });

                // uzależniam poz elementu od pozycji myszki
                var speed = $(this).attr('data-speed');
                //console.log(speed);
                var movLeftPos = $(this).offset().left + mouseMoveX * speed;
                var movTopPos = $(this).offset().top + mouseMoveY * speed;

                $(this).offset({
                    'left': movLeftPos,
                    'top': movTopPos
                });
            });

            oldMousePositionX = currentMousePositionX;
            oldMousePositionY = currentMousePositionY;
        });

// interesujące co się dzieje be ponizszego kodu...
        scene.on('mouseout', function (event) { // po opuszczeniu sceny przez myszkę...

            // przy wejściu usuwam clasę go-back, przy opuszczaniu ją nadaję...
            // clasa goback ma 'transition: all 1s'
            elem.addClass('go-back');

            elem.attr('data-left', elem.clientX); // przy opuszczaniu zapamiętuję położenie elementów, żeby
            // je wykorzystać do wyjścia przy wjeździe
            elem.attr('data-top', elem.clientY);

            elem.attr('style', "");

        });
    }

    jinn();
});