const Account = require("../models/Account");
const getAccounts = async (req, res) => {
  try {
    const data = await Account.getAll();
    return res.status(200).json(data.accounts);
  } catch (err) {
    console.error(err);
    return res.status(404).json(err);
  }
};

const getById = async (req, res) => {
  try {
    const account = await Account.getById(req.params.id);
    return res.status(200).json(account);
  } catch (err) {
    console.error(err);
    return res.status(404).json(err);
  }
};

module.exports = { getAccounts, getById };
