import * as d3 from "d3"

async function renderBuild() {
	const windowDimensions = {
	    width: 
	      window.innerWidth * 0.73,
	    height: 
	      640,
	    margin: 
	      ({top: 64, left: 8, right: 8, bottom: 16}),
	    length:
	      64
  	}

	const kanbanTable = {
		kanban: {
			height: "480px",
			width: "640px",
		},

		cells: {
			height: "30px",
			width: "40px",
		},
	}

	const dataset = await d3.json("../data/staffWorkshifts.json")

	const parseDate = d3.timeParse("%d-%m-%Y")
	const dateAccessor = d => parseDate(d.dateAvailability)

	const dateFmt = d => d3.timeFormat("%-d/%m")
	const hoursFmt = d => d3.timeFormat("%-I %p")(new Date(d * 1000))
	const format24hrs = d => d3.timeFormat("%H")(new Date(d * 1000))

	const rosterCalendar = d3.select("#roster-calendar")

	const maxRows = 4
	const maxColumns = 5

	let nametagAccessor = d => d.nametag,
		columnAccessor = d => d.daysAvailable,
		cellAccessor = d => d.shiftHours

	const shifts = [
		{name: nametagAccessor, days: columnAccessor, hours: cellAccessor}
	]

	rosterCalendar.append("thead").append("tr")
		.selectAll("thead")
		.data(shifts)
		.join("th")
			.text(d => d.name)

	let bodyInnerHtml = rosterCalendar.append("tbody")

	let scaleCells = d3.scaleLinear()
		.domain(d3.extent(dataset, cellAccessor))
		.range([windowDimensions.margin.top, windowDimensions.height - windowDimensions.margin.bottom])

	let scaleColumns = d3.scaleLinear()
		.domain(d3.extent(dataset, columnAccessor))
		.range([windowDimensions.margin.top, windowDimensions.height - windowDimensions.margin.bottom])

	dataset.slice(0, maxRows).forEach(() => {
		bodyInnerHtml.append("tr")
			.selectAll("td")
			.data(shifts)
			.join("td")
				.text(header => dateFmt(header))
	})
} renderBuild()

/* function eventHandle() {
	const kanbanTable = {
		kanban: {
			height: "480px",
			width: "640px",
		},

		cells: {
			height: "30px",
			width: "40px",
		},
	}

	const cards = d3.select("svg")
		.data(kanbanTable)
		.selectAll(".rect")
		.append("rect")
		.join("rect")
			.attr("height", kanbanTable.cells.height)
			.attr("width", kanbanTable.cells.width)

		cards.on("mouseenter", (i, j) => {
			const select = d3.select(i.currentTarget)
			select.attr("", j)
		})

		cards.on("mouseleave", (i, j) => {
			const select = d3.select(i.currentTarget)
			select.attr("", j)
		})
} eventHandle() */