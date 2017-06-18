// Using Google Books API, display the author's name, the published date, an image of the book, and a link to learn more about the book when the user inputs a book title or author's name and clicks the search button.

function search() {
	// Store the results of the user's input
	var user_input = document.getElementById('input').value;
	// console.log(user_input);

	document.getElementById('results').innerHTML = "";

	// AJAX calls request data from web server and displays it
	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + user_input,
		dataType: "json",

		success: function(data) {
			var results = document.getElementById('results');
			for (i = 0; i< data.items.length; i++) {
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + "</h2>"
			}
		},

		type: 'GET'
	});
}

document.getElementById('search').addEventListener('click', search, false)

google.books.load();

function initialize() {
	var viewer = new google.books.DefaultViewer(document.getElementById('viewer'));
	viewer.load('ISBN:0738531367');
}

google.books.setOnLoadCallback(initialize);