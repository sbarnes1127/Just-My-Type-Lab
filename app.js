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
$(document).keyup(function () {
    $('.keyHighlight').removeClass('keyHighlight');
})

//inserts first sentence of the array into the #sentence div. console logs if the keypress is the same key as the next expected character in the sentence.
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let sentenceIndex = 0;
let charIndex = 0;
let currentSentence = sentences[sentenceIndex];
let currentLetter = currentSentence.charAt(charIndex);


$('#sentence').text(currentSentence);
$('#target-letter').text(currentLetter);
//function checks if keypress is equal to the character the sentence is on. if it is, then it will toggle the current character to the next in the sentence. if character reaches end of sentence, sentence is deleted.
function checkCharacter(currentSentence, pressedKey) {
    if (sentenceIndex < sentences.length) {
        if (charIndex < currentSentence.length) {
            if (currentLetter == pressedKey) {
                charIndex++;
                console.log('correct character');
                currentLetter = currentSentence.charAt(charIndex);
                $('#target-letter').text(currentLetter);
                $('#yellow-block').animate({'marginLeft' : '+=17.5px'});
                $('#yellow-block').finish();
                $('#feedback').append('<span class=\'glyphicon glyphicon-ok\'></span>');
            }
        } else {
            console.log('last letter of the sentence');
            toggleSentence();
        }
    }
}

$('body').keypress(function (e) {
    checkCharacter(currentSentence, e.key);
})

function toggleSentence() {
    charIndex = 0;
    sentenceIndex++;
    currentSentence = sentences[sentenceIndex];
    currentLetter = currentSentence.charAt(charIndex);
    $('#sentence').text(currentSentence);
    $('#target-letter').text(currentLetter);
    $('#yellow-block').removeAttr('style');
    $('#feedback').empty();
}