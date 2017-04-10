/**
 * Created by i327364 on 23/03/2017.
 */
$('#updateParams').click(function(e) {
    var $updateParamsBtn = $(this),
        $loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
    $updateParamsBtn.prepend($loadingSpinner).attr('disabled', true);
    e.preventDefault();

    var $checkBoxes = $('#paramsList label.active input'),
        paramsArr = [];
    $.each($checkBoxes, function(ind, param) {
        var $paramId = $(param).attr('id'),
            splittedValue = $paramId.split('-');
        paramsArr.push({name: splittedValue[0], isOpen: splittedValue[1] === 'true'});
    });

    $.ajax({
        url: '/adminspace/params',
        method: 'PUT',
        data: {params: JSON.stringify(paramsArr)},
        success: function(res) {
            var $generalSuccessModal = $('#generalSuccessModal');
            $generalSuccessModal.find('.modal-body p').text("App parameters updated successfully");
            $generalSuccessModal.on('hidden.bs.modal', function(e) {
                window.location.replace("/adminspace");
            });
            $generalSuccessModal.modal('show');
        },
        error: function(err) {
            var $generalFailModal = $('#generalFailModal'),
                errVal = $generalFailModal.find('#modalFailContent');
            $generalFailModal.modal('show');
            errVal.text(err);
            $('#updateParams').attr('disabled', false).remove('i');
        }
    });
    return false;
});