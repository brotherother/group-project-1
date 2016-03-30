// On hitting the search submit button, data fields are loaded into 
$(document).ready(function(){
	$('#searchButton').click(function() {
		var location = $('#addressInput').val().trim() + $('#cityInput').val().trim() + $('#stateInput').val().trim() + $('#zipInput').val().trim()
		console.log(location);
		debugger;
		location = encodeURIComponent(location);
		console.log(location);
		debugger;
		var radius = $('#radiusInput').val().trim();
		debugger;
		console.log(radius);
		debugger;
		// var numberOfResults = $('#resultsNumberInput').val().trim();
		renderResults(location, radius, numberOfResults);
	});


});


function renderResults(location, radius, numberOfResults) {
	$('#resultsView').empty();

	var queryURL = "http://api.sqoot.com/v2/coupons?location=" + location  + "&radius=" + radius + "&per_page=" + numberOfResults + "&api_key=dlmxb4";

	console.log(queryURL);
	console.log(results.coupons);

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		var results = response.coupons;
		console.log(response.coupons);
		for (var i = 0; i < numberOfResults; i++) {
			var a = $('<button>');
			a.attr('id', 'couponResult' + i);
			a.addClass('coupon-result');
			a.attr('deal-description', results[i].coupon.description);
			console.log(results[i].coupon.description);
			a.attr('address', results[i].coupon.address);
			a.attr('chosen-status');
			$('#results').prepend(a);
		};
	});
};

	
	





