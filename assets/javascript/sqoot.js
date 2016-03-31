$(document).ready(function(){
	$('#searchButton').click(function() {
		var location = $('#addressInput').val().trim() + $('#cityInput').val().trim() + $('#stateInput').val().trim() + $('#zipInput').val().trim()
		console.log(location);
		location = encodeURIComponent(location);
		console.log(location);
		var radius = $('#radiusInput').val().trim();
		console.log(radius);
		// var numberOfResults = $('#resultsNumberInput').val().trim();
		$('#resultsView').empty();

		var queryURL = "http://api.sqoot.com/v2/deals?location="+location+"&radius="+radius+"&category_slugs=bars-clubs&api_key=cfdos8";

		console.log(queryURL);

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			var results = response.deals;
			console.log(results);
			for (var i = 0; i < results.length; i++) {
			var resultDiv = $('<div>');
			var p = $('<p>').text(results[i].deal.title);
			var resultImage = $('<img>').attr("src", results[i].deal.image_url);
			resultDiv.append(p);
			resultDiv.append(resultImage);
			$('#resultsView').prepend(resultDiv);			
  			}	
		}); 
	}); 
});		