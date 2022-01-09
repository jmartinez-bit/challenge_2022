const fs = require('fs');
const Links = require('../models/Links');
const redis = require("redis");
const { promisify } = require("util");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);

const file = './db/data.json';

const links = new Links();

// ADD Link
const saveLink = async (url, title, tags) => {

  try {
    const listLinks = listAll();
  
    if (listLinks) {
      links.readLinksFromArray(listLinks);
    }

    links.createLink(url, title, tags.toString());

    fs.writeFileSync(file, JSON.stringify(links.list))

    await SET_ASYNC("links", JSON.stringify(links.list));
    console.log("New link created");

    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// List all links
const listAll = () => {
  try {
    if (!fs.existsSync(file)) {
      return null;
    }
    const info = fs.readFileSync(file, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
    // await connection.close();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = {
  saveLink,
  listAll
};