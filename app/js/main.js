$(function(){
	new WOW().init();

	var button = $('#bugReport');
	var form = $('#form');
	var menu = $('#menu');

	var hiddenContent = 'hidden-content';

	button.bind('click', toggleForm);
	
	function toggleForm(){
		console.log(form, menu);
		form.toggleClass(hiddenContent);
		menu.toggleClass(hiddenContent);
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
