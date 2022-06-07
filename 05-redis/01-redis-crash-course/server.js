const express = require("express");
const cors = require("cors");
const axios = require("axios");
const Redis = require("redis");

// for PR, you can set url to redis
// const client = Redis.createClient({ url: "" });

// for local, default is ok
const redisClient = Redis.createClient();

// 1hr
const DEFAULT_EXPIRATION = 3600;

const app = express();
const PORT = process.env.PORT || 5000;
const url = `https://jsonplaceholder.typicode.com/photos`;

app.use(cors());

// http://localhost:5000/photos
// http://localhost:5000/photos?albumId=1
app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  const photos = await getOrSetCache(`photos?albumId=${albumId}`, async () => {
    const { data } = await axios.get(url, { params: { albumId } });
    return data;
  });
  res.json(photos);
});

// http://localhost:5000/photos/1
app.get("/photos/:id", async (req, res) => {
  const photo = await getOrSetCache(`photos:${req.params.id}`, async () => {
    const { data } = await axios.get(`${url}/${req.params.id}`);
    return data;
  });
  res.json(photo);
});

function getOrSetCache(key, cb) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await redisClient.get(key);
      if (data !== null) {
        resolve(JSON.parse(data));
      }

      // no cache
      const freshData = await cb();
      redisClient.setEx(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));
      resolve(freshData);
    } catch (err) {
      reject(err);
    }
  });
}

redisClient
  .connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
