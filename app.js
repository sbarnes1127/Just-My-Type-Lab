$('#keyboard-upper-container').hide();

//function toggles to show upper keyboard if shift key is pressed down
$(document).keydown(function (e) {
    if (e.shiftKey == true) {
        $('#keyboard-upper-container').show();
        $('#keyboard-lower-container').hide();
    }
})

//function toggles to show lower keyboard if shift key is released
$(document).keyup(function (e) {
    if (e.shiftKey == false) {
        $('#keyboard-upper-container').hide();
        $('#keyboard-lower-container').show();
    }
})
//function gets the id of the key that is pressed, and gives it a class that has a background color of yellow.
$(document).keypress(function (e) {
    $('#' + e.keyCode).addClass('keyHighlight');
})
//function takes away the class when the key is no longer pressed.
$(document).keyup(function (e) {
    $('.keyHighlight').removeClass('keyHighlight');
})