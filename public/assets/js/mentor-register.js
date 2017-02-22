/**
 * Created by i327364 on 22/02/2017.
 */
$(document).ready(function() {
	$('.chosen-select').chosen({width:'100%'});
	$('ul.chosen-choices').css({"display": "block", "width": "100%",
	"padding":" .5rem .75rem",
	"font-size": "1rem",
	"line-height":"1.25",
	"color":" #55595c",
	"background-color": "#fff",
	"background-image":" none",
	"-webkit-background-clip":" padding-box",
	"background-clip":" padding-box",
	"border":" 1px solid rgba(0,0,0,.15)",
	"border-radius":" .25rem" });
});

$('#form-reg-mentor').on('submit', function(e) {
	e.preventDefault();
	$('#reg_but').prop('disabled', true);
	$('.reg-loader').css('display', 'inline-block');
	if ($('#form-gender').val() === "choose") {
		var registerFailModal = $('#registerFailModal');
		registerFailModal.find('#modalFailContent').text('You forgot to choose gender');
		$('#registerFailModal').modal('show');
		$('#reg_but').prop('disabled', false);
		//password check
	} else if ($('#form-pass-ver').val() !== $('#form-pass').val()) {
		var registerFailModal = $('#registerFailModal');
		registerFailModal.find('#modalFailContent').text('The passwords you inserted does not match, Please fix and try again');
		$('#registerFailModal').modal('show');
		$('#reg_but').prop('disabled', false);
	} else {
		var $mentorSkills = $('.search-choice > span'),
			skillsArr = {};
		if ($mentorSkills.length > 0) {
			$.each($mentorSkills, function(ind, item){
				skillsArr[ind] = $(item).text();
			});
		}
		var formData = $(this).serializeObject();
		formData.tags = skillsArr;
		formData.regDate = Date();
		debugger;
		$.ajax({
			type: "POST",
			cache: false,
			contentType: "application/json",
			url: $(this).attr('action'),
			data: JSON.stringify(formData),
			success: function(data) {
				var registerSuccessModal = $('#registerSuccessModal');
				registerSuccessModal.on('hidden.bs.modal', function(e) {
					window.location.replace("/login");
				});
				registerSuccessModal.modal('show');
			},
			error: function(data) {
				var registerFailModal = $('#registerFailModal');
				if (data.status == 409) {
					registerFailModal.find('#modalFailContent').text('A mentor with this email already exists.');
				}
				else {
					registerFailModal.find('#modalFailContent').text('We have a problem. Please try again or contact administrator');
				}
				registerFailModal.modal('show');
				$('#reg_but').prop('disabled', false);
			}
		});
	}
});
$("#form-reg-mentor").bind("keypress", function(e) {
	if (e.keyCode == 13) {
		return false;
	}
});