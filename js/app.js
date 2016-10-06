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

        teethLink.on('mouseover', function () {
            var trickDescription = $(this).data('trick');
            console.log(trickDescription);
            aboutText.text(trickDescription);
        });


    }

    tricksList();


});