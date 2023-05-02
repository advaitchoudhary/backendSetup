const Transaction = require("../models/transactions");

//@route api/v1/transaction
//get
const getTransactions = async (req, res, next) => {
  try {
    const transaction = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transaction.length,
      data: transaction,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "server error: " + err.message,
    });
  }
};
//post to add a transaction
const addTransactions = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
  }
};
//delete to delete a Transaction
const deleteTransactions = async (req, res, next) => {
  console.log(req.params.id, "polp");
  try {
    const transactionItem = await Transaction.findById(req.params.id);
    console.log(transactionItem);
    if (!transactionItem) {
      return res.status(404).json({
        success: false,
        error: "Item not found",
      });
    }
    await transactionItem.deleteOne();
    return res.status(200).json({
      success: true,
      data: transactionItem,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "server error",
    });
  }
};
module.exports = { getTransactions, addTransactions, deleteTransactions };
//
