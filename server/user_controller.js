module.exports = {

    getUserProfile: (req, res, next) => {
        const db = req.app.get('db');

        db.get_user_profile()
            .then(featured => res.status(200).send(featured))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    getSpeakers: (req, res, next) => {
        const db = req.app.get('db');

        db.get_speakers()
            .then(speakers => res.status(200).send(speakers))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    addSpeaker: (req, res, next) => {
        const db = req.app.get('db');
        const { speaker_name, speaker_title, speaking_date, speaker_bio, speaker_image } = req.body;
        console.log(req.body)
        db.add_speaker([speaker_name, speaker_title, speaking_date, speaker_bio, speaker_image ])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });

    },
    updateSpeaker: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.title ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },



    deleteSpeaker: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_speaker([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    }
}