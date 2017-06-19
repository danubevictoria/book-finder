// Using Google Books API, display the author's name, the published date, an image of the book, and a link to learn more about the book when the user inputs a book title or author's name and clicks the search button.

function search() {
	// Store the results of the user's input
	var user_input = document.getElementById('input').value;
	// console.log(user_input);

	document.getElementById("results").innerHTML = "";

	// AJAX calls request data from web server and displays it
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + user_input,
		dataType: "json",

		success: function(data) {
			var results = document.getElementById("results");
			// console.log(results);

			// For all the data returned, display the thumbnail, preview link, title/author, and published date
			for (i = 0; i< data.items.length; i++) {
				results.innerHTML += "<div class=\"container\"><div class=\"books pull-left\"><img class=\"pull-left\" src='" + 
					data.items[i].volumeInfo.imageLinks.thumbnail + "'></div>" +
				'<div class=\"books pull-left col-md-10 col-sm-8 col-xs-6\"><a href=\"' + 
				data.items[i].volumeInfo.previewLink + '\"><h3>' + data.items[i].volumeInfo.title + '</h3></a>' + '<p>' +
					data.items[i].volumeInfo.authors[0] + '</p><p>' +
					data.items[i].volumeInfo.publishedDate + "</p><br></div></div>"
			}
			// console.log(data.items)

			// console.log(results);
		},

		type: 'GET'
	});
}

// on click run search
document.getElementById('search').addEventListener('click', search, false)

// on tap for mobile, run search
document.getElementById('search').addEventListener('tap', search, false)