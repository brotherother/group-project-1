// var bars = [];

// function renderBarButtons() {
// 	$('#buttonsView').empty();
// 	for (var i = 0; i < bars.length; i++) {

// 	}

// }

// function display
var bars = [];

$('#search-submit').on('click'), function() {
	var location = $('#location').val.trim();
	var radius = $('#radius').val.trim();
	var numberOfResults = $('#numberOfResults').val.trim();

	renderResults(location, radius, nubmer);
}


function renderResults(location, radius, number) {
	$('#resultsView').empty();

	var queryURL = "http://api.sqoot.com/v2/coupons?location=" + location + "&radius=" + radius + "&per_page=" + number + "&api_key=dlmxb4";

	console.log(results.coupon);

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		var results = response.coupon;
		for (var i = 0; i < numberOfResults; i++) {
			var a = $('<button>');
			a.id('couponResult' + i);
			a.addClass('coupon-result');
			a.attr('deal-description', results[i].description);
			a.attr('address', results[i].address);
			a.attr('chosen-status');
			$('#resultsView').prepend(a);
		};
	});


};

	
	



}

