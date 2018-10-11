module.exports = {

  getUserProfile: (req, res, next) => {
    const db = req.app.get("db");
    let id = req.session.user.user_id;
    db.get_user_profile([id])
      .then(profile => res.status(200).send(profile))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  getUserSettings: (req, res, next) => {
    res.send(req.session.user);
  },

  getUserData: async (req, res, next) => {
    const db = req.app.get("db");
    let { phone } = req.params;
    let foundUser = await db.get_user_data([phone]);
    if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.status(200).send(req.session.user);
      // res.redirect("/verify");
    } else {
      // res.redirect("/");
    }
  },

  getNewMatches: (req, res, next) => {
    const db = req.app.get("db");
    let {id} = (req.params);
    console.log(req.params)
    db.get_new_matches(id)
      .then(matches => res.status(200).send(matches))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },
  
  getMatches: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.params.id)
    let {id} = req.params;
    console.log(id)
    db.get_matches(id)
      .then(matches => res.status(200).send(matches))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  getPossibleMatches: (req, res, next) => {
    const db = req.app.get("db");
    let { user_id, min_age, max_age, gender, max_distance } = req.session.user;
    db.get_matches_by_age_gender_dist(
      user_id,
      min_age,
      max_age,
      gender,
      max_distance
    )
      .then(matches => {
        let filteredMatches = matches.filter(
          match => match.dist <= max_distance
        );
        res.status(200).send(filteredMatches);
      })
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  addLike: (req, res, next) => {
    const db = req.app.get("db");
    let { user_id } = req.session.user;
    const { match_id, super_like } = req.body;
    console.log(req.body);
    db.add_like(user_id, match_id, super_like)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  updateSettings: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id } = req.session.user;
    const { min_age, max_age, max_distance } = req.body;
    console.log("these are the settings", req.body);
    db.update_settings(user_id, min_age, max_age, max_distance)
      .then((updates) =>{
        req.session.user = {...req.session.user,...updates[0]}
        res.sendStatus(200)})
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  updateDistance: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, max_distance } = req.query;
    console.log(req.query);
    db.update_distance(user_id, max_distance)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  updateProfile: (req, res, next) => {
    const db = req.app.get("db");
    const { params, query } = req.query;

    dbInstance;
    db.update_profile(params.id, query.body)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  deleteUser: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_user([id])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  }
};
