
$(function(){
	$('.content').hide();
	$('.cale').hide();
	$('.load').hide();
	$('.content').fadeToggle(1000);
	$('.cale').fadeToggle(1000);
	$('.load').fadeToggle(1000);
})

function load()
{
	jQuery.get('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', function(data) {
   $('.content').html(data);
}, 'text');
}

