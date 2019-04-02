//check if document is ready
$(document).ready(function(){

    let width = $(document).width() - 300;
    let height = $(document).height() - 300;
    let colors = ["#FF7C63", "#0176e3", "#7d899e", "8dc3a7"];
    let colors2 = ["#FDC253", "#0049bf", "#5a8e84", "#ff7c63"];
    let colors3 = ["#3A6872", "#fba021", "#efa395", "#5e7fd9"];
    let colors4 = ["#7E97A3", "#ff7c63", "#fa5e37", "#fba021"];
   
//random color and position every 2 second
    setInterval(function(){
    let positionTop = Math.random() * height + 50 + "px";
        
    let randomNumber = Math.random()* colors.length;
    let randomColor = colors[Math.floor(randomNumber)];
    

    let randomSizeW = Math.random() * 300 +'px';
    let randomSizeH = Math.random() * 300 +'px';
    
    $('#circle').css("top", positionTop)
    $('#circle').css("background-color", randomColor)
    $('#circle').css("width", randomSizeW)
    $('#circle').css("height", randomSizeH)

    },1000)
    
    setInterval(function(){
        let randomRotate = 'rotate(' + Math.random() * 150 + 'deg)';
    
        $('#circle').css("transform", randomRotate)
    
    },1000)

    setInterval(function(){
        let positionLeft = Math.random() * width + 30 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor2 = colors2[Math.floor(randomNumber)];
    
        let randomSizeW = Math.random() * 150 +'px';
        let randomSizeH = Math.random() * 150 +'px';
    
        let randomOpacity = Math.random() * .8 + .8;
    
        $('#circle2').css("right", positionLeft)
        $('#circle2').css("background-color", randomColor2)
        $('#circle2').css("width", randomSizeW)
        $('#circle2').css("height", randomSizeH)
        $('#circle2').css("opacity", randomOpacity)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';
        
            $('#circle2').css("transform", randomRotate)
        
        },1000)


    setInterval(function(){
        let positionLeft = Math.random() * width + 80 + "px";
        let positionTop = Math.random() * height + 80 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor = colors[Math.floor(randomNumber)];
    
        let randomSizeW = Math.random() * 350 +'px';
        let randomSizeH = Math.random() * 350 +'px';
    
        let randomOpacity = Math.random() * 1 + 1;
    
        $('#circle3').css("left", positionLeft)
        $('#circle3').css("bottom", positionTop)
        $('#circle3').css("background-color", randomColor)
        $('#circle3').css("width", randomSizeW)
        $('#circle3').css("height", randomSizeH)
        $('#circle3').css("opacity", randomOpacity)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 270 + 'deg)';
        
            $('#circle3').css("transform", randomRotate)
        
        },1000)
    
    setInterval(function(){
        let positionTop = Math.random() * height + 10 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor3 = colors3[Math.floor(randomNumber)];
    
        let randomSizeW = Math.random() * 150 +'px';
        let randomSizeH = Math.random() * 150 +'px';
        
        $('#circle4').css("bottom", positionTop)
        $('#circle4').css("background-color", randomColor3)
        $('#circle4').css("width", randomSizeW)
        $('#circle4').css("height", randomSizeH)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 180 + 'deg)';
        
            $('#circle4').css("transform", randomRotate)
        
        },1000)

    setInterval(function(){
        let positionLeft = Math.random() * width + 5 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor3 = colors3[Math.floor(randomNumber)];
    
        let randomSizeW = Math.random() * 300 +'px';
        let randomSizeH = Math.random() * 300 +'px';
    
        $('#circle5').css("left", positionLeft)
        $('#circle5').css("background-color", randomColor3)
        $('#circle5').css("width", randomSizeW)
        $('#circle5').css("height", randomSizeH)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 120 + 'deg)';
        
            $('#circle5').css("transform", randomRotate)
        
        },1000)

    setInterval(function(){
        let positionLeft = Math.random() * width + 10 + "px";
        let positionTop = Math.random() * height + 10 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor2 = colors2[Math.floor(randomNumber)];
    
        let randomSizeW = Math.random() * 350 +'px';
        let randomSizeH = Math.random() * 350 +'px';
    
        $('#circle6').css("right", positionLeft)
        $('#circle6').css("top", positionTop)
        $('#circle6').css("background-color", randomColor2)
        $('#circle6').css("width", randomSizeW)
        $('#circle6').css("height", randomSizeH)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 240 + 'deg)';
        
            $('#circle6').css("transform", randomRotate)
        
        },1000)

    setInterval(function(){
        let positionLeft = Math.random() * width + 20 + "px";
        let positionTop = Math.random() * height + 20 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor4 = colors4[Math.floor(randomNumber)];

        let randomOpacity = Math.random() * .8 + .8;
    
        $('#circle7').css("left", positionLeft)
        $('#circle7').css("bottom", positionTop)
        $('#circle7').css("background-color", randomColor4)
        $('#circle7').css("opacity", randomOpacity)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 180 + 'deg)';
        
            $('#circle7').css("transform", randomRotate)
        
        },1000)

    setInterval(function(){
        let positionLeft = Math.random() * width + 25 + "px";
        let positionTop = Math.random() * height + 25 + "px";
            
        let randomNumber = Math.random()* colors.length;
        let randomColor2 = colors2[Math.floor(randomNumber)];

        let randomOpacity = Math.random() * .8 + .8;
    
        $('#circle8').css("left", positionLeft)
        $('#circle8').css("top", positionTop)
        $('#circle8').css("background-color", randomColor2)
        $('#circle8').css("opacity", randomOpacity)
    
        },1000)
        
        setInterval(function(){
            let randomRotate = 'rotate(' + Math.random() * 150 + 'deg)';
        
            $('#circle8').css("transform", randomRotate)
        
        },1000)

    setInterval(function(){
            let positionLeft = Math.random() * width + 25 + "px";
                
            let randomNumber = Math.random()* colors.length;
            let randomColor3 = colors3[Math.floor(randomNumber)];
    
            let randomOpacity = Math.random() * .8 + .8;
        
            $('#circle9').css("left", positionLeft)
            $('#circle9').css("background-color", randomColor3)
            $('#circle9').css("opacity", randomOpacity)
        
            },1000)
            
            setInterval(function(){
                let randomRotate = 'rotate(' + Math.random() * 90 + 'deg)';
            
                $('#circle9').css("transform", randomRotate)
            },1000)
            




//end document ready function
})