$(document).ready(function(){

    let width = $(document).width() - 100;
    let height = $(document).height() - 100;

    let shapes = [$('.dash')];
    let moon = [$('.circle')];
    let stars = [$('.star'), $('.star:before'), $('.star:after')];
    let chev = [$('.square1')];

    function randomStuff(){
        let randomShape = shapes[ Math.floor(Math.random() * shapes.length) ];
        let clone = randomShape.clone().appendTo('body');
        let randomRotate = 'rotate(' + Math.random() * 100 + 'deg)';

        clone.last().css('left', Math.random() * width )
        clone.last().css('top', Math.random() * height )
        clone.last().css('transform', randomRotate)

    }

    function randomStuff2(){
        let randomStar = stars[ Math.floor(Math.random() * stars.length) ];
        let clone2 = randomStar.clone().appendTo('body');
        let randomRotate = 'rotate(' + Math.random() * 100 + 'deg)';

        clone2.last().css('left', Math.random() * width )
        clone2.last().css('top', Math.random() * height )
        clone2.last().css('transform', randomRotate)
    }

    function randomStuff3(){
        let randomChev = chev[ Math.floor(Math.random() * chev.length) ];
        let clone3 = randomChev.clone().appendTo('body');
        let randomRotate = 'rotate(' + Math.random() * 100 + 'deg)';

        clone3.last().css('left', Math.random() * width )
        clone3.last().css('top', Math.random() * height )
        clone3.last().css('transform', randomRotate)
    }

    function randomStuff4(){
        let randomMoon = moon[ Math.floor(Math.random() * moon.length) ];
        let clone4 = randomMoon.clone().appendTo('body');
        let randomRotate = 'rotate(' + Math.random() * 100 + 'deg)';

        let colors = ["#DDC4E8", "#f7edfc"];
        let randomNumber = Math.random()* colors.length;
        let randomColor = colors[Math.floor(randomNumber)];

        clone4.last().css('left', Math.random() * width)
        clone4.last().css('top', Math.random() * height)
        clone4.last().css('transform', randomRotate)
        clone4.last().css('background-color', randomColor)
    }


    setInterval(function(){

        randomStuff();

    },200)

    setInterval(function(){

        randomStuff2();

    },600)

    setInterval(function(){

        randomStuff3();

    },400)

    setInterval(function(){

        randomStuff4();

    },500)

})