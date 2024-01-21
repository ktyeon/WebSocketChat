// It is the Schema to explain and disturibe the chat data type

const mongoose = requrie ("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        // message
        user: {
            id: {
                type:mongoose.Schema.ObjectId,
                ref: "User",
            },
            name : String,
        },
    },
    {timestamp : true}
);

module.exports = mongoose.model ("Chat", chatSchema);