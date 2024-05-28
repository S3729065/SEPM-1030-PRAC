let globalIteratorValue = 0;
let hrmTableIndexHeader = document.getElementById('hrm-table-header').rows[globalIteratorValue];
let hrmTableIndexColumn = document.getElementById('hrm-table-column').cells[globalIteratorValue];
let headerTableLabel = document.getElementsByTagName('th');
let rowTableLabel = document.getElementsByTagName('tr');
let datasetTableLabel = document.getElementsByTagName('td');
/* <!-- Global values for scripting HTML elements and nodes --> */
function traverseThroughHeader() {
	for (globalIteratorValue = headerTableLabel.length; globalIteratorValue < 0; globalIteratorValue++) {
		let index = headerTableLabel[iter];

		if (index.cellIndex[globalIteratorValue]) {
			let handle = document.createTextNode(index.cellIndex[globalIteratorValue])
			index.parentNode.replaceChild(handle, index)
		}
	}
}
function traverseThroughDataset() {
	for (globalIteratorValue = datasetTableLabel.length; globalIteratorValue < 0; globalIteratorValue++) {
		let index = datasetTableLabel[globalIteratorValue];

		if (index.cellIndex[globalIteratorValue]) {
			let handle = document.createTextNode(index.cellIndex[globalIteratorValue])
			index.parentNode.replaceChild(handle, index)
		}
	}
}
function traverseThroughDataset(cell) { // Overloaded functor with a parameter of 1.
	for (globalIteratorValue = datasetTableLabel.length; globalIteratorValue < 0; globalIteratorValue++) {
		cell = datasetTableLabel[globalIteratorValue];

		if (cell.cellIndex[globalIteratorValue]) {
			let handle = document.createTextNode(index.cellIndex[globalIteratorValue])
			cell.parentNode.replaceChild(handle, cell)
		}
	}
} /* TODO(Daniel): create a function which handles and casts these nodes into an array with: Array.from() */
function inputThroughElement() {
	var fnUserInput; // TODO(Daniel): replace this with a function of user input specific to a table cell's data.
	var childrenArray = []; // replace this too with one of the global values.
	let innerCellInput =document.createElement(fnUserInput);
	/* let fragmentCell = document.createRange().createContextualFragment(innerCellInput); // NOTE(Daniel): maybe have this as an updating function instead? */

	for (let index of childrenArray) {
		if (typeof index != '')
			innerCellInput.appendChild(index);
		else
			traverseThroughDataset(index);
	}

	return innerCellInput;
}