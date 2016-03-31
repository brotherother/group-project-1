$(document).ready(function(){
	$('#resultsView').hide();
	$('#resultsMap').hide();
  $('#returnButtonDiv').hide();
    $('#searchButton').click(function() {
       console.log("making sure this works");
       $('#resultsView').show();
       $('#resultsMap').show();
       $('#returnButtonDiv').show();
       $('#searchForm').hide();
       return false;
    });
    $('#returnButton').click(function() {
       console.log("making sure this works");
       $('#resultsView').hide();
       $('#resultsMap').hide();
       $('#returnButtonDiv').hide();
       $('#searchForm').show();
       $('#addressInput').val("");
       $('#cityInput').val("");
       $('#stateInput').val("");
       $('#zipInput').val("");
       $('#radiusInput').val("");
       return false;
    });
});