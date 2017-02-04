var eventname = 'MTA Hack 2017';
var eventMediaLinks = {
	website: 'http://ec2-54-213-35-187.us-west-2.compute.amazonaws.com/',
	facebook: 'https://www.facebook.com/mtahack2017',
	twitter: 'https://twitter.com/mtahackathon',
	google: 'https://plus.google.com/u/1/113260219787307001341/'
};
var maxNumOfUsersInTeam = 4; // maximum supported currently is 6, can be only enforce 6 or lower.
module.exports = {
    port: 3000,
    host: 'localhost',
    db: 'mongodb://mta.hackathon:mtahack2017@ds145178.mlab.com:45178/registrationplatform',
    emailAddr: 'mta.hackathon@gmail.com',
    emailPass: 'mtahack2017',
    supportEmailAddr:'mta.hackathon@gmail.com',
    eventname: eventname,
    eventwebsite: eventMediaLinks.website,
    eventMediaLinks: eventMediaLinks,
    maxNumOfUsersInTeam: maxNumOfUsersInTeam,
    adminEmail: 'mta.hackathon@gmail.com'
};

