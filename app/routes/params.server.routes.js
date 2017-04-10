var users = require('../../app/controllers/users.server.controller'),
    params = require('../../app/controllers/params.server.controller'),
    passport = require('passport');

module.exports = function (app) {
    app.route('/adminspace/params').get(users.isUserAdminRole, users.renderParams).put(users.isUserAdminRole, params.updateParams);
};