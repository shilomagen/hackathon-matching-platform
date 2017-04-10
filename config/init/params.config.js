/**
 * Created by i327364 on 23/03/2017.
 */

const mongoose = require('mongoose');

const PARAM_TYPES = {
    TEAM_CREATION: 'teams_creation',
    USERS_REGISTRATION: 'user_registration',
    MENTOR_REGISTRATION: 'mentor_registration',
    CHAT: 'chat',
    USER_VOTES: 'user_votes',
    REALTIME_MENTOR_APP: 'realtime_mentor_app'
};

const defaultParameters = [
    {name: PARAM_TYPES.TEAM_CREATION, isOpen: true, displayName: 'Team Creation'},
    {name: PARAM_TYPES.USERS_REGISTRATION, isOpen: true, displayName: 'User Registration'},
    {name: PARAM_TYPES.MENTOR_REGISTRATION, isOpen: true, displayName: 'Mentor Registration'},
    {name: PARAM_TYPES.CHAT, isOpen: false, displayName: 'Chat'},
    {name: PARAM_TYPES.USER_VOTES, isOpen: false, displayName: 'User Votes'},
    {name: PARAM_TYPES.REALTIME_MENTOR_APP, isOpen: false, displayName: 'Realtime Mentor App'}
];

exports.resetParamsCollection = (cb) => {
    console.log(`==> Resetting parameters collection`);
    const paramsModel = mongoose.model('Param');
    paramsModel.remove({}, (err) => {
        if (err) {
            cb(err);
        } else {
            console.log(`==> Parameters collection was dropped successfully`)
            cb();
        }
    })

};
exports.initiateDefaultParams = (cb) => {
    console.log(`==> Initiating parameters collection`);
    const paramsModel = mongoose.model('Param');
    paramsModel.insertMany(defaultParameters, (err, params) => {
        if (err) {
            console.error("Problem initiating default app parameters, check DB");
            cb(err);
        } else {
            params.forEach((param) => {
                console.log(`       => ${param.name} was created successfully on app and set was set to ${param.isOpen}`);
            });
            console.log(`==> Params created successfully`);
            cb();
        }
    });
};

exports.PARAMS = PARAM_TYPES;