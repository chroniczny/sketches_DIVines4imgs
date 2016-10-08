/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    function tricksList() {

        console.log('działa TRICKS');
        var about = $('.bio');
        var tricks = $('.tricks');
        var nose = $('.nose');

        var menuBio = $('.respBio');
        var menuTricks = $('.respTricks');

        var aboutField = $('.about'); // do znikania
        var aboutText = aboutField.find('.bioText').children(); // do komunikacji

        var topTeeth = $('.topTeeth');
        var bottomTeeth = $('.bottomTeeth');

        var teethLink = $('.mouth').find('a'); // events: mouse enter; click

        topTeeth.hide();
        aboutField.hide();
        bottomTeeth.hide();



        tricks.on('click', function () {
            console.log('clicked Tricks');
            //aboutField.find('iframe').remove();
            topTeeth.slideToggle(500);
            bottomTeeth.slideToggle(500);
        });

        about.on('click', function () {
            console.log('clicked Bio');
            //aboutField.find('iframe').remove();
            aboutField.slideToggle(500);
        });

        menuTricks.on('click', function () {
            console.log('clicked respTricks');
            //aboutField.find('iframe').remove();
            topTeeth.slideToggle(500);
            bottomTeeth.slideToggle(500);
        });

        menuBio.on('click', function () {
            console.log('clicked respBio');
            //aboutField.find('iframe').remove();
            aboutField.slideToggle(500);
        });

        about.on('mouseenter', function () {
            console.log('enter Bio');
            var bioDescription = about.data('bio');
            console.log(bioDescription);
            aboutText.text(bioDescription);
        });

        menuBio.on('mouseenter', function () {
            console.log('enter Bio');
            var bioDescription = about.data('bio');
            console.log(bioDescription);
            aboutText.text(bioDescription);
        });

        teethLink.on('mouseenter', function () {

            console.log(trickDescription);
            //aboutField.find('iframe').remove(); // czyszczenie iframea z pola żeby było miejsce na kolejną iframe
            var trickDescription = $(this).data('trick'); // nazwa konkretnego tricka
            aboutText.text(trickDescription); // do pola opisu nazwa tricka
            //aboutText.find('div').css({'display':'none'});
            //aboutText.append('<iframe src="../index00_caleidoscope1.html" class="col-10" style="height: 10vh;"></iframe>');

            aboutField.slideDown(500); // pojawia się też pole z tekstem

        });
        teethLink.on('mouseout', function () {
            //var trickDescription = $(this).data('trick');
            //console.log(trickDescription);

            aboutField.slideDown(500); // pojawia się też pole z tekstem
        });

    }

    tricksList();


    function goDottyReflexion() {

        var scene = $('.topFace');
        var oldMousePositionY = 0;

        var nose = $('.nose');
        var lightDotFrst = nose.find('.lightDot1');
        var lightDotScnd = nose.find('.lightDot2');
        scene.on('mouseover', function(event) {

            var mousePositionY = event.clientY;
            var heightOfScene = scene.innerHeight();

            var degRotation = 175*(mousePositionY/heightOfScene);
            console.log(heightOfScene);
            console.log(degRotation+' degrees');
            lightDotFrst.css({"transform" : 'rotate('+degRotation +'deg)', "transition": 'all 0.1s'});
            lightDotScnd.css({"transform" : 'rotate('+ -degRotation +'deg)', "transition": 'all 0.1s'});
        })
    }
    goDottyReflexion();
});