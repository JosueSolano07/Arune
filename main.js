$(document).ready(function(){
	$('nav.tabs a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('nav.tabs a').click(function(){
		$('nav.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});