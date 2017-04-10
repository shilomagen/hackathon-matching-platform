var Team = require('mongoose').model('Team');
var Param = require('mongoose').model('Param'),
    config = require('../../config/config'),
    Roles = require('./../models/user.server.model').ROLES;

/**
 * This method renders
 * @param req
 * @param res
 */
var defaultMenu = [
        {name: 'Home', path: '/', isActive: true},
        {name: 'Logout', path: '/logout', isActive: false}
    ],
    defaultTitle = 'Welcome';


exports.render = function(req, res) {
    if (req.user) {
        if (req.user.isMember) {
            Team.findOne({_id: req.user.team}, function(err, team) {
                if (err) {
                    res.render('index', {
                        user: req.user,
                        pageTitle: defaultTitle,
                        menu: defaultMenu,
                        eventName: config.eventname,
                        footerData: config.eventMediaLinks
                    });
                } else {
                    var index = team.members.indexOf(team.admin_email);
                    team.members.splice(index, 1);
                    res.render('index', {
                        user: req.user,
                        pageTitle: defaultTitle,
                        team: team,
                        menu: defaultMenu,
                        eventName: config.eventname,
                        footerData: config.eventMediaLinks
                    });
                }
            });
        } else {
            res.render('index', {
                user: req.user,
                pageTitle: defaultTitle,
                menu: defaultMenu,
                eventName: config.eventname,
                footerData: config.eventMediaLinks
            });
        }
    } else {
        res.render('index', {
            user: '',
            pageTitle: defaultTitle,
            menu: [{name: 'Home', path: '/', isActive: true}],
            messages: req.flash('error'),
            eventName: config.eventname,
            footerData: config.eventMediaLinks
        });
    }
};
exports.renderMingle = function(req, res) {
    if (req.user) {
        Team.find({}, function(err, teams) {
            res.render('mingle', {
                user: req.user,
                menu: defaultMenu,
                pageTitle: 'Mingling',
                teams: teams,
                eventName: config.eventname,
                footerData: config.eventMediaLinks
            });
        });
    } else {
        return res.redirect('/team-up');
    }

};
exports.renderUsersVoting = function(req, res) {
    if (req.user) {
        Team.find({}, function(err, teams) {
            res.render('vote', {
                menu: defaultMenu,
                teams: teams,
                user:req.user,
                pageTitle: 'Teams Rating',
                eventName: config.eventname,
                footerData: config.eventMediaLinks
            });
        });
    } else {
        return res.redirect('/');
    }
};