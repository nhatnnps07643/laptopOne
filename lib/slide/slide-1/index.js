$('#logo_header').hover(function(){
	var Id = $('#logo_header').attr('data-target');
	$(Id).css({
		'display': 'block'
	})
	$(Id).mouseleave(function(){
		$(Id).hide('fast')
	})
	console.log((Id));
	
})