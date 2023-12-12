const express = require("express");
const gt = require("growtopia-details");
const gts = require("api-growtopia");
const app = express();
const port = 3000;
const { serverStatus } = require("growtopia-api");
let onlineNows = 0,
  onlineNow = 0,
  onlineBefore = 0,
  selisih = 0;

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

app.get("/", (req, res) => {
  res.send(`${selisih}`);
});

serverStatus().then((data) => {
  onlineBefore = data.playerCount;
  console.log(onlineBefore);
});

// gt.getDetail().then((e) => {
//   while (!onlineBefore) {
//     onlineBefore = e.onlineUsersCount;
//   }
//   console.log(onlineBefore, "tes");
// });

// setInterval(() => {
//   gt.getDetail().then((e) => {
//     while (!onlineNow) {
//       onlineNow = e.onlineUsersCount;
//       // console.log(onlineNow)
//     }
//     selisih = onlineNow - onlineBefore;
//     console.log(`selisih = ${selisih < 0 ? selisih : `+${selisih}`} , before = ${onlineBefore} , now = ${onlineNow}`)
//     onlineBefore = onlineNow;
//     onlineNows = onlineNow;
//     onlineNow = 0;
//     console.log(`${selisih < 0 ? "negatif" : "positif"} , ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
//   });
// }, 5000);

setInterval(() => {
  serverStatus()
    .then((data) => {
      console.log(data.playerCount);
      onlineNow = data.playerCount;
      if (!onlineNow || onlineNow == 0) {
        onlineNow = onlineBefore;
        console.log("server error")
      }
      // console.log(onlineNow)
      selisih = onlineNow - onlineBefore;
      console.log(
        `selisih = ${
          selisih < 0 ? selisih : `+${selisih}`
        } , before = ${onlineBefore} , now = ${onlineNow}`
      );
      onlineBefore = onlineNow;
      onlineNows = onlineNow;
      onlineNow = 0;
      console.log(
        `${
          selisih < 0 ? "negatif" : "positif"
        } , ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}\n`
      );
    })
    .catch((err) => {
      //Handle error
      console.error("err");
      sleep(90000)
    });

  // gts.server().then(result => {
  //   console.log(result);

  // }).catch(err => {
  // //Handle error
  //   console.error(err);
  // });
}, 30000);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
