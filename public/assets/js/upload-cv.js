Dropzone.options.uploadStudentCV = {
	maxFiles: 1,
	init: function(){
		var _self = this;
		this.on('addedfile', function() {
			var $addBtn = $('<button />').attr('type', 'button').attr('id','uploadCVBtn').addClass('btn btn-primary upload-cv-btn').text("Upload ").append($('<i />').addClass('fa fa-cloud-upload fa-1x')).click(function(e) {
				e.preventDefault();
				$('.dropzone')[0].dropzone.processQueue();
			});
			var $removeFile = $('<button />').attr('type', 'button').attr('id', 'cancelUploadCVBtn').addClass('btn btn-danger upload-cv-btn').text("Clear ").append($('<i />').addClass('fa fa-trash fa-1x')).click(function() {
				_self.removeAllFiles();
			});
			$('#uploadCVBtnBar').append($addBtn, $removeFile);
			$('#errorUploadCV').hide();
		});
		this.on('removedfile', function() {
			$('#uploadCVBtnBar').empty();
		});
	},
	renameFilename: function(name) {
		console.log(name);
		return $('#uploadStudentCV').data('user_fullname') + '_cv.pdf';
	},
	dictDefaultMessage: '<b>Drop files here or click to upload</b>',
	maxfilesexceeded: function(file) {
		this.removeAllFiles();
		this.addFile(file);
	},
	// removedfile: function() {
	// 	$('#uploadCVBtnBar').empty();
	// },
	// addedfile: function() {
	// 	var $addBtn = $('<button />').attr('type', 'button').attr('id', 'uploadCVBtn').addClass('btn btn-primary upload-cv-btn').text("Upload ").append($('<i />').addClass('fa fa-cloud-upload fa-1x')).click(function(e) {
	// 		e.preventDefault();
	// 		$('.dropzone')[0].dropzone.processQueue();
	//
	// 	});
	// 	var $removeFile = $('<button />').attr('type', 'button').attr('id', 'cancelUploadCVBtn').addClass('btn btn-danger upload-cv-btn').text("Clear ").append($('<i />').addClass('fa fa-trash fa-1x')).click(function() {
	// 		_self.removeAllFiles();
	// 	});
	// 	$('#uploadCVBtnBar').append($addBtn, $removeFile);
	// },
	sending: function(file, xhr) {
		var $loadingSpinner = $('<i />').addClass('fa fa-spinner fa-spin fa-fw');
		$('#uploadCVBtn').prepend($loadingSpinner).prop('disabled', true);
		$('#cancelUploadCVBtn').prop('disabled', true);
		xhr.upload.addEventListener('progress', function(evt) {
			if (evt.lengthComputable) {
				var percentComplete = evt.loaded / evt.total;
				percentComplete = parseInt(percentComplete * 100);
				console.log(percentComplete + '%');
				if (percentComplete === 100) {
					console.log('File was uploaded successfully');
				}
			}
		}, false);
	},
	success: function(file, respond) {
		var $registerSuccessModal = $('#generalSuccessModal');
		$registerSuccessModal.find('.modal-body p').text(respond);
		$registerSuccessModal.on('hidden.bs.modal', function(e) {
			e.preventDefault();
			window.location.replace("/team-up");
		});
		$registerSuccessModal.modal('show');
	},
	error: function (file, err) {
		var $generalFailModal = $('#generalFailModal'),
			errVal = $generalFailModal.find('#modalFailContent');
		$generalFailModal.modal('show');
		errVal.text(err);
		this.removeAllFiles();
	},
	complete: function() {
		$('#uploadCVBtnBar').empty();
	},
	acceptedFiles: 'application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword',
	autoProcessQueue: false
};