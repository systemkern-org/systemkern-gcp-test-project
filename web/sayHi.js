// sayHi.js

/**
 * Returns a string 'Hi' + argument on request.
 *
 * @param {Object} req Express Request Object
 * @param {Object} res Express Request Object
 */
const sayHi = (req, res) => {
    const name = req.query.name || 'there';
    res.end(`Hi ${name}!`);
};
module.exports = sayHi;
