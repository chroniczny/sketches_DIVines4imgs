/**
 * Created by jakub_000 on 2016-09-15.
 */
$(document).ready(function () {

    function tricksShow() {

        console.log('działa lightbox?');
var linkToTrick = $('a');

        var lightBox = $('#lightbox');
        var contForIframe = lightBox.find('linkToTrick');
        var showTrick = contForIframe.find('iframe');

        lightBox.hide();

        linkToTrick.on('click', function(event) {
            event.preventDefault();
            showTrick.attr("src", ""); // zeruję dotychczasowy atrybut

            var linkToTrick = $(this).data('link');
            showTrick.attr("src", linkToTrick);
            lightBox.show();
            //lightBox.addClass('showTrick');

        })

    }
    tricksShow();



});