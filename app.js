$('#keyboard-upper-container').hide();
$(document).keydown(function (e) {
    if (e.shiftKey == true) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    } 
})
$(document).keyup(function () {
    $('#keyboard-upper-container').hide();
    $('#keyboard-lower-container').show();
})