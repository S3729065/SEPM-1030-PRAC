import 'http' // Import NodeJS files here

function checkCell() {
	let index = 0;
	let cellInRow = 1;
	let cellInColumn = 1;

	let hrmTable = document.getElementById("hrmTable");
	let hrmTableBodyRow = hrmTable.insertRow(index);
	let hrmTableBodyColumn = hrmTable.insertCell(index);

	if (cellInRow == hrmTableBodyRow) {
		cellInRow++;

		if (cellInColumn == hrmTableBodyColumn)
			cellInColumn++;
	} else {
		index++;
	}

	return 0;
}

function indexCell() {
	// TODO(Daniel): index with `data-content` values checked cells with user input.
}

