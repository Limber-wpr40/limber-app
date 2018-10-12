module.exports = {
  getMessages: (req, res) => {
    const db = req.app.get("db");
    let { sender_id, recv_id} = req.query; 
    db.get_message_thread([sender_id, recv_id])
      .then(messages => res.status(200).send(messages))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  getFeed: (req, res) => {
    const db = req.app.get("db");
    let {user_id, match_id} = req.query;
    console.log('my feed',req.query)
    db.get_feed([user_id, match_id])
      .then(messages => res.status(200).send(messages))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "Oops! Something went wrong. Our engineers have been informed!"
        });
        console.log(err);
      });
  },

  addMessage: async (req, res, next) => {
    const db = req.app.get("db");
    const { recv_id, msg_body } = req.body;
    console.log(`the date created is ${create_date}`);
    await db.add_message(req.session.user.user_id, recv_id, msg_body);
    let updatedMessage = await db.get_message_thread(req.session.user.user_id, recv_id);
    res.status(200).send(updatedMessage);
  }
};
