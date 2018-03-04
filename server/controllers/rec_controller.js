module.exports = {
    getPeople: (req, res) => {
        // console.log(req.body.value);
        const { key, value, id } = req.body
        console.log(key, value, id);
        const db = req.app.get('db');
        db.get_recommends([id]).then(result => {
            console.log(result);
            res.status(200).send(result);

        })
    }
}