const Mongoose = require("mongoose");
const TransactionSchema = new Mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please enter a text"],
  },
  amount: {
    type: Number,
    required: [true, "Please enter a amount -ve or +ve"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: [true, "Please enter the date of Creation"],
  },
});
module.exports = Mongoose.model("Transaction", TransactionSchema);
