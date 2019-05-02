$(document).ready(function(){

    let wordsOne = ['self', 'hope', 'luck', 'haze', 'even', 'ROSE', 'IRIS'];

    let wordsTwo = ['LOSS', 'LOST', 'HERE', 'FLUX', 'SOLO', 'ECHO', 'BEST'];

    let count = 0;

    function randomWordsOne() {
        $("#self").text(wordsOne[count]);
        count < 7 ? count++ : count = 0;
    }

    setInterval(randomWordsOne, 150);

    let count2 = 0;
        function randomWordsTwo() {
            $("#loss").text(wordsTwo[count2]);
            count2 < 7 ? count2++ : count2 = 0;
        }
    
    setInterval(randomWordsTwo, 150);

})

