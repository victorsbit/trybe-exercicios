const testResponse = (_req, res) => res.status(200).json({ message: "pong!" });

module.exports = { testResponse };
