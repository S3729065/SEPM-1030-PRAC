import * as d3 from "d3"

function renderView() {
	const dataset = d3.json("../data/notifsHub.js")

	const windowDimensions = {
		width: window.innerWidth,
		height: window.innerHeight,
	}

	var margin = { top: 10, right: 10, bottom: 10, left: 10 },
			width = 960 - margin.left - margin.right,
			height = 640 - margin.top - margin.bottom;
		
	var svg = d3.select('body').append('svg')
		.attr('width', windowDimensions.width + margin.left + margin.right)
		.attr('height', windowDimensions.height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	const notifsTable = d3.select("#notifs-table")

	const maxRows = 8
	const maxColumns = 4

	const dateOfAccessor = d => d.dateOf,
		timeOfAccessor = d => d.timeOf,
		titleOfAccessor = d => d.titleOf,
		messageOfAccessor = d => d.messageOf

	const notifs = [
		{date: dateOfAccessor, time: timeOfAccessor, title: titleOfAccessor, message: messageOfAccessor}
	]
	
	notifsTable.append("thead").append("tr")
		.selectAll("thead")
		.data(notifs)
		.join("th")
			.text(d => d.date)

	const renderInnerHtml = notifsTable.append("tbody")

	dataset.slice(0, maxRows).array.forEach(() => {
		renderInnerHtml.append("tr")
			.selectAll("td")
			.data(notifs)
			.join("td")
	});
} renderView()