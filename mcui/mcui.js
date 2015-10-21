(function() {
	if(isMobile()) {
		document.getElementsByTagName('body')[0].className = 'app';
	}
	function isMobile() {
		return navigator.userAgent.match(/Mobile|iPhone|iPad|Android/i) || Math.min(screen.height,screen.width) <= 480;
	}
})();
