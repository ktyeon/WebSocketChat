const {createServer}  =require("http");
const app = require("./app");
const { Server } = require("socket.io");
require("dotenv").config();

const httpServer = createServer(app);
const io = new Server(httpServer,{
    
    cors:{
        origin:"http://localhost:3000",
    },

});

require("./utils/io")(io);
httpServer.listen(precoesss.env.PORT, () => {
    console.log("server listening on port", processs.env.PORT);
});