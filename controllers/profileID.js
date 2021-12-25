const handleProfileID = (db) => (req, res) => {
    const { id } = req.params;
    db.select('*').from('users').where({id})
    .then(user => {
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json('user not found');
        }
    });
}

module.exports = {
    handleProfileID
};