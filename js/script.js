var allowedWords = dictionary.commonWords;

$('button').click(function() {
    var words = $('textarea').val().split(' ');
    var text = '';
    for (var i = 0; i < words.length; i++) {
        if (allowedWords.indexOf(words[i]) === -1) {
            text += '<span>' + words[i] + ' </span>';
        } else {
            text += words[i] + ' ';
        }
    }
    $('p').html(text);
});
