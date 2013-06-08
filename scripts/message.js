$(function() {
	console.log('123456');
	var id = 0;
	$('#testDiv').slimscroll({
		height : 150
	});
	$('#test_input').keydown(function(h) {
		if(h.keyCode == 13) {
			var val = $(this).val();
			var el = $('<div></div>').attr('id', 'test_' + id).html(val).css({
				padding : '3px',
				border : '1px solid #ccc',
				margin : '5px'
			});
			$('#testDiv').append(el);
			id++;
			$(this).val('');

		}
	});
	$(".nano").nanoScroller();
	$('#nano_input').keydown(function(h) {
		if(h.keyCode == 13) {
			var val = $(this).val();
			var el = $('<div></div>').attr('id', 'test_' + id).html(val).css({
				padding : '3px',
				border : '1px solid #ccc',
				margin : '5px'
			});
			$('#nano_content').append(el);
			id++;
			$(this).val('');
			$(".nano").nanoScroller();
		}
	});
	$('#nano_clear').click(function() {
		var len = $('#nano_content').scrollTop();
		console.log(len);
		$('#nano_content').scrollTop(len / 2);

	});
});
