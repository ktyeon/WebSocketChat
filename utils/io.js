const userController = require("../Controllers/user.controller");
const chatController = require("../Controllers/chat.controller");

module.exports = function (io) {
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("signin", async (userName, cb) => {
      console.log("Backend:", userName);

      try {
        const user = await userController.saveUser(userName, socket.id);

        const welcomeMessage = {
          chat: `${user.name} has joined the chat`,
          user: { id: null, name: "system" },
        };

        io.emit("message", welcomeMessage);

        cb({ ok: true, data: user });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    socket.on("sendMessage", async (message, cb) => {
      try {
        const user = await userController.checkUser(socket.id);
        const newMessage = await chatController.saveChat(message, user);
        io.emit("message", newMessage);
        cb({ ok: true });
      } catch (error) {
        cb({ ok: false, error: error.message });
      }
    });

    socket.on("disconnect", async () => {
      try {
        const user = await userController.checkUser(socket.id);

        if (user) {
          const farewellMessage = {
            chat: `${user.name} has left the chat`,
            user: { id: null, name: "system" },
          };

          io.emit("message", farewellMessage);
        }

        console.log("user is disconnected");
      } catch (error) {
        console.error("Error handling disconnect:", error.message);
      }
    });
  });
};
