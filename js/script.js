// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){

var giphy_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
var searchTerm = $('input').val();
var userUrl = "https://api.giphy.com/v1/gifs/search?q" + searchTerm + "=puppy&rating=pg&api_key=dc6zaTOxFJmzC"

$.ajax({
        url: giphy_api_url = userUrl,
        method: "GET",
        success: function(response) {
            // YOUR CODE GOES HERE
            var originalImage = response.data[0].images.fixed_width.url;
      $('body').append('<img src ="' + originalImage + '"/>');

        }
    });


});

