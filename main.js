// Instructions: 
// Create a Tree Function which
// - Accepts single object as argument
// The object has TWO key/value pairs
// 	- key that specifies character to use to build tree
// 	- character to use from user input 
// 	- The character to use should be from user input in a <input type="text"> field in the DOM.
 	

// Lets take the value of the user's input
var thingSizeInput = parseFloat(document.getElementById("sizeofthing").value);
var thingShapeInput = document.getElementById("shapeofthing").value;

// Grab the button 'growthing'
var growMyThing = document.getElementById("growthing");
// Call a function on the button
// growMyTree.addEventListener("click", letsBuildATree);


// Function: Set a height ofthe thing
function growIt(thing) {
	thing.height = thingSizeInput;
}

// Function: Give the thing a shape
function shapeIt(thing) {
	thing.shape = thingShapeInput;
}

// Function: Modify the thing with the functions above 
function modifyIt(thing, modifier) {
	modifier(thing);
}

// Let's just create an object to modify for now
var tree = {
	name: "pine"
}

modifyIt(tree, growIt);
modifyIt(tree, shapeIt);
// console.log(tree);


for (var i = 0; i < tree.height; i++) {
	// hmmm...goodbye for now
}
 


