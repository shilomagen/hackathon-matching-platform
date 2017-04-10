const async = require('async'),
    paramsConfig = require('./params.config');
const initTasks = [paramsConfig.resetParamsCollection, paramsConfig.initiateDefaultParams];

exports.initApp = () => {
    console.log(`Initiating app ...`);
    return new Promise((resolve, reject) => {
        async.waterfall(initTasks, (err, tasks) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(`===> App initiated successfully`);
                resolve();
            }
        });
    });
};