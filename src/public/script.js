$(document).ready(function(){
	$('.login-icon').click(function(){
		$('.login').addClass('side-transform');
		$('.mark').addClass('show-mark');
	})
	$('.side .mini-header i, .mark').click(function(){
		$('.side-transform').removeClass('side-transform');
		$('.mark').removeClass('show-mark');
	})
	$('.to-register').click(function(){
		$('.side-transform').removeClass('side-transform');
		$('.register').addClass('side-transform');
	})
	$('.to-recover-pw').click(function(){
		$('.side-transform').removeClass('side-transform');
		$('.recover-pw').addClass('side-transform');
	})
	$('.register-to-login, .recover-to-login').click(function(){
		$('.side-transform').removeClass('side-transform');
		$('.login').addClass('side-transform');
	})
})