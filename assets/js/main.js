var profileCloseBtn = document.getElementById('js-profileClose');
var profileModal = document.getElementById('js-profileModal')

profileCloseBtn.addEventListener('click', function(e){
	console.log('sun?');
	profileModal.classList.add('hide');
})