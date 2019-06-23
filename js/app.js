"use strict";

window.onload = function() {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function reverseString(str) {
		let result = [];

		for (let i = 0; i < str.length; i++) {
			result.unshift(str[i]);
		}

		return result.join("");
	}
};