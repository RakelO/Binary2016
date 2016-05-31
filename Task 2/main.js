$(document).ready(function(){
	$('input[type="text"]').on('keydown',function(e){
		if(e.keyCode===13){
			var text = $(this).val();
			if(text===''){
				return;
			}
			var li = $('<li> <input type="checkbox" class="check"> <span>' + 
				text+'</span> <button class="delete">x</button> </li>') 
			$('ul').prepend(li);
			$(this).val('');
		}
	});

	$(document).on('change', '.check', function(){
		var check = $(this);
		if(check.is(':checked')){
			check.parent().addClass('line-through');
		}
		else{
			check.parent().removeClass('line-through');
		}
	});

	$(document).on('change', '.check-all', function(){
		var checkAll = $(this);
		if(checkAll.is(':checked')){
			$('.check-all+label').text('Убрать вычеркивание');
			$('.check').not(':checked').click();
		}
		else{
			$('.check-all+label').text('Вычеркнуть все');
			$('.check').filter(':checked').click();
		}
	});

	$(document).on('click', '.delete', function(){
		$(this).parent().remove();
	});

	$(document).on('click', '.delete-all', function(){
		$('.line-through').remove();
		if($('.check-all').is(':checked')){
			$('.check-all').click();
	}
	});

	var liValue;
	$(document).on('dblclick', 'li', function(){
		liValue = $(this).children('span').text();
		$(this).children('span').attr('contenteditable', true).focus();
	});

	$(document).on('keydown', 'li span[contenteditable]', function(e){
		if(e.keyCode===13){
			$(this).removeAttr('contenteditable');
		}
		else if(e.keyCode===27){
			$(this).text(liValue);
			$(this).removeAttr('contenteditable');
		}
	});

	$(document).on('blur', 'li span[contenteditable]', function(e){
		$(this).text(liValue);
		$(this).removeAttr('contenteditable');
	});

});