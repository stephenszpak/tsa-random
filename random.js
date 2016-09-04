var timesFired = 0;
var leftArrow = document.getElementById('leftArrer');
var rightArrow = document.getElementById('rightArrer');
var body = document.getElementById("allOver");

var clickEvent = function(event, righty){
	
	if (event.target === body) {
		leftArrow.style.visibility = "visible";
		setTimeout(function() {
			leftArrow.style.visibility = "hidden";
		}, 1000);
	};
	if (righty.target < body) {
		rightArrow.style.visibility = "visible";
		setTimeout(function() {
			rightArrow.style.visibility = "hidden";
		}, 1000);
	}
};


body.addEventListener('click', clickEvent);