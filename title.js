var i = 0;
var titleText = ['k','ko','kon','koni','konig','konigb','konigbl','konigblo','konigblog','konigblog.','konigblog.pw',
'konigblog.pw','konigblog.','konigblog','konigblo','konigbl','konigb','konig','koni','kon','ko','k','$','$$','$$$'];

if (document.addEventListener) {
	document.addEventListener("DOMContentLoaded", function() {
		loaded();
	});
} else if (document.attachEvent) {
	document.attachEvent("onreadystatechange", function() {
		loaded();
	});
}

function loaded() {
	setInterval(loop, 235);
}

function loop() {
	document.getElementsByTagName("title")[0].innerHTML = titleText[i++ % titleText.length];
}