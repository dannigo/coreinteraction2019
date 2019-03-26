//CHECK IF DOCUMENT IS READY
$(document).ready(function(){

    let name = 'Danni Go'; //string = text
    let time = new Date();
    let ticker = 0;
    let ticker2 = 0;
    let colors = ['#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965',
                  '#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965',
                  '#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965',
                  '#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965',
                  '#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965',
                  '#6696ba', '#e2e38b', '#e7a553', '#7e4b68', '#292965'];
    
    let colors2 = ['#131862', '#2e4482', '#546bab', '#87889c', '#bea9de',
                   '#131862', '#2e4482', '#546bab', '#87889c', '#bea9de',
                   '#131862', '#2e4482', '#546bab', '#87889c', '#bea9de',
                   '#131862', '#2e4482', '#546bab', '#87889c', '#bea9de',
                   '#131862', '#2e4482', '#546bab', '#87889c', '#bea9de',
                   '#131862', '#2e4482', '#546bab', '#87889c', '#bea9de'];


    let colors3 = ['#6B4984', '#483475', '#2B2F77', '#141852', '#070B34',
                   '#6B4984', '#483475', '#2B2F77', '#141852', '#070B34',
                   '#6B4984', '#483475', '#2B2F77', '#141852', '#070B34',
                   '#6B4984', '#483475', '#2B2F77', '#141852', '#070B34',
                   '#6B4984', '#483475', '#2B2F77', '#141852', '#070B34',
                   '#6B4984', '#483475', '#2B2F77', '#141852', '#070B34'];
    
    //array = list, inside '' and brackets, starts at 0
                //  0         1        2       3       4          5
    //console.log(colors[5]) calls a function; starts from 0

//CHANGE CSS
    $('p').css('font-size', '30px'); //numbers become strings when in ''
    $('p').css('color', 'white');

//CREATE A FUNCTION
function getTime() {
    time = new Date();

    //CHANGE HTML
    $('#name').text(name);
    $('#time').text(time);
    $('#ticker').text(ticker);
    $('#ticker2').text(ticker2);
    //to target something, indicate a selector using $; ('  ') for #id or .class; inside text, define text you want in there;

    let rotate = 'rotate(' + ticker + 'deg)'; 
    $('#clock').css('transform', rotate); //elements are strings, 
    $('#clock').css('background-color', colors[ticker2]); //adds the array of colors to ticker2 += 1

    $('#clock2').css('transform', rotate);
    $('#clock2').css('background-color', colors2[ticker2]);


    $('#ticker').css('transform', rotate);
    $('#ticker').css('font-size', '70px');
    $('#ticker').css('color', 'white');
    $('#ticker2').css('color', 'white');
    $('#ticker2').css('font-size', '30px');
    $('body').css('background-color', colors3[ticker2]);



    ticker += 1;
    ticker2 += 1;
    //make ticker+= 10

    if(ticker >=150) { //if ticker equals 204, make it 0
        ticker = 0;
    }

    if(ticker2 >=10) { //if ticker2 equals 11, make it 0
        ticker2 = 0;
    }

    }

//getTime() calls the function
getTime();

setInterval(function(){
    //call it every second
    getTime();

},1000)


}) //end document ready function; stuff is within curly brackets