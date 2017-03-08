/**
 * Created by i327364 on 04/01/2017.
 */

$(".role").change(function() {
	var userId = $(this).data('uid');
	$.ajax({
		url: '/users/superadmin/' + userId,
		method: 'put',
		data: {role: $(this).find('option:selected').text().trim().toLowerCase()},
		success: function(data) {
			if (data.status === 'ok') {
				alert("user changed!!");
			} else {
				alert("cant update user");
			}
		},
		error: function(jqXHR) {
			console.log(jqXHR.responseText + ' :: ' + jqXHR.statusText);
		}
	});
});
/**
 * Created by i327364 on 05/03/2017.
 */

$('.accept-user').click(function(e) {
	e.preventDefault();
	var $userAcceptedDiv = $(e.target).closest('div'),
		userID = $userAcceptedDiv.data('uid'),
		userAccepted = $userAcceptedDiv.data('accepted');
	$.ajax({
		url: '/users/' + userID,
		method: 'PUT',
		data: {accepted: !userAccepted},
		success: function(data) {
			if (data.status === 'ok') {
				alert("User changed");
				window.location.replace('/print-users')
			} else {
				alert("Can't update user");
			}
		},
		error: function(jqXHR) {
			console.log(jqXHR.responseText + ' :: ' + jqXHR.statusText);
		}
	});
	return false;
});