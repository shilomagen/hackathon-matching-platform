var users = require('../../app/controllers/users.server.controller'),
    params = require('../../app/controllers/params.server.controller'),
    passport = require('passport'),
    flash = require('connect-flash'),
    multer = require('multer');

module.exports = function(app) {
    app.route('/users')
        .post(users.isUserAdminRole, params.isRegistrationOpen, users.create)
        .get(users.isUserAdminRole, users.list);

    app.route('/users/:userId')
        .get(users.logedIn, users.read)
        .put(users.isUserAdminRole, users.update)
        .delete(users.isUserAdminRole, users.delete);
    app.param('userId', users.userByID);

    app.route('/users/superadmin/:userId')
        .put(users.isUserSuperAdminRole, users.update);

    app.route("/resetme")
        .put(users.passer);
    app.route('/register')
        .get(params.isRegistrationOpen, users.renderRegister)
        .post(params.isRegistrationOpen, users.register);
    app.route('/mentor-register')
        .get(params.isMentorRegistrationOpen, users.renderMentorRegistration)
        .post(users.mentorRegistration);

    app.route('/user/leaveTeam').delete(users.logedIn, users.leaveTeam);
    app.route('/forgot').post(params.isRegistrationOpen, users.forgot);

    app.route('/resetme/:resetId').get(params.isRegistrationOpen, users.renderResetme);
    app.route('/adminspace/print-users').get(users.isUserAdminRole, users.renderPrintUsers);
    app.route('/adminspace/print-mentors').get(users.isUserAdminRole, users.renderPrintMentors);
    app.route('/adminspace').get(users.isUserAdminRole, users.renderAdminspace);
    app.route('/login')
        .get(users.renderLogin)
        .post(users.handleAuthtCustomCB);
    app.route('/mentor-up')
        .get(users.logedIn, users.isMentor, users.renderMentorUp);
    app.route('/search_member')
        .get(users.logedIn, users.searchUserByEmailAutocomplete);
    app.route('/rsvp/:userIdToUpdate').get(users.userAgree);
    app.route('/reset').get(users.isUserAdminRole, users.renderReset);
    app.route('/upload-cv').get(users.logedIn, users.renderUploadCV)
        .post(users.logedIn, multer({
            storage: users.s3StorageConfig,
            limits: {fileSize: 2000 * 1000}
        }).single('file'), users.updateUserUploadCV, function(req, res) {
            res.send("Upload successfully.");
        });

    app.get('/logout', users.logout);

    app.post('/contactus', users.sendMail);
};