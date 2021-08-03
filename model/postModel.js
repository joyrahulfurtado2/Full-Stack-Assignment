const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

const postSchema = mongoose.Schema({
    articleTitle: {
        type: String,
    },
    articleNo: {
        type: Number,
    },
    articleBody: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

autoIncrement.initialize(mongoose);

postSchema.plugin(autoIncrement.plugin,{model:'Item', field:'postNo', startAt:10, incrementBy:1})

const Item = mongoose.model('Item', postSchema);

module.exports = Item;