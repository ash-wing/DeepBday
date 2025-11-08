document.addEventListener("DOMContentLoaded", function () {
	const btn = document.getElementById("lightup-btn");
	if (btn) {
		btn.addEventListener("click", function () {
			window.location.href = "/page2";
		});
	}
});
