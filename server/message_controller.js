module.exports = {

getMessages:(req,res)=>{
    const db = req.app.get('db');
    let {sender_id, recv_id} = req.query;
    console.log(`My sender and receiver are: ${sender_id} and ${recv_id}`)
    db.get_message_thread(sender_id, recv_id)
        .then(messages => res.status(200).send(messages))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
        });
},

    addMessage: async (req, res, next) => {
        const db = req.app.get('db');
        const {create_date, sender_id, recv_id, msg_body} = req.body;
        console.log(`the date created is ${create_date}`)
        let updatedMessage = await  db.get_message_thread(sender_id, recv_id)
            res.status(200).send(updatedMessage)
           
            

    },







}