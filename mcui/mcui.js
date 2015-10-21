(function() {
	function isMobile() {
		return navigator.userAgent.match(/Mobile|iPhone|iPad|Android/i) || Math.min(screen.height,screen.width) <= 480;
	}
})();
