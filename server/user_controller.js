module.exports = {

    getUserProfile: (req, res, next) => {
        const db = req.app.get('db');
        let id = parseInt(req.params.id);
        db.get_user_profile([id])
            .then(profile => res.status(200).send(profile))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    getUserData: (req, res, next) => {
        const db = req.app.get('db');
        let id = parseInt(req.params.id);
        db.get_user_data([id])
            .then(user => res.status(200).send(user))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    getMatches: (req, res, next) => {
        const db = req.app.get('db');
        let id = parseInt(req.params.id);
        db.get_matches([id])
            .then(matches => res.status(200).send(matches))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    
    getPossibleMatches: (req, res, next) => {
        const db = req.app.get('db');
        let id = parseInt(req.params.id);
        db.get_pot_matches_by_age_range([id, 30, 38, 'Female'])
            .then(matches => res.status(200).send(matches))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    },

    addLike: (req, res, next) => {
        const db = req.app.get('db');
        const { user_id, match_id, super_like } = req.body;
        console.log(req.body)
        db.add_like([user_id, match_id, super_like ])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });

    },

    addMessage: async (req, res, next) => {
        const db = req.app.get('db');
        const { create_date, sender_id, recv_id, msg_body } = req.body;
        console.log(req.body)
        let updatedMessage = db.add_message([create_date,sender_id, recv_id, msg_body ])
            .then(() => res.status(200).send(updatedMessage))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });

    },


    updateMinAge: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_product([ params.id, query.body ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },

      updateMaxAge: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_max_age([ params.id, query.body ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },

      updateDistance: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_distance([ params.id, query.body ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },

      updateProfile: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
    
        dbInstance.update_profile([ params.id, query.body ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
      },



    deleteUser: (req, res, next) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_user([id])
            .then(() => res.sendStatus(200))
            .catch(err => {
                res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
                console.log(err)
            });
    }
}