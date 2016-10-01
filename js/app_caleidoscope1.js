/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {


    function caleidoscope() {

        var scene = $('#caleidoscope');
        var elem = scene.find('.puzzle');
        //var elem22 = $('#puz2row2');
        var pilot = $('#pilot');
        var columns = 4;
        var rows = 4;

        var oldMousePositionX = 0; // client bo działam w obszarze div...
        var oldMousePositionY = 0;

        console.log(oldMousePositionX, oldMousePositionY);

        pilot.on('mousemove', function (event) {

            var currentMousePositionX = event.clientX; // pozycja myszki na scenie
            var currentMousePositionY = event.clientY;

            console.log('22');
            //event.stopPropagation();

            for (var r = 1; r <= rows; r++) {
                for (var k = 1; k <= columns; k++) {
                    var mirror = scene.find('#puz' + k + 'row' + r);
                    if (k % 2 == 0) {
                        if (r % 2 == 0) {
                            mirror.css({"transform": "perspective(800px) rotateX(0) rotateY(0)"});
                        } else {
                            mirror.css({"transform": "perspective(800px) rotateX(180deg) rotateY(0)"});
                        }
                    } else {
                        if (r % 2 == 0) {
                            mirror.css({"transform": "perspective(800px) rotateX(0) rotateY(180deg)"});
                        } else {
                            mirror.css({"transform": "perspective(800px) rotateX(180deg) rotateY(180deg)"});
                        }
                    }
                }
            }


            //var mouseMoveX = currentMousePositionX - oldMousePositionX; // old
            //var mouseMoveY = currentMousePositionY - oldMousePositionY;

            elem.each(function (idx, el) {

                console.log("left: " + currentMousePositionX, " top" + currentMousePositionY);
                for (var r = 1; r <= rows; r++) {
                    for (var k = 1; k <= columns; k++) {
                        var running = scene.find('#puz' + k + 'row' + r);
                        var zeroPosition = running.position();
                        //var zeroPositionY = running.position('top');

                        console.log('position0:' + running.position('left'));

                        if (k % 2 == 0) {
                            if (r % 2 == 0) {
                                running.css({
                                    "left": currentMousePositionX - (1.14*scene.width()), //ok
                                    'top': currentMousePositionY - (1.65*scene.height()) // ok
                                });
                            } else {
                                running.css({
                                    "left": currentMousePositionX - (1.14*scene.width()),//ok
                                    'top': -currentMousePositionY + (0.9*scene.height())
                                });
                            }
                        } else {
                            if (r % 2 == 0) {
                                running.css({
                                    "left": -currentMousePositionX + (0.39*scene.width()),//ok
                                    'top': currentMousePositionY - (1.65*scene.height()) // ok
                                });
                            } else {
                                running.css({
                                    "left": -currentMousePositionX + (0.39*scene.width()),//ok
                                    'top': -currentMousePositionY + (0.9*scene.height())
                                });
                            }
                        }
                    }
                }


                //$(this).children().css({
                //    'left': currentMousePositionX,
                //    'top': currentMousePositionY
                //});


                //oldMousePositionX = currentMousePositionX;
                //oldMousePositionY = currentMousePositionY;
            })
        });

        scene.on('mouseout', function (event) {

            elem.children().attr('style', "");
            scene.addClass('noPuzling');
        })

    }

    caleidoscope();


});