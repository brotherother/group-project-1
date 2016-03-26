// On hitting the search submit button, data fields are loaded into 
$('#search-submit').on('click'), function() {
	var local = $('#addressInput').val.trim() + $('#cityInput').val.trim() + $('#stateInput').val.trim() + $('#zipInput').val.trim()
	var radius = $('#radius').val.trim();
	var numberOfResults = $('#numberOfResults').val.trim();

	console.log(local);
	renderResults(location, radius, nubmer);
};

function renderResults(location, radius, number) {
	$('#resultsView').empty();

	var queryURL = "http://api.sqoot.com/v2/coupons?location=" + location  + "&radius=" + radius + "&per_page=" + number + "&api_key=dlmxb4";

	console.log(results.coupons);

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		var results = response.coupons;
		console.log(respo.coupons);
		for (var i = 0; i < numberOfResults; i++) {
			var a = $('<button>');
			a.id('couponResult' + i);
			a.addClass('coupon-result');
			a.attr('deal-description', results.coupons[i].description);
			a.attr('address', results.coupons[i].address);
			a.attr('chosen-status');
			$('#results').prepend(a);
		};
	});
};

	
	





