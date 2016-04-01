$(document).ready(function(){
	$('#searchButton').click(function() {
		var location = $('#addressInput').val().trim() + $('#cityInput').val().trim() + $('#stateInput').val().trim() + $('#zipInput').val().trim()
		console.log(location);
		location = encodeURIComponent(location);
		console.log(location);
		var radius = $('#radiusInput').val().trim();
		console.log(radius);
		$('#resultsView').empty();

		var queryURL = "http://api.sqoot.com/v2/deals?location="+location+"&radius="+radius+"&category_slugs=bars-clubs&api_key=cfdos8";

		console.log(queryURL);

		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			var results = response.deals;
			console.log(results);
			for (var i = 0; i < results.length; i++) {

			var resultDiv = $('<div>').attr("class", "resultDiv"); //creates div to hold button

			var p = $('<button>').text(results[i].deal.short_title).attr("id", "resultButton").attr("type", "button").attr("class", "btn btn-primary btn-lg").attr("data-toggle", "modal").attr("data-target", "#myModal"); //creates button with short title as text, and opens modal

			var resultTitle = $('<p>').text(results[i].deal.title); //creates p element with title of deal

			resultDiv.append(p); //append button to div

			$('#resultsView').append(resultDiv); //append button divs to resultsView container

			$('#resultButton').click(function(){
				$('.modal-title').append(resultTitle);
			}); //click function to append deal title to modal title

  			}	
		}); 
	}); 
});		