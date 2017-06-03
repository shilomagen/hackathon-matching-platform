var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Q = require('q'),
    config = require('./../../config/config');

var ERROR_TYPE = {
    TEAM_FULL: 100
};


var TeamSchema = new Schema({
    team_name: String,
    admin_email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    idea: String,
    tags: Object,
    members: [],
    appliedMembers: [],
    openDate: String,
    lookingText: {type: String, default: ""},
    isClosed: {type: Boolean, default: false},
    comp: String,
    exp: String,
    number_of_voters: {type: Number, default: 0},
    vote_avg: {type: Number, default: 0}
});

TeamSchema.statics.addUserToAppliers = function(obj) {
    var deferred = Q.defer();
    this.findOne({_id: obj.teamId}, (err, team) => {
        if (err) {
            deferred.reject(err);
        } else {
            if (team) {
                let teamAppliers = team.appliedMembers || [];
                teamAppliers.push(obj.user.email);
                team.appliedMembers = teamAppliers;
                team.save(function(err) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve({team: team, user:obj.user});
                    }
                });
            } else {
                deferred.reject("Team was not found");
            }
        }
    });
    return deferred.promise;
};

TeamSchema.methods.removeFromApplied = function(userEmail) {
    var emailInd = this.appliedMembers.indexOf(userEmail);
    if (emailInd !== -1) {
        this.appliedMembers.splice(emailInd, 1);
    }
};

TeamSchema.methods.removeFromMembers = function(userEmail) {
    var emailInd = this.members.indexOf(userEmail);
    if (emailInd !== -1) {
        this.members.splice(emailInd, 1);
    }
};

TeamSchema.methods.updateTeamVote = function(teamVote, alreadyVoted, cb) {
    let totalGrade = this.number_of_voters * this.vote_avg;
    if (alreadyVoted.isVoted){
        totalGrade -= alreadyVoted.lastVote;
    } else {
        this.number_of_voters++;
    }
    totalGrade += teamVote;
    this.vote_avg = totalGrade / this.number_of_voters;
    this.save((err, team) => {
        if (err) {
            cb(err);
        } else {
            cb(null, team._id);
        }
    });
};

TeamSchema.statics.addUserToTeam = function(obj) {
    var deferred = Q.defer();
    this.findOne({_id: obj.teamId}, function(err, team) {
        if (team.members.length === config.maxNumOfUsersInTeam) {
            var user = obj.user;
            user.isMember = false;
            user.team = '';
            user.save(function(err) {
                if (err) {
                    deferred.reject(err);
                }
            });
            deferred.reject({code: ERROR_TYPE.TEAM_FULL});
        } else {
            team.removeFromApplied(obj.user.email);
            team.members.push(obj.user.email);
            team.save(function(err, team) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve({user: obj.user, team: team});
                }
            });
        }
    });
    return deferred.promise;
};

TeamSchema.statics.removeUserFromApplied = function(obj) {
    var deferred = Q.defer();
    this.findOne({_id: obj.teamId}, function(err, team) {
        if (err) {
            deferred.reject(err);
        } else {
            team.removeFromApplied(obj.user.email);
            team.save(function(err, team) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve({user: obj.user , team: team});
                }
            });
        }
    });
    return deferred.promise;
};

TeamSchema.statics.removeUserFromTeam = function(obj) {
    var deferred = Q.defer();
    this.findOne({_id: obj.teamId}, function(err, team) {
        if (err) {
            deferred.reject(err);
        } else {
            team.removeFromMembers(obj.user.email);
            team.save(function(err) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(team);
                }
            });

        }
    });
    return deferred.promise;
};

TeamSchema.statics.removeUserFromGroup = function(user, teamId) {
    var deferred = Q.defer();
    this.findOne({_id: teamId}, function(err, team) {
        if (err) {
            deferred.reject(err);
        } else {
            team.removeFromMembers(user.email);
            team.save(function(err, team) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(team);
                }
            });
        }
    });
    return deferred.promise;
};
module.exports = {
    TEAM_ERROR_TYPES: ERROR_TYPE
};

mongoose.model('Team', TeamSchema);

