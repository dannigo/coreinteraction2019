$(document).ready(function(){

    let width = $(document).width() - 100;
    let height = $(document).height() - 100;

    let shapes = [$('.circle'), $('.square'), $('.triangle')]

    function randomStuff(){
    let randomShape = shapes[ Math.floor(Math.random() * shapes.length) ];
    let clone = randomShape.clone().appendTo('body');

    clone.last().css('left', Math.random() * width )
    clone.last().css('top', Math.random() * height )

    }


    setInterval(function(){

        randomStuff();
    },100)

})
