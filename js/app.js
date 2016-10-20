/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    $('.preloader').fadeOut(1500);

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

        var lightBox = $('#lightbox');
        var frameTrick = $('iframe');

        topTeeth.hide();
        aboutField.hide();
        bottomTeeth.hide();

        tricks.on('click', function () {
            console.log('clicked Tricks');
            topTeeth.slideToggle(500);
            bottomTeeth.slideToggle(500);
        });

        about.on('click', function () {
            console.log('clicked Bio');
            aboutField.slideToggle(500);
        });

        menuTricks.on('click', function () {
            console.log('clicked respTricks');
            topTeeth.slideToggle(500);
            bottomTeeth.slideToggle(500);
        });

        menuBio.on('click', function () {
            console.log('clicked respBio');
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

        teethLink.on('mouseenter', function (event) {
            console.log(trickDescription);

            var trickDescription = $(this).data('trick'); // nazwa konkretnego tricka
            aboutText.text(trickDescription); // do pola opisu nazwa tricka
            aboutField.slideDown(500); // pojawia się też pole z tekstem

        });
        teethLink.on('mouseout', function () {

            aboutField.slideDown(500); // pojawia się też pole z tekstem
        });


        var showTrick = lightBox.find('iframe');

        lightBox.hide();

        teethLink.on('click', function (event) {
            event.preventDefault();
            showTrick.attr("src", ""); // zeruję dotychczasowy atrybut

            var linkToTrick = $(this).data('link');
            showTrick.attr("src", linkToTrick);
            lightBox.show();
        });

        lightBox.on('click', function (event) {
            $(this).hide();
        });

        $('body').keydown(function(event) { // zamykanie LIGHTBOXa za pomocą klawisza Esc (27)
            //alert(e.which);
            if(event.which == 27){
                lightBox.hide();
            }

        });

    }

    tricksList();

// ----------- a light reflex on the 'nose' -----------
    function goDottyReflexion() {

        var scene = $(window);
        var oldMousePositionY = 0;

        var nose = $('.nose');
        var lightDotFrst = nose.find('.lightDot1');
        var lightDotScnd = nose.find('.lightDot2');
        scene.on('mouseover', function(event) {

            var mousePositionY = event.clientY;
            var heightOfScene = scene.innerHeight();

            var degRotation = 175 * (mousePositionY / heightOfScene);
            console.log(heightOfScene);
            console.log(degRotation + ' degrees');
            lightDotFrst.css({"transform": 'rotate(' + degRotation + 'deg)', "transition": 'all 0.2s'});
            lightDotScnd.css({"transform": 'rotate(' + -degRotation + 'deg)', "transition": 'all 0.2s'});
        })
    }

    goDottyReflexion();


});