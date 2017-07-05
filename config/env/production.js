
const ENV = process.env,
    port = ENV.WEB_PORT || 80,
    host = ENV.IP || '127.0.0.1',
    mongo = ENV.MONGO_URL || '',
    emailAddr = ENV.EMAIL_ADDR || '',
    emailPass = ENV.EMAIL_PASS || '',
    supportEmailAddr = ENV.SUPP_EMAIL_ADDR || '',
    eventname = ENV.EVENT_NAME,
    maxNumOfUsersInTeam = ENV.MAX_USERS,
    adminEmail = ENV.ADMIN_EMAIL;

var eventMediaLinks = {
	website: 'http://ec2-34-211-175-129.us-west-2.compute.amazonaws.com',
	facebook: 'https://www.facebook.com/datahackil',
	twitter: 'https://twitter.com/DataHackIL',
	google: 'https://www.google.com'
};
module.exports = {
    port: port,
    host: host,
    db: mongo,
    emailAddr: emailAddr,
    emailPass: emailPass,
    supportEmailAddr: supportEmailAddr,
    eventname: eventname,
    eventwebsite: eventMediaLinks.website,
    eventMediaLinks: eventMediaLinks,
    maxNumOfUsersInTeam: maxNumOfUsersInTeam,
    adminEmail: adminEmail
};

