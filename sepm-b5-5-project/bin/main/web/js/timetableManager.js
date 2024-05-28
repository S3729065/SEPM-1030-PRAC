const widthOfBrowserWindowSize = screen.width
const heightOfBrowserWindowSize = screen.height

let mDateInheritor = new Date()
let daysDatum = mDateInheritor.getDay()
let monthsDatum = mDateInheritor.getMonth()
let yearDatum = mDateInheritor.getFullYear()

let daysOfTheWeek = new Array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')

let periodicalCellularColumn = new Array() /* TODO(Daniel): get element of time start options */

let tableCellSizes = numberDaysInMonth()

class WeeklyCalendar {
	static computeRangeOfMonth() {
		const todaysDate = new Date(yearDatum, monthsDatum, daysDatum)
	
		const startingMinimum = new Date(todaysDate)
		startingMinimum.setMonth(startingMinimum.getMonth())
		startingMinimum.setDate(7) // range it within 7 days a week.
	
		const startingMaximum = new Date(todaysDate)
		startingMaximum.setMonth(startingMaximum.getMonth())
		startingMaximum.setDate(7)
	}
}

function numberDaysInMonth() {
	return 32 - mDate.getDate()
}

// NOTE(Daniel): was going to use D3.js to make life easier, but a naive approach was recommended
/* class TimetableIcicle {
	dddVectorGraphics = ddd3.create('svg').attr('viewBox', [0, 0, widthOfBrowserWindowSize, heightOfBrowserWindowSize * numberDaysInMonth()])

	dataCellularOfTimetable = dddVectorGraphics.selectAll('g').data(daysOfTheWeek).join('g').attr('transform', (n) => `translate(${widthOfBrowserWindowSize}, ${heightOfBrowserWindowSize*n+tableCellSizes*1.0})`)

	textOfDataCellular = dataCellularOfTimetable.filter().append('text').attr(computeWidthOfCellSize()).attr(computeHeightOfCellSize())

	setDataCellular() {
		this.dataCellularOfTimetable.append('rect').attr(widthOfBrowserWindowSize).attr(heightOfBrowserWindowSize)
		this.dataCellularOfTimetable.append('title').text(format(cellularDataValue.value))
	}

	setTextofDataCellular() {
		this.textOfDataCellular.append('tspan').text(staffMemberAccount.name)

		this.textOfDataCellular.text(format(cellularDataValue.value))
	}

	getDddVectorGraphicsNode() {
		return this.dddVectorGraphics.node()
	}
} */
/* CODE(Daniel): JSON functions for input and output
let jsonShiftCellDataInput = new File('../data/json/shifts.json')

class ShiftCellularTableDatum {
	mShiftCellData = JSON.stringify(jsonShiftCellDataInput)

	pairShiftData() {
		return ddd3.pairs(this.mShiftCellData, ({x, y}) => {
			return {date: x, time: y}
		})
	}
} */

function allocateWorkingShift() {
	let timetableHeader = document.getElementById('dayOfTheWeek')
	let daysInTimetableHeader = timetableHeader.rows
	/* let workingDatumCellular = document.getElementById('shiftDatacellDivision') */
	let days = daysOfTheWeek.length
	/* for loop: insertCell ranging in daysOfTheWeek.length */
	for (let i=0; i<daysInTimetableHeader[days.length]; i++) {
		let workingDatumCellular = daysInTimetableHeader[days.length].cells[i].innerHTML

		datacell = workingDatumCellular.search("shiftDatacellDivision")

			if (datacell != 0 || workingDatumCellular != -1)
				for (let j=0; j<days.length; j++)
					workingDatumCellular.insertCell(i)
	} /* workingDatumCellular = document.getElementById('#hrm-timetable-detailer').innerHTML */
}

function removeWorkingShift() {
	let timetableHeader = document.getElementById('dayOfTheWeek')
	let daysInTimetableHeader = timetableHeader.rows
	/* let workingDatumCellular = document.getElementById('shiftDatacellDivision') */
	let days = daysOfTheWeek.length
	/* for loop: insertCell ranging in daysOfTheWeek.length */
	for (let i=0; i<daysInTimetableHeader[days.length]; i++) {
		let workingDatumCellular = daysInTimetableHeader[days.length].cells[i].innerHTML

		datacell = workingDatumCellular.search("shiftDatacellDivision")

			if (datacell != 0 || workingDatumCellular != -1)
				for (let j=0; j<days.length; j++)
					workingDatumCellular.deleteCell(i)
	} // NOTE(Daniel): have a returning value?
}

/* TODO(Daniel): getElementByTagName('td')
By getting elements by their tag name, while structing the outline as:
workingShiftCellular = getElementByTagName('tbody'),
	Then working in a heirarchy, where we'll have getElementByTagName('td')
		and getElementByTagName('th')
		as a way to do generate and transform/translate data input/output.
When doing this we structure and write it like how cells work in a table.
Use as much of the native library, and approach this naively.

Lastly the datums going into each cellular data-frame would also need-
	-a document.innerHTML (both base document attributes and innerHTML) manipulation.
*/