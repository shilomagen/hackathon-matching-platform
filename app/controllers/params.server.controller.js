const Param = require('mongoose').model('Param'),
    User = require('mongoose').model('User'),
    config = require('./../../config/config'),
    PARAM_TYPES = require('./../../config/init/params.config').PARAMS,
    _ = require('lodash'),
    async = require('async');

exports.renderParams = function(req, res, next) {
    Param.find({}, function(err, params) {
        if (err) {
            return next(err);
        }
        else {
            res.render('params', {
                title: 'Manage Parameters',
                params: params,
                suppemail: config.supportEmailAddr,
                eventname: config.eventname,
                eventwebsite: config.eventwebsite,
                eventfacebook: config.eventfacebook
            });
        }
    });
};

exports.isRegistrationOpen = function(req, res, next) {
    Param.findOne({name: PARAM_TYPES.USERS_REGISTRATION}, function(err, param) {
        if (err) {
            console.log(err);
            return next(err);
        } else if (!param.isOpen) {
            res.redirect('/');
        } else {
            next();
        }
    });
};

exports.isMentorRegistrationOpen = function(req, res, next) {
    Param.findOne({name: PARAM_TYPES.MENTOR_REGISTRATION}, function(err, param) {
        if (err) {
            console.log(err);
            return next(err);
        } else if (!param.isOpen) {
            res.redirect('/');
        } else {
            next();
        }
    });
};

exports.isUsersVotingOpen = function(req, res, next) {
    Param.findOne({name: PARAM_TYPES.USER_VOTES}, (err, param) => {
        if (err) {
            console.error(err);
            return next(err);
        } else if (!param.isOpen) {
            res.redirect('/');
        } else {
            next();
        }
    });

};
exports.isTeamsOpen = function(req, res, next) {
    Param.findOne({name: PARAM_TYPES.TEAM_CREATION}, function(err, param) {
        if (err) {
            console.log(err);
            return next(err);
        } else if (!param.isOpen) {
            res.status(403).send("<h1>Team Platform is currently closed</h1>");
        } else {
            next();
        }
    })
};

exports.updateParams = function(req, res) {
    console.log(`==> Updating params...`);
    Param.find({}, (err, params) => {
        if (err) {
            res.status(500).send('Problem update params');
        } else {
            params = params.map(param => {
                param = param.toObject();
                return _.omit(param, ['_id', '__v']);
            });
            let paramsToUpdate = _.differenceWith(JSON.parse(req.body.params), params, _.isEqual),
                tasksArr = [];
            paramsToUpdate.forEach((paramUpdate) => {
                tasksArr.push(createUpdateParamTask(paramUpdate));
            });
            async.parallel(tasksArr, (err, tasks) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Problem update params');
                } else {
                    tasks.forEach((task) => {
                        console.log(`==>${task}`);
                    });
                    console.log(`==> Finished update params... `);
                    res.status(200).send('Params updated successfully');
                }
            });
        }

    });
};

const createUpdateParamTask = (param) => {
    return (cb) => {
        Param.findOneAndUpdate({name: param.name}, param, (err, param) => {
            if (err) {
                cb(err);
            } else {
                cb(null, `Param ${param.name} was update successfully`);
            }
        });
    }
};

