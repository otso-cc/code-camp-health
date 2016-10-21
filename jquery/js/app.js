var anonymousToken = "eb9ff8d6-eac9-4d99-8d0d-4b9ffe745d2a";
var backandUrl = "https://api.backand.com/1/objects/items/"
				
function getItems() {
	console.log("getItems()");
	$.ajax({
		url: backandUrl,
		headers: {
			anonymousToken: anonymousToken
		}
	})
	.done(function(response) {
		console.log("received:", response);
		
		// place results on UI
		var outputHTML = "<ul>";
		for (var item of response.data) {
			outputHTML += "<li>id: " + item.id + " | name: " + item.name + "</li>";
		}
		outputHTML += "</ul>"
		
		$('#data-output').html(outputHTML);
	});	
}

function createItem() {
	console.log("createItem()");
	
	$.ajax({
		url: backandUrl,
		method: "POST",
		headers: {
			anonymousToken: anonymousToken
		},
		data: "{name: \"some name of the item\", description: \"description\"}"
	})
	.done(function (response) {
		console.log("received response", response);
		$('#data-output').html("<pre>" + JSON.stringify(response) + "</pre>");
	});
}