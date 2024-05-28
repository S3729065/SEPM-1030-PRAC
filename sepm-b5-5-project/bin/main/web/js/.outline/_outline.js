class DocumentModelMap { // This is where we have our own Document Object Model values managed and handled.
	constructor() {}

	static getDashboardCellIds() {
		const cells = document.querySelectorAll('.dashboard-table');
		return Array.from(cells).map((c) => c.dataset.dashboardCellId);
	}

	static replaceRenderedDashboardCells(dashboardCellId, dashboardCellInnerElement) {
		const renderedCell = document.querySelectorAll(dashboardCellId);
		renderedCell.forEach((rc) => {
			const fragment = document.createRange().createContextualFragment(dashboardCellInnerElement);
			rc.replaceWith(fragment);
		})
	}

	static onManagerEventMouse1Click(rx0) {
		document.addEventListener('click', event => {
			if (!event.target.matches('.dashboard-data-content-mousebutton1-click'))
				return;

			event.preventDefault();
			rx0(event.target.value);
		})
	}

	static onManagerEventMouseover(rx0) {
		document.addEventListener('mouseover', event => {
			if (!event.target.matches('.dashboard-data-content-hover'))
				return;

			event.preventDefault();
			rx0(event.target.value);
		})
	}
}
const documentModelMap = DocumentModelMap;
documentModelMap.getDashboardCellIds = getDashboardCellIds;
documentModelMap.replaceRenderedDashboardCells = replaceRenderedDashboardCells;
export default documentModelMap;
/* <!-- Human Resources Management Manager --> */
class HrmManager {
	constructor() {}

	static readyDashboardCellular(dashboardHeader/*getByElementId('dashboard-header')*/, dashboardCell/*getByElementId('dashboard-cell')*/, {onDashboardUpdate}) {
		let mCellCaching = (cell) => {
			console.debug(cell);
			cellContainer.cacheCell = cell.update;
			onDashboardUpdate(cell);
		}

		return {onDashboardUpdate: mCellCaching};
	}

	static renderDashboardHtm(cell) {
		const dashboardInterfaceCells = document.getElementById("dashboard-interface-cells");
		dashboardInterfaceCells.innerHTML = getDashboardHtml(cell);
	}
}
export default HrmManager;
const hrmManagerDashboard = HrmManager.readyDashboardCellular(dashboardHeader, dashboardCell, {
	onDashboardUpdate: (updateCell) => {documentModelMap.renderDashboardHtml(updateCell)}
});
/* <!-- Global values for scripting HTML elements and nodes --> */
let globalIteratorValue = 0;
let hrmTableIndexHeader = document.getElementById('hrm-table-header').rows[globalIteratorValue];
let hrmTableIndexColumn = document.getElementById('hrm-table-column').cells[globalIteratorValue];
let headerTableLabel = document.getElementsByTagName('th');
let rowTableLabel = document.getElementsByTagName('tr');
let datasetTableLabel = document.getElementsByTagName('td');

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