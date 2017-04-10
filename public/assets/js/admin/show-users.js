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
				window.location.replace('/adminspace/print-users')
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