-- Example Get Request
local requestInfo = {
    url = "https://wheels-binding-defense-classroom.trycloudflare.com"
}
local response = httpReq(requestInfo)

if response.success then
    log("Response Body:", response.body)
else
    log("Request Failed. Error Message:", response.failInfo)
end

var http = require('http');
const { itemInfo } = require("growtopia-api");

const { serverStatus } = require("growtopia-api");

serverStatus.then(console.log);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("sd");
  res.end();
}).listen(8080);

C:\Users\Windows>cloudflared tunnel --url localhost:3000

const { serverStatus } = require("growtopia-api");

serverStatus().then(console.log);

/*
    Example output (returns Object):

    {
        date: "Oct 18",
        time: " 10:05:36",
        playerCount: 48966,
        wotdName: "HETERODOXY",
        wotdURL: "https://www.growtopiagame.com/worlds/heterodoxy.png"
    }

    */