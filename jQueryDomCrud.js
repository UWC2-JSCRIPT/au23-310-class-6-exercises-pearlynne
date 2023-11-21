$(document).ready(function () {

	// Create a new <a> element containing the text "Buy Now!"
	// with an id of "cta" after the last <p>
	let $newA = $('<a>'); 			// need angle brackets to create
	$newA.text('Buy now!');
	$newA.attr('id', 'cta');

	$newA.insertAfter('p');


	// Access (read) the data-color attribute of the <img>,
	// log to the console
	const $img = $('img');
	const $imgColor = $img.attr('data-color');
	console.log($imgColor);


	// Update the third <li> item ("Turbocharged"),
	// set the class name to "highlight"
	const $allLi = $('li');
	const $thirdLi = $allLi.eq(2);
	$thirdLi.toggleClass("highlight"); 	// addClass works too


	// Remove (delete) the last paragraph
	// (starts with "Available for purchase now…")
	$('p').remove();


	// Create a listener on the "Buy Now!" link that responds to a click event.
	// When clicked, the the "Buy Now!" link should be removed
	// and replaced with text that says "Added to cart"
	$newA.on('click', function () {
		$(this).text("Added to cart");
	});
});