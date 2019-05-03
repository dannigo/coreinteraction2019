$(document).ready(function() {

    //DRAG//
    $(".passDrag").draggable({
        cursor: "grabbing"
        });

    //EXIT PASS POP-UP//
    $('.close').click(function(){
        //You need to change the letiable $popup to make it equal the popup that the close button is inside of
        //Lookup the .parents() method on this page https://learn.jquery.com/using-jquery-core/traversing/
        //Remember, $(this) will equal the .close div inside of the .popup
        $popup = $(this).parent();
        //This will create an error while $popup = null
        $popup.removeClass('open');
    });

    
    //OPEN PASS POP-UP//
    $('.passDrag').dblclick(function(){
        let popupID = $(this).attr('data-id');
        console.log('popupID:' + popupID);
        //Make $popup equal the .popup with the ID referenced in popupID.
        $popup = $('.popup#' + popupID)  ;
        //This will create an error while $popup = null
        $popup.addClass('open');
    });



    let topZ = 10;
    //BRING TO FRONT ON CLICK
    $('.passDrag').click(function(){

        //I'm changing this because there was no way to bring a pass in front of one that already
        //been clicked. Eventually they will all be at 100001. This creates the topZ OUTSIDE of the function
        //and adds to it everytime you click a pass, that way the number is always increasing
        topZ = topZ + 1 ;
        $(this).css('z-index', topZ);
        //Open the browser console and you can see this number growing
        // console.log('New z-index:'+topZ);
    });
        
});