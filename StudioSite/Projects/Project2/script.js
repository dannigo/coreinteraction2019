$(document).ready(function(){

    let wordsOne = ['self', 'hope', 'luck', 'haze', 'even', 'ROSE', 'IRIS', 'look', 'odds', 'root', 'ZEAL', 'dusk', 'faux', 'lace', 'luxe', 'mass', 'sole', 'fill', 'fuck', 'semi', 'unit', 'heal', 'head', 'cure', 'cusp'];

    let wordsTwo = ['LOSS', 'LOST', 'HERE', 'FLUX', 'SOLO', 'ECHO', 'BEST', 'DAZE', 'LIES', 'VICE', 'BURY', 'CAST', 'FUSE', 'HUSH', 'EMIT', 'AXIS', 'MESS', 'FURY', 'LIKE', 'TYPE', 'FORE', 'APEX', 'BASE', 'DENY', 'YORE'];

    function randomWordsOne() {
        let randomOne = wordsOne[Math.floor(Math.random()*wordsOne.length)]

        $("#self").text(randomOne);
    }

    setInterval(randomWordsOne, 2050);

    function randomWordsTwo() {
        let randomTwo = wordsTwo[Math.floor(Math.random()*wordsTwo.length)]

        $("#loss").text(randomTwo);
    }
    
    setTimeout(function(){
        setInterval(randomWordsTwo, 1025);
    },1025)

    $('.buttonBlend').click(function(){
        let exclusionBlend = 'exclusion';
        let clickHide = 'hidden';

        $('.word').css('mix-blend-mode', exclusionBlend);
        $('.buttonBlend').css('visibility', clickHide)
    });

    $('.buttonCMYK').click(function(){
        let colorsCMYK1 = ['cyan', 'magenta', 'yellow'];
        let colorsCMYK2 = ['magenta', 'yellow', 'cyan'];

        let randomCMYK1 = colorsCMYK1[Math.floor(Math.random()*colorsCMYK1.length)];
        let randomCMYK2 = colorsCMYK2[Math.floor(Math.random()*colorsCMYK2.length)];

        let clickOffBlend = 'normal';
        let clickHide = 'hidden';

        $('.word').css('mix-blend-mode', clickOffBlend);
        $('#self').css('color', randomCMYK1);
        $('#loss').css('color', randomCMYK2);
        $('.buttonCMYK').css('visibility', clickHide)
    });

    $('.buttonCMYKBlend').click(function(){
        let colorsCMYK1 = ['cyan', 'magenta', 'yellow'];
        let colorsCMYK2 = ['magenta', 'yellow', 'cyan'];

        let randomCMYK1 = colorsCMYK1[Math.floor(Math.random()*colorsCMYK1.length)];
        let randomCMYK2 = colorsCMYK2[Math.floor(Math.random()*colorsCMYK2.length)];

        let exclusionBlend = 'exclusion';
        let clickHide = 'hidden';

        $('.word').css('mix-blend-mode', exclusionBlend);
        $('#self').css('color', randomCMYK1);
        $('#loss').css('color', randomCMYK2);
        $('.buttonCMYKBlend').css('visibility', clickHide)
    });

    $('.buttonNormal').click(function(){
        let colorWhite = '#ffffff';
        let clickHide = 'hidden';
        let clickOffBlend = 'normal';
        let clickShow = 'visible';

        $('.word').css('mix-blend-mode', clickOffBlend);
        $('.word').css('color', colorWhite);
        $('.buttonNormal').css('visibility', clickShow)
        $('.buttonBlend').css('visibility', clickShow)
        $('.buttonCMYK').css('visibility', clickShow)
        $('.buttonCMYKBlend').css('visibility', clickShow)
    });

})