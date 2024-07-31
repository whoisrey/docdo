const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DocumentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  writers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },

  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

DocumentSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  next();
});

const Document = mongoose.model("Document", DocumentSchema);

module.exports = Document;
