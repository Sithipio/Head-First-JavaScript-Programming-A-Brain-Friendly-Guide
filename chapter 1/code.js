var word = "bottles";
var count = 10;
while (count > 0) {
	console.log(count + " " + word + " of beer on the wall");
	console.log(count + " " + word + " of beer");
	console.log("Take on down, pass it around,");
	count = count - 1;
	if (count > 0) {
		console.log(count + " " + word + " of beer on the wall.");
	} else 
		console.log("No more " + word + " of beer on the wall.");
	}