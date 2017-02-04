/**
 * Created by i327364 on 11/01/2017.
 */
$(function() {
	var teamUserApplication = function teamUserApplication() {
		var $applyBtn = $(this),
			$loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
		$applyBtn.text("Applying...").prepend($loadingSpinner).attr('disabled', true);
		var teamID = $(this).closest('div.card').data('id');

		$.ajax({
			method: 'POST',
			url: '/teams/' + teamID + '/apply',
			success: function() {
				location.reload();
			},
			error: function() {
				var $generalFailModal = $('#generalFailModal'),
					errVal = $generalFailModal.find('#modalFailContent');
				$generalFailModal.modal('show');
				errVal.text("We have a problem. Please try again or contact administrator ASAP");
				$generalFailModal.on('hidden.bs.modal', function(e) {
					location.reload();
				});
			}
		});
	};
	$('.applyTeamBtn').click(teamUserApplication);
});