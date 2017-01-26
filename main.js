function createTree() {

	var tree = []; // create tree array

	var treeSize = parseFloat(document.getElementById("sizeoftree").value);
	var treeShape = document.getElementById("shapeoftree").value;
	
	if (treeSize == "" || treeShape == "") {
		alert("Please Enter a Value");
	} else {
		for (var i = 0; i < treeSize; i++) {
			tree[i] = " "; // this creates an array which adds one more space, each time it iterates.
						   // eg. it1. 1 space. - it2. 2 space. - it3. 3 space. - it4. 4 space. etc.
		}

		for (var j = 0; j < treeSize; j++) {
			tree[treeSize + j] = treeShape;
			tree[treeSize - j] = treeShape; 
			var finishTree = tree.join("");
			console.log(finishTree);
		}
	}
};
document.getElementById("growtree").addEventListener("click", createTree);


document.getElementById("sizeoftree").addEventListener("keyup", enterSubmit);
document.getElementById("shapeoftree").addEventListener("keyup", enterSubmit);

function enterSubmit(e) {
	if (e.which === 13) {
		createTree();
	}
}












