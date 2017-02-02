jQuery(document).ready(function () {

    /*
     Form validation
     */
    $('.registration-form input[type="text"], .registration-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
    });

    $('.registration-form').on('submit', function (e) {

        $(this).find('input[type="text"], textarea').each(function () {
            if ($(this).val() == "") {
                e.preventDefault();
                $(this).addClass('input-error');
            }
            else {
                $(this).removeClass('input-error');
            }
        });

    });


//form JSON object wrapper
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            }
            else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };


    // handle skill tags in form


    $('input[name=isAccepted]').click(function () {
        var email = $('#' + $(this)[0].id).data('email');
        console.log($(this).is(":checked"));
        $.ajax({
            url: '/users/' + $(this).attr('id'),
            method: 'PUT',
            data: {accepted: $(this).is(":checked")},
            success: function (data) {
                if (data.status === 'ok') {
                    alert("user changed");
                    $(this).attr("checked", $(this).is(":checked"));
                } else {
                    alert("cant update user");
                }
            },
            error: function (jqXHR) {
                console.log(jqXHR.responseText + ' :: ' + jqXHR.statusText);
            }
        });
    });

    $('input[name=isMember]').click(function () {
        $.ajax({
            url: '/users/' + $(this).data('uid'),
            method: 'PUT',
            data: {isMember: $(this).is(":checked")},
            success: function (data) {
                if (data.status === 'ok') {
                    alert("user changed");
                    $(this).attr("checked", $(this).is(":checked"));
                } else {
                    alert("cant update user");
                }
            },
            error: function (jqXHR) {
                console.log(jqXHR.responseText + ' :: ' + jqXHR.statusText);
            }
        });
    });



});
