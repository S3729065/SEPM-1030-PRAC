new Vue({
	el: '#staffMemberAccountName',
	data: {
		cellularDescription: '${staffMemberShift}',
		staffMemberShift: [
			{firstName: '${}'},
			{surname: '${}'},
			{name: '${firstName}\t${surname}'},
			{shiftTime: '${shiftTime}'},
			{shiftDate: '${shiftDate}'},
			{shiftDetails: '${shiftDate}\n${shiftTime}'}
		]
	},
	methods: {
		getStaffMemberAccountName: function () {
			let name = this.cellularDescription
			if (name)
				this.staffMemberShift.push({name: shiftDetails})
		}
	}
})