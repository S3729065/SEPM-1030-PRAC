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