document.addEventListener("DOMNodeInserted", function(event) {
	if (!!window && !(!!window.$)) {
		window.$ = window.jQuery = require('./jquery-3.2.1.min.js');
	}
});
