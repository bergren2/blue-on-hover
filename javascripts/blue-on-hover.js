$(document).ready(function () {
    var boringHTML = $('body').html();
    var blueHTML = boringHTML.replace(/>([^<]+)</g, '>BLUEONHOVER$1BLUEONHOVER<');
    var blueArray = blueHTML.split('BLUEONHOVER');
    for (i = 0; i < blueArray.length; i++) {
        if (i % 2 === 1) blueArray[i] = blueArray[i].replace(/(\w)/g, '<span class="blue">$1</span>');
    }
    var bluerHTML = blueArray.join('');
    $('body').html(bluerHTML);
});
