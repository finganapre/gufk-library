$(function(){
	new WOW().init();

	var button = $('#bugReport');
	var form = $('#form');
	var menu = $('#menu');
	var menu2 = $('#menu2');
	var backToMenu = $('#back-to-menu');

	var hiddenContent = 'hidden-content';

	button.bind('click', toggleForm);
	backToMenu.bind('click', toggleForm);
	
	function toggleForm(){
		$(this).unbind('click', toggleForm);
		console.log(form, menu, backToMenu);
		toggleElem(form);
		toggleElem(menu);
		toggleElem(menu2);
		$(this).bind('click', toggleForm);
	}

	function toggleElem(jqEl){
		console.log(jqEl)
		jqEl.toggleClass(hiddenContent);
	}
});

/*function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='block'){
       document.getElementById(id).style.display='none';
    }else{
       document.getElementById(id).style.display='block';
    }
}
*/
