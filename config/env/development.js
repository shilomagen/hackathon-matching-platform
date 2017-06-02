const ENV = process.env,
    port = ENV.WEB_PORT || 80,
    host = ENV.IP || '127.0.0.1',
    mongo = ENV.MONGO_URL || '',
    emailAddr = ENV.EMAIL_ADDR || '',
    emailPass = ENV.EMAIL_PASS || '',
    supportEmailAddr = ENV.SUPP_EMAIL_ADDR || '',
    eventname = ENV.EVENT_NAME,
    eventMediaLinks = {
        website: ENV.WEB_SITE,
        facebook: ENV.FACEBOOK,
        twitter: ENV.TWITTER,
        google: ENV.GOOGLE_PLUS
    },
    maxNumOfUsersInTeam = ENV.MAX_USERS,
    adminEmail = ENV.ADMIN_EMAIL;
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

