const { Schema, model } = require('mongoose');

const { handleMongooseError } = require('../helpers');

const viewSchema = new Schema(
  {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
  },
  { versionKey: false, timestamps: true }
);

viewSchema.post('save', handleMongooseError);

const View = model('view', viewSchema);

module.exports = View;
