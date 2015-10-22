
	// var view = document.getElementById('view');
	// var menu = document.getElementById('menu');
	// document.querySelector(".menu-icon").addEventListener('click', function(event) {
 //   		event.preventDefault();
 //   		alert(menu);
 //   	});
 //   	document.getElementById('main').addEventListener('touchstart', function(event) {
 //   		event.preventDefault();
 //   		alert('main');
 //   	});
$(function(){
	$(document).on('click', '.menu-icon',function(event){
		event.preventDefault();
		event.stopPropagation();
		// alert('menu');
		// if($('#view').hasClass('menu-on')){
		// 	$('#view').removeClass('menu-on');
		// 	$('#menu').hide();
		// } else{
		// 	$('#menu').show();
		// 	$('#view').addClass('menu-on');
		// }
		$('#menu').show();
			$('#view').addClass('menu-on');
	});
	// $(document).on('click', '.view',function(event){
	// 	event.preventDefault();
	// 	alert('view');
	// 	$('#view').removeClass('menu-on');
	// 	$('#menu').hide();
	// })
})

