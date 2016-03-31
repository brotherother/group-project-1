// On hitting the search submit button, data fields are loaded into 
$(document).ready(function(){

	$('#searchButton').click(function() {
		var location = $('#addressInput').val().trim() + $('#cityInput').val().trim() + $('#stateInput').val().trim() + $('#zipInput').val().trim()
		location = encodeURIComponent(location);
		var radius = $('#radiusInput').val().trim();
		// var numberOfResults = $('#resultsNumberInput').val().trim();
		renderResults(location, radius);
	});


});


function renderResults(location, radius) {
	$('#resultsView').empty();

	var queryURL = "http://api.sqoot.com/v2/coupons?location=" + location  + "&radius=" + radius + "&api_key=dlmxb4";

	console.log(queryURL);
	// console.log(results.coupons);

	$.ajax({
		url: queryURL, 
		dataType: 'jsonp', 
		method: 'GET',
		success: function(data) {
			var results = data.coupons;
			console.log(data.coupons);
			for (var i = 0; i < results.length; i++) {
				$('#resultsView').append('<button>' + results[i].coupon.title + '</button>');


					
				// var a = $('<button>');
				// a.attr('id', 'couponResult' + i);
				// a.addClass('coupon-result');
				// a.attr('deal-description', results[i].coupon.description);
				// console.log(results[i].coupon.description);
				// a.attr('address', results[i].coupon.address);
				// a.attr('chosen-status');
				// $('#results').prepend(a);
			};
		}
	});
};

	
	





