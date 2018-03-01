
// need to google how to append an div with an html element using jQuery

// for each topics
// append a button in the div with ID 'buttons'

// this is how you make a button in HTML <button type="button">Click Me!</button>

// things search "append html button to div with jquery"
// for loop ... or jquery loop .. we need a loop to loop over each of these 'topics'

// topics.each do |topic|
// apppend to #buttons  <button type="button">topic</button> 


//  you need to figure out that form where you can add buttons on the fly
//  google ... html form .. you need a submit button
//  when the button is clicked it needs to add a button to the div with ID 'buttons' using jquery


// $.get( "http://api.giphy.com/v1/gifs/search?api_key=cq95qBbevvwLGVueEXDkGy2P7Sy5FwVU&q=" + query, function( data ) {
//     // Data returns an array of results. From each result we care about the embed_url and the rating.
//     // when looking at one of the results
//     // still image
//     // result.images["480w_still"].url
//     // result.rating
//     window.result = data;

//     // loop over data


$(document).ready(function () {
    var listOfshows = ["Simpsons", "Arrested-Development", "The-Office"]
    console.log(listOfshows)

    var btnBox = $("#btn-box")
    for (var i = 0; i < listOfshows.length; i++) {
        var showName = listOfshows[i];
        var searchBtn = $('<button class="gifsearch">' + listOfshows[i] + '</button>')
                btnBox.append(searchBtn)

    }


    // -------


    //hooking into submit button with id selector, which creates a jquery object
    var submitBtn = $('#submitBtn')
    // attaching click handler function to the submit button
    submitBtn.on('click', function (event) {
        // prevent button from submitting page
        event.preventDefault()
        var newSearchTerm = $('#new-search-term').val();
        console.log(newSearchTerm)
        var newSearchBtn = $('<button class="gifsearch">' + newSearchTerm + '</button>')
        btnBox.append(newSearchBtn)

    })


    $(document).on('click', '.gifsearch', function (event) {
        event.preventDefault()
        var qTerm = $(this).text()

   
        var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + qTerm + '&api_key=cq95qBbevvwLGVueEXDkGy2P7Sy5FwVU&limit=10'; 
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            
            
// Data returns an array of results. From each result we care about the embed_url and the rating.
// when looking at one of the results
            var gifsContainer = $("#shows");
            
            var gifs = response.data


            for (var i = 0; i < gifs.length; i++){
            

            var gifsStill = gifs[i].images["480w_still"].url

            var gifLoop = gif[i].images["original"].url

            var rating = gifs[i].rating

            var imageURL = gifsStill;

            var showsImage = $('<img class="shows-image"/>');

            showsImage.attr("src", imageURL);

            var pOne = $("<p>").text("Rating:" + rating);

            $("#shows").append(showsImage).append(pOne);


        }
        $(document).on('click', '.shows-image', function(event){
        var source = $(this).attr("src")
        console.log(source)
        })

    })

})

});
    // ---------






