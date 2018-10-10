module.exports = {
  getUserProfile: (req, res, next) => {
    const db = req.app.get("db");
    let id = (req.session.user.user_id);
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
    console.log(req.params.phone);
    let { phone } = req.params;
    let foundUser = await db.get_user_data([phone]);
    if (foundUser[0]) {
      req.session.user = foundUser[0];
      console.log("user is", req.session.user);
      res.status(200).send(req.session.user);
      // res.redirect("/verify");
    } else {
      // res.redirect("/");
    }
  },

  getNewMatches: (req, res, next) => {
    const db = req.app.get("db");
    let id = parseInt(req.params.id);
    db.get_new_matches([id])
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
    let id = parseInt(req.params.id);
    db.get_matches([id])
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
    let { user_id, min_age, max_age, gender, max_distance } = req.session.user
    ;
    console.log('this is a',res.body);
    db.get_matches_by_age_gender_dist(user_id, min_age, max_age, gender, max_distance)
    .then(matches => {
      console.log(matches)
        let filteredMatches = matches.filter(match => match.dist <= max_distance);
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
    let {user_id} = req.session.user;
    const {match_id, super_like } = req.body;
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

  updateMinAge: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, min_age } = req.query;
    db.update_min_age(user_id, min_age)
      .then(settings => res.status(200).send(settings))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  updateMaxAge: (req, res, next) => {
    const db = req.app.get("db");
    const { user_id, max_age } = req.query;
    db.update_max_age(user_id, max_age)
      .then(() => res.sendStatus(200))
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
