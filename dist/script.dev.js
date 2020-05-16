"use strict";

new Vue({
  el: "#app",
  data: {
    list: ["buy groceries", "clean the bathroom", "get cash"]
  },
  methods: {
    insertItem: function insertItem(event) {
      this.list.push(event.target.value);
      event.target.value = "";
    },
    del: function del(index) {
      this.list.splice(index, 1);
    }
  }
});