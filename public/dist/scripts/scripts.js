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
				alert("user changed");
			} else {
				alert("cant update user");
			}
		},
		error: function(jqXHR) {
			console.log(jqXHR.responseText + ' :: ' + jqXHR.statusText);
		}
	});
});
/*
 * bootstrap-tagsinput v0.6.1 by Tim Schlechter
 * 
 */

!function(a){"use strict";function b(b,c){this.itemsArray=[],this.$element=a(b),this.$element.hide(),this.isSelect="SELECT"===b.tagName,this.multiple=this.isSelect&&b.hasAttribute("multiple"),this.objectItems=c&&c.itemValue,this.placeholderText=b.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=a('<div class="bootstrap-tagsinput"></div>'),this.$input=a('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.before(this.$container),this.build(c)}function c(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(a){return a[c]}}}function d(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(){return c}}}function e(a){return a?i.text(a).html():""}function f(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}function g(b,c){var d=!1;return a.each(c,function(a,c){if("number"==typeof c&&b.which===c)return d=!0,!1;if(b.which===c.which){var e=!c.hasOwnProperty("altKey")||b.altKey===c.altKey,f=!c.hasOwnProperty("shiftKey")||b.shiftKey===c.shiftKey,g=!c.hasOwnProperty("ctrlKey")||b.ctrlKey===c.ctrlKey;if(e&&f&&g)return d=!0,!1}}),d}var h={tagClass:function(a){return"label label-info"},itemValue:function(a){return a?a.toString():a},itemText:function(a){return this.itemValue(a)},itemTitle:function(a){return null},freeInput:!0,addOnBlur:!0,maxTags:void 0,maxChars:void 0,confirmKeys:[13,44],delimiter:",",delimiterRegex:null,cancelConfirmKeysOnEmpty:!0,onTagExists:function(a,b){b.hide().fadeIn()},trimValue:!1,allowDuplicates:!1};b.prototype={constructor:b,add:function(b,c,d){var f=this;if(!(f.options.maxTags&&f.itemsArray.length>=f.options.maxTags)&&(b===!1||b)){if("string"==typeof b&&f.options.trimValue&&(b=a.trim(b)),"object"==typeof b&&!f.objectItems)throw"Can't add objects when itemValue option is not set";if(!b.toString().match(/^\s*$/)){if(f.isSelect&&!f.multiple&&f.itemsArray.length>0&&f.remove(f.itemsArray[0]),"string"==typeof b&&"INPUT"===this.$element[0].tagName){var g=f.options.delimiterRegex?f.options.delimiterRegex:f.options.delimiter,h=b.split(g);if(h.length>1){for(var i=0;i<h.length;i++)this.add(h[i],!0);return void(c||f.pushVal())}}var j=f.options.itemValue(b),k=f.options.itemText(b),l=f.options.tagClass(b),m=f.options.itemTitle(b),n=a.grep(f.itemsArray,function(a){return f.options.itemValue(a)===j})[0];if(!n||f.options.allowDuplicates){if(!(f.items().toString().length+b.length+1>f.options.maxInputLength)){var o=a.Event("beforeItemAdd",{item:b,cancel:!1,options:d});if(f.$element.trigger(o),!o.cancel){f.itemsArray.push(b);var p=a('<span class="tag '+e(l)+(null!==m?'" title="'+m:"")+'">'+e(k)+'<span data-role="remove"></span></span>');if(p.data("item",b),f.findInputWrapper().before(p),p.after(" "),f.isSelect&&!a('option[value="'+encodeURIComponent(j)+'"]',f.$element)[0]){var q=a("<option selected>"+e(k)+"</option>");q.data("item",b),q.attr("value",j),f.$element.append(q)}c||f.pushVal(),(f.options.maxTags===f.itemsArray.length||f.items().toString().length===f.options.maxInputLength)&&f.$container.addClass("bootstrap-tagsinput-max"),f.$element.trigger(a.Event("itemAdded",{item:b,options:d}))}}}else if(f.options.onTagExists){var r=a(".tag",f.$container).filter(function(){return a(this).data("item")===n});f.options.onTagExists(b,r)}}}},remove:function(b,c,d){var e=this;if(e.objectItems&&(b="object"==typeof b?a.grep(e.itemsArray,function(a){return e.options.itemValue(a)==e.options.itemValue(b)}):a.grep(e.itemsArray,function(a){return e.options.itemValue(a)==b}),b=b[b.length-1]),b){var f=a.Event("beforeItemRemove",{item:b,cancel:!1,options:d});if(e.$element.trigger(f),f.cancel)return;a(".tag",e.$container).filter(function(){return a(this).data("item")===b}).remove(),a("option",e.$element).filter(function(){return a(this).data("item")===b}).remove(),-1!==a.inArray(b,e.itemsArray)&&e.itemsArray.splice(a.inArray(b,e.itemsArray),1)}c||e.pushVal(),e.options.maxTags>e.itemsArray.length&&e.$container.removeClass("bootstrap-tagsinput-max"),e.$element.trigger(a.Event("itemRemoved",{item:b,options:d}))},removeAll:function(){var b=this;for(a(".tag",b.$container).remove(),a("option",b.$element).remove();b.itemsArray.length>0;)b.itemsArray.pop();b.pushVal()},refresh:function(){var b=this;a(".tag",b.$container).each(function(){var c=a(this),d=c.data("item"),f=b.options.itemValue(d),g=b.options.itemText(d),h=b.options.tagClass(d);if(c.attr("class",null),c.addClass("tag "+e(h)),c.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=e(g),b.isSelect){var i=a("option",b.$element).filter(function(){return a(this).data("item")===d});i.attr("value",f)}})},items:function(){return this.itemsArray},pushVal:function(){var b=this,c=a.map(b.items(),function(a){return b.options.itemValue(a).toString()});b.$element.val(c,!0).trigger("change")},build:function(b){var e=this;if(e.options=a.extend({},h,b),e.objectItems&&(e.options.freeInput=!1),c(e.options,"itemValue"),c(e.options,"itemText"),d(e.options,"tagClass"),e.options.typeahead){var i=e.options.typeahead||{};d(i,"source"),e.$input.typeahead(a.extend({},i,{source:function(b,c){function d(a){for(var b=[],d=0;d<a.length;d++){var g=e.options.itemText(a[d]);f[g]=a[d],b.push(g)}c(b)}this.map={};var f=this.map,g=i.source(b);a.isFunction(g.success)?g.success(d):a.isFunction(g.then)?g.then(d):a.when(g).then(d)},updater:function(a){return e.add(this.map[a]),this.map[a]},matcher:function(a){return-1!==a.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(a){return a.sort()},highlighter:function(a){var b=new RegExp("("+this.query+")","gi");return a.replace(b,"<strong>$1</strong>")}}))}if(e.options.typeaheadjs){var j=null,k={},l=e.options.typeaheadjs;a.isArray(l)?(j=l[0],k=l[1]):k=l,e.$input.typeahead(j,k).on("typeahead:selected",a.proxy(function(a,b){k.valueKey?e.add(b[k.valueKey]):e.add(b),e.$input.typeahead("val","")},e))}e.$container.on("click",a.proxy(function(a){e.$element.attr("disabled")||e.$input.removeAttr("disabled"),e.$input.focus()},e)),e.options.addOnBlur&&e.options.freeInput&&e.$input.on("focusout",a.proxy(function(b){0===a(".typeahead, .twitter-typeahead",e.$container).length&&(e.add(e.$input.val()),e.$input.val(""))},e)),e.$container.on("keydown","input",a.proxy(function(b){var c=a(b.target),d=e.findInputWrapper();if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");switch(b.which){case 8:if(0===f(c[0])){var g=d.prev();g.length&&e.remove(g.data("item"))}break;case 46:if(0===f(c[0])){var h=d.next();h.length&&e.remove(h.data("item"))}break;case 37:var i=d.prev();0===c.val().length&&i[0]&&(i.before(d),c.focus());break;case 39:var j=d.next();0===c.val().length&&j[0]&&(j.after(d),c.focus())}var k=c.val().length;Math.ceil(k/5);c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("keypress","input",a.proxy(function(b){var c=a(b.target);if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");var d=c.val(),f=e.options.maxChars&&d.length>=e.options.maxChars;e.options.freeInput&&(g(b,e.options.confirmKeys)||f)&&(0!==d.length&&(e.add(f?d.substr(0,e.options.maxChars):d),c.val("")),e.options.cancelConfirmKeysOnEmpty===!1&&b.preventDefault());var h=c.val().length;Math.ceil(h/5);c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("click","[data-role=remove]",a.proxy(function(b){e.$element.attr("disabled")||e.remove(a(b.target).closest(".tag").data("item"))},e)),e.options.itemValue===h.itemValue&&("INPUT"===e.$element[0].tagName?e.add(e.$element.val()):a("option",e.$element).each(function(){e.add(a(this).attr("value"),!0)}))},destroy:function(){var a=this;a.$container.off("keypress","input"),a.$container.off("click","[role=remove]"),a.$container.remove(),a.$element.removeData("tagsinput"),a.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var b=this.$input[0],c=this.$container[0];b&&b.parentNode!==c;)b=b.parentNode;return a(b)}},a.fn.tagsinput=function(c,d,e){var f=[];return this.each(function(){var g=a(this).data("tagsinput");if(g)if(c||d){if(void 0!==g[c]){if(3===g[c].length&&void 0!==e)var h=g[c](d,null,e);else var h=g[c](d);void 0!==h&&f.push(h)}}else f.push(g);else g=new b(this,c),a(this).data("tagsinput",g),f.push(g),"SELECT"===this.tagName&&a("option",a(this)).attr("selected","selected"),a(this).val(a(this).val())}),"string"==typeof c?f.length>1?f:f[0]:f},a.fn.tagsinput.Constructor=b;var i=a("<div />");a(function(){a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery);
//# sourceMappingURL=bootstrap-tagsinput.min.js.map
/**
 * Created by i327364 on 19/01/2017.
 */
$('#form-team-create').on('submit', function(e) {
	e.preventDefault();

	var teamMembers = $('#memberListCreateForm').find('li').toArray();
	var Jmems = [];
	teamMembers.forEach(function(item) {
		Jmems.push($(item).text());
	});
	var formData = $(this).serializeObject();
	Jmems.push(formData.admin_email);
	formData.tags = {};
	formData.members = Jmems;
	formData.openDate = Date();
	if (formData.idea === "") {
		formData.idea = "Not decided yet"
	}
	var $createBtn = $(this).find('#createTeamBtnCreateForm'),
		$loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
	$createBtn.text("Creating... ").prepend($loadingSpinner).attr('disabled', true);
	$.ajax({
		type: "POST",
		cache: false,
		contentType: "application/json",
		url: $(this).attr('action'),
		data: JSON.stringify(formData),
		success: function(data) {
			var registerSuccessModal = $('#registerSuccessModal');
			registerSuccessModal.on('hidden.bs.modal', function(e) {
				window.location.replace("/team-up");
			});
			registerSuccessModal.modal('show');
		},
		error: function(data) {
			var registerFailModal = $('#registerFailModal'),
				errVal = registerFailModal.find('#modalFailContent');
			registerFailModal.modal('show');
			if (data.responseJSON.status !== undefined) {
				errVal.text(data.responseJSON.status)
			} else {
				errVal.text("We have a problem. Please try again or contact administrator ASAP");
			}
		}
	});
});

$('#addMemberCollapse').on('shown.bs.collapse', function() {
	$(this).siblings('#toggleAddMemberCollapse').text("Cancel and remove members");
	var membersList = $('#memberListCreateForm'),
		inputValue = $('#searchForTeamMembersCreateFormInput');
	membersList.empty();
	$(this).attr('disabled', false);
	inputValue.attr('placeholder', 'Search for registered user by email');
	inputValue.removeClass('form-control-warning');
	inputValue.attr('readonly', false);
});

$('#addMemberCollapse').on('hidden.bs.collapse', function() {
	$(this).siblings('#toggleAddMemberCollapse').text("Add Team Members");
});

$("#searchForTeamMembersCreateFormInput").autocomplete({
	source: function(request, response) {
		$.ajax({
			url: "/search_member",
			type: "GET",
			data: request,
			success: function(data) {
				response($.map(data, function(el) {
					return {
						id: el._id,
						value: el.email
					};
				}));
			}
		});
	},
	minLength: 2,
	focus: function(event, ui) {
		this.value = ui.item.value;
		event.preventDefault();
	},
	select: function(event, ui) {
		this.value = ui.item.value;
		$(this).next("input").val(ui.item.value);
		$(this).data('user', ui.item);
		event.preventDefault();
	},
	change: function(event, ui) {
		if (ui.item == null) {
			$("#searchForTeamMembersCreateFormInput").val('');
			$("#searchForTeamMembersCreateFormInput").focus();
		}
	}
});
var isUserAlreadyOnList = function isUserAlreadyOnList(userID) {
	var membersList = $('#memberListCreateForm').find('li').toArray();
	for (var i = 0; i < membersList.length; i++) {
		if ($(membersList[i]).data('user').id === userID) {
			return true;
		}
	}
	return false;
};

var addMemberToList = function addMemberToList(e) {
	e.preventDefault();
	var inputValue = $('#searchForTeamMembersCreateFormInput'),
		userData = inputValue.data('user'),
		maxUsers = inputValue.data('maxusers'),
		membersList = $('#memberListCreateForm'),
		membersListItems;

	if (!isUserAlreadyOnList(userData.id)) {
		var listItem = $('<li />').data('user', userData).text(inputValue.data('user').label)
			.addClass('list-group-item')
			.append($('<button />').attr('type', 'button').addClass('float-xs-right btn btn-danger btn-sm removeUserFromCreateTeamMembers').click(function(e) {
				e.preventDefault();
				$(this).closest('li').remove();
			})
				.append($('<i />').addClass('fa fa-times')));
		membersList.append(listItem);
		membersListItems = membersList.find('li').length;
		if (membersListItems === maxUsers - 1) {
			$(this).attr('disabled', true);
			inputValue.attr('placeholder', 'Max users in a group is ' + maxUsers + ' (including you)');
			inputValue.addClass('form-control-warning');
			inputValue.attr('readonly', true);
		}

	}
	inputValue.removeData('user');
	inputValue.val('');
	inputValue.focus();
};
$('#addMemberToListBtnCreateForm').click(addMemberToList);

/**
 * Created by i327364 on 19/01/2017.
 */
var initResetPasswordModal = function initResetPasswordModal() {
	$('#forgotPasswordModal').modal('show');
};

$('#forgotPasswordResetBtn').click(function(e) {
	e.preventDefault();
	var userEmail = $('#forgotEmailInput').val();
	if (!validateEmail(userEmail)) {
		$('#resetErrorMessageText').text('Please enter valid email address');
		$('#resetErrorMessage').show();
		$('#resetSucessMessage').hide();
	} else {
		$(this).attr('disabled', true);
		$.ajax({
			url: '/forgot',
			method: 'POST',
			data: {email: userEmail},
			success: function(data) {
				switch (data) {
					case "ok":
						$('#resetSucessMessage').show();
						$('#resetErrorMessage').hide();
						break;
					case 'NOUSER':
						$('#resetErrorMessageText').text('A user with this email does not exists.');
						$('#resetErrorMessage').show();
						$('#resetSucessMessage').hide();
						break;
					default:
						$('#resetErrorMessageText').text('We have a problem. Please try again or contact administrator ASAP');
						$('#resetErrorMessage').show();
						$('#resetSucessMessage').hide();
						break;
				}
				$('#forgotPasswordResetBtn').prop('disabled', false);
			},
			error: function(data) {
				if (data.status == 409) {
					$('#resetErrorMessageText').text('A user with this email already exists.\nThere is no need to register twice.\nFor help, contact Administrator');
				}
				else {
					$('#resetErrorMessageText').text('We have a problem. Please try again or contact administrator ASAP');
				}
				$('#resetErrorMessage').show();
				$('#resetSucessMessage').hide();
				$('#forgotPasswordResetBtn').prop('disabled', false);
			}
		});
	}

});
var validateEmail = function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

$('#forgotPasswordModal').on('hidden.bs.modal', function() {
	$('#resetErrorMessageText').text('');
	$('#resetErrorMessageText').hide();
	$('#resetSucessMessage').hide();
	$('#forgotEmailInput').val('');
});
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
/**
 * Created by i327364 on 19/01/2017.
 */
$('#myTeamLeaveBtn').click(function(e){
	e.preventDefault();
	$.ajax({
		url: '/user/leaveTeam',
		method: 'DELETE',
		success: function(data) {
			var registerSuccessModal = $('#registerSuccessModal');
			registerSuccessModal.on('hidden.bs.modal', function(e) {
				window.location.replace("/mingle");
			});
			registerSuccessModal.modal('show');
		},
		error: function(data) {
			var registerFailModal = $('#registerFailModal');
			registerFailModal.on('hidden.bs.modal', function(e) {
				window.location.replace("/team-up");
			});
			registerFailModal.modal('show');
		}

	});
});

/**
 * Created by i327364 on 18/01/2017.
 */
$(document).ready(function() {

	// On submit ajax to server
	$('#form-reg').on('submit', function(e) {
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
			var tagArr = $('#form-skills').tagsinput('items');
			var JTags = {};
			tagArr.forEach(function(tag, ind){
				JTags[ind] = tag;
			});
			var STags = {
				"tags": JTags
			};
			var formData = $(this).serializeObject();
			formData.tags = JTags;
			formData.regDate = Date();
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
						registerFailModal.find('#modalFailContent').text('A user with this email already exists.');
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
	$("#form-reg").bind("keypress", function(e) {
		if (e.keyCode == 13) {
			return false;
		}
	});


});
/**
 * Created by i327364 on 19/01/2017.
 */
$(document).ready(function () {
	var registerFailModal = $('#registerFailModal');
	$('#resetPass').on('click', function () {
		$('#resetPass').prop('disabled', true)
		if ($('#username').val() === "") {
			registerFailModal.find('#modalFailContent').text("Please insert an email address");
			registerFailModal.modal('show');
			$('#resetPass').prop('disabled', false)
		}
		else if ($('#password').val() === "") {
			registerFailModal.find('#modalFailContent').text("Please insert a new password");
			registerFailModal.modal('show');
			$('#resetPass').prop('disabled', false)
		} else if ($('#password').val() !== $('#password_ver').val()) {
			registerFailModal.find('#modalFailContent').text("Passwords do not match");
			registerFailModal.modal('show');
			$('#resetPass').prop('disabled', false)
		} else {
			$.ajax({
				data: {
					"password": $('#password').val(),
					"email": $('#username').val(),
					"resetPass": $('#reserPass').val()
				},
				type: "PUT",
				url: "/resetme",
				success: function (data) {
					if (data === "ok") {
						var successModal = $('#registerSuccessModal');
						successModal.modal('show');
						successModal.on('hidden.bs.modal', function(){
							window.location.replace("/login");
						});
						$('#resetPass').prop('disabled', false);
						$('#lastResetText').html("password was reset for " + $('#username').val() + ". new password is:" + $('#password').val());
						$('#lastReset').css('display', 'block');
					} else {
						var eText = "";
						if (data === undefined || data !== "error") {
							eText = "Something is wrong here. Are you sure it's your email? Please try again or contact administrator for resetting your password";
						} else {
							eText = "We have an internal error. Please try again or contact administrator for resetting your password";
						}
						var registerFailModal = $('#registerFailModal');
						registerFailModal.find('#modalFailContent').text(eText);
						registerFailModal.modal('show');
						$('#resetPass').prop('disabled', false)
					}
				},
				error: function (err) {
					var registerFailModal = $('#registerFailModal');
					registerFailModal.find('#modalFailContent').text("Please contact administrator for resetting your password");
					registerFailModal.modal('show');
					$('#resetPass').prop('disabled', false)
				}
			})
		}
	})
})
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

/**************/


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    clock.style.display = 'block';

    function updateClock() {
        var t = getTimeRemaining(endtime);

        //daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var startDate = new Date("May 16, 2016 11:45:00");
var deadline = new Date("May 20, 2016 09:45:00");
var schedule = [
    [startDate, deadline]

];
//var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
//var deadline = new Date(deadline);
//initializeClock('clockdiv', deadline);
// iterate over each element in the schedule
for (var i = 0; i < schedule.length; i++) {
    var startDate = schedule[i][0];
    var endDate = schedule[i][1];

    // put dates in milliseconds for easy comparisons
    var startMs = Date.parse(startDate);
    var endMs = Date.parse(endDate);
    var currentMs = Date.parse(new Date());

    // if current date is between start and end dates, display clock
    if (endMs > currentMs && currentMs >= startMs) {
        $.ajax({
            url: "/timerFlag", success: function (result) {
                console.log(result);
                if (result === "on") {
                    initializeClock('clockdiv', endDate);
                }
            }
        });

    }
}
//# sourceURL=pen.js

/**
 * Created by i327364 on 07/01/2017.
 */
$(function() {
	$.fn.serializeObject = function() {

		var self = this,
			json = {},
			push_counters = {},
			patterns = {
				"validate": /^[a-zA-Z][a-zA-Z0-9_]*(?:\[(?:\d*|[a-zA-Z0-9_]+)\])*$/,
				"key": /[a-zA-Z0-9_]+|(?=\[\])/g,
				"push": /^$/,
				"fixed": /^\d+$/,
				"named": /^[a-zA-Z0-9_]+$/
			};


		this.build = function(base, key, value) {
			base[key] = value;
			return base;
		};

		this.push_counter = function(key) {
			if (push_counters[key] === undefined) {
				push_counters[key] = 0;
			}
			return push_counters[key]++;
		};

		$.each($(this).serializeArray(), function() {

			// skip invalid keys
			if (!patterns.validate.test(this.name)) {
				return;
			}

			var k,
				keys = this.name.match(patterns.key),
				merge = this.value,
				reverse_key = this.name;

			while ((k = keys.pop()) !== undefined) {

				// adjust reverse_key
				reverse_key = reverse_key.replace(new RegExp("\\[" + k + "\\]$"), '');

				// push
				if (k.match(patterns.push)) {
					merge = self.build([], self.push_counter(reverse_key), merge);
				}

				// fixed
				else if (k.match(patterns.fixed)) {
					merge = self.build([], k, merge);
				}

				// named
				else if (k.match(patterns.named)) {
					merge = self.build({}, k, merge);
				}
			}

			json = $.extend(true, json, merge);
		});

		return json;
	};

	var errorHandler = function errorHandler(err) {
		var $generalFailModal = $('#generalFailModal'),
			errVal = $generalFailModal.find('#modalFailContent');
		$generalFailModal.modal('show');
		errVal.text("We have a problem. Please try again or contact administrator ASAP");
	};
	var isUserAlreadyOnList = function isUserAlreadyOnList(userID) {
		var membersList = $('.memberResults').find('li').toArray();
		for (var i = 0; i < membersList.length; i++) {
			if ($(membersList[i]).data('user').id === userID) {
				return true;
			}
		}
		return false;
	};
	var createTeamMembersArray = function createTeamMembersArray(adminEmail) {
		var membersObject = $('#teamMembers').find('li').find('span');
		var memArr = [];
		if (membersObject) {
			membersObject.toArray().forEach(function(member) {
				memArr.push($(member).text());
			});
		}
		memArr.push(adminEmail);
		return memArr;
	};
	var approveUserOnTeam = function approveUserOnTeam(e, val, userEmail) {
		e.preventDefault();
		var teamID = $('#teamId').val();
		var data = {userEmail: userEmail, admin_email: $('#team_admin_email').val()};
		$.ajax({
			method: val ? 'POST' : 'DELETE',
			url: 'teams/' + teamID + '/approve',
			data: data,
			success: function() {
				location.reload();
			},
			error: errorHandler
		});
	};
	var removeMemberFromTeam = function addRemoveMember(e) {
		e.preventDefault();
		var teamID = $('#teamId').val();
		var data = {
			userEmail: $(this).closest('li').find('span').text().trim(),
			admin_email: $('#team_admin_email').val()
		};
		$.ajax({
			method: 'DELETE',
			url: 'teams/' + teamID + '/member',
			data: data,
			success: function() {
				location.reload();
			},
			error: errorHandler
		});
	};
	var addMemberToTeam = function addMemberToTeam(e) {
		e.preventDefault();
		var inputValue = $('#searchDialogForm').find('input');
		var userEmail = inputValue.data('user') ? inputValue.data('user').value : inputValue.val(),
			teamID = $('#teamId').val(),
			data = {
				userEmail: userEmail,
				admin_email: $('#team_admin_email').val()
			};
		$.ajax({
			method: 'POST',
			url: 'teams/' + teamID + '/member',
			data: data,
			success: function() {
				location.reload();
			},
			error: errorHandler
		});
	};
	var updateTeam = function updateTeam(e) {
		e.preventDefault();
		var $updateTeam = $(this),
			$loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
		$updateTeam.text("Updating... ").prepend($loadingSpinner).attr('disabled', true);
		var formData = $('#updateTeamForm').serializeObject();
		formData.members = createTeamMembersArray(formData.admin_email);
		formData.isClosed === "Yes" ? formData.isClosed = false : formData.isClosed = true;
		formData.openDate = Date();
		$.ajax({
			method: 'PUT',
			type: 'application/json',
			url: '/teams/' + formData.team_id,
			data: formData,
			success: function() {
				var $registerSuccessModal = $('#generalSuccessModal');
				$registerSuccessModal.find('.modal-body p').text("You've updated your team succesfully, mate!");
				$registerSuccessModal.on('hidden.bs.modal', function(e) {
					window.location.replace("/team-up");
				});
				$registerSuccessModal.modal('show');
			},
			error: function(err){
				errorHandler(err);
				$('#updateGroupBtn').attr('disabled', false).remove('i').text('Update Team');
			}
		});


	};
	var deleteTeam = function deleteTeam(e) {
		e.preventDefault();
		var deleteTeam = $(this),
			$loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
		deleteTeam.text("Deleting... ").prepend($loadingSpinner).attr('disabled', true);
		if (window.confirm("Are you sure?")) {
			var teamID = $('#teamId').val();
			var adminEmail = {admin_email: $('#userEmail').val()};
			$.ajax({
				method: 'DELETE',
				url: '/teams/' + teamID,
				data: adminEmail,
				success: function(res) {
					console.log(res);
					location.reload();
				},
				error: function(err){
					errorHandler(err);
					$('#deleteGroupBtn').attr('disabled', false).remove('i').text('Delete Team');
				}
			});
		}
	};
	var dialog = $('#searchDialogForm').dialog({
		autoOpen: false,
		height: 300,
		width: 500,
		modal: true,
		buttons: {
			'Cancel': function() {
				dialog.dialog('close');
			}
		},
		close: function() {
			console.log('closed');
		}
	});
	$("#searchTeamMembers").on('click', function() {
		dialog.dialog('open');
	});
	$("#emailInput").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: "/search_member",
				type: "GET",
				data: request,
				success: function(data) {
					response($.map(data, function(el) {
						return {
							id: el._id,
							value: el.email
						};
					}));
				}
			});
		},
		minLength: 3,
		// set an onFocus event to show the result on input field when result is focused
		focus: function(event, ui) {
			this.value = ui.item.value;
			// Prevent other event from not being execute
			event.preventDefault();
		},
		select: function(event, ui) {
			// Prevent value from being put in the input:
			this.value = ui.item.value;
			// Set the id to the next input hidden field
			$(this).next("input").val(ui.item.value);
			$(this).data('user', ui.item);
			// Prevent other event from not being execute
			event.preventDefault();
			// optionnal: submit the form after field has been filled up
		}
	});
	$('#addMemberToListBtn').on('click', function(oEvent) {
		oEvent.preventDefault();
		var inputValue = $('#searchDialogForm').find('input'),
			userData = inputValue.data('user'),
			membersList = $('.memberResults').find('ul');
		if (!isUserAlreadyOnList(userData.id)) {
			var listItem = $('<li />').data('user', userData).text(inputValue.data('user').label).addClass('list-group-item');
			membersList.append(listItem);
		}
		inputValue.removeData('user');
		inputValue.val('');
	});
	$('#updateGroupBtn').click(updateTeam);
	$('#deleteGroupBtn').click(deleteTeam);
	$('.approve-user').click(function(event) {
		var userEmail = $(this).closest('li').find('span').text();
		approveUserOnTeam(event, true, userEmail);
	});
	$('.disapprove-user').click(function(event) {
		var userEmail = $(this).closest('li').find('span').text();
		approveUserOnTeam(event, false, userEmail);
	});
	$('.removeUserFromTeam').click(removeMemberFromTeam);

	$('#addMember').click(addMemberToTeam);

});


