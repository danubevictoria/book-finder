// Using Google Books API, display the author's name, the published date, an image of the book, and a link to learn more about the book when the user inputs a book title or author's name and clicks the search button.

function search() {
	// Store the results of the user's input
	var user_input = document.getElementById('input').value;
	// console.log(user_input);

	// Break the user's input up by word and store in an array
	var results = [];
	if (user_input != null) {
		results = user_input.split(" ");
	}
	
	console.log(results);
}