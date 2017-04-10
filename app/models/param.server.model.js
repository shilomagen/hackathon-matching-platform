var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ParamSchema = new Schema({
    name: {type: String, unique: true, index: true},
    isOpen: {type: Boolean, default: false}
});

mongoose.model('Param', ParamSchema);