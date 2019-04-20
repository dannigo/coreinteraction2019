$(document).ready(function () {

    $(".passDrag").draggable({
        cursor: "grabbing"
        });

    $('#exitVids').click(function(){
        let clickHide = 'hidden';

        $('#tripVids').css('visibility', clickHide);   
    });

    $('#exitPhotos').click(function(){
        let clickHide = 'hidden';

        $('#tripPhotos').css('visibility', clickHide);   
    });
 
    $('#pass1').dblclick(function(){
        let dblShow = 'visible';

        $('#tripVids').css('visibility', dblShow);   
    });

    $('#pass2').dblclick(function(){
        let dblShow = 'visible';

        $('#tripPhotos').css('visibility', dblShow);   
    });

    // $('#Sept21b').click(function(){
    //     let clickPic = 'visible';

    //     $('.Sept21pic1').css('visibility', clickPic);   
    // });

        
});