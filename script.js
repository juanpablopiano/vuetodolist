new Vue({
	el: "#app",
	data: {
		list: ["buy groceries", "clean the bathroom", "get cash"],
	},
	methods: {
		insertItem: function (event) {
			this.list.push(event.target.value);
			event.target.value = "";
		},
		del: function (index) {
			this.list.splice(index, 1);
		},
	},
});
