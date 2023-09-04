const { Schema, model } = require('mongoose');

const { mongooseError } = require('../utils');

const viewSchema = new Schema(
  {
    title: { type: String, default: '' },
    text: { type: String, default: '' },
  },
  { versionKey: false, timestamps: true }
);

viewSchema.post('save', mongooseError);

const View = model('view', viewSchema);

module.exports = View;
