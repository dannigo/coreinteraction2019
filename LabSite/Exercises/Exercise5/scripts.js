//When the window opens, EventListener will load a function to (e)
window.addEventListener('load', function(e) {
    //assign appleGrid to all child elements with the specified ID 'apple-grid'
    var appleGrid = document.getElementById('apple-grid');
    //assign appleList to all child elements with the specified ID 'apple-list'
    var appleList = document.getElementById('apple-list');
    //assign appleThumbs to all child elements with the specified ID 'apple-thumbs'
    var appleThumbs = document.getElementById('apple-thumbs');
    //assign gridApples to all child elements with the specified class '.apple'
    var gridApples = document.querySelectorAll('.apple');
    
    //
	gridApples.forEach((gridApple, i) => {
        //for all elements specified under '.apple' -- on click, perform pickApple function
        gridApple.addEventListener('click', pickApple);
	});

    //assign the following to perform the function pickApple
	function pickApple(e) {
        //assign appleGrid to all child elements with the specified ID 'apple-grid'
        var apple = e.target;
        //
        var appleName = apple.dataset.apple.toString();
        
        //assign each item of appleaListItem to as a list element
		var appleListItem = document.createElement('li');

        //arrange each appleList element into an ordered list
        var ol = appleList.querySelector('ol');
        //add appleListItem to an element within an ordered list
        ol.appendChild(appleListItem);
        //
        appleListItem.innerText = appleName;
        

        //add appleListItem to an element within an ordered list
        var appleThumb = apple.cloneNode(true);
        //for each appleThumbs element, add an appleThumb
		appleThumbs.appendChild(appleThumb);

	}

});