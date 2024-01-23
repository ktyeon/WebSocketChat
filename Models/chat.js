// It is the Schema to explain and distribute the chat data type

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
    {
        chat: String,
        // message
        user: {
            id: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
            },
            name: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Chat", chatSchema);
