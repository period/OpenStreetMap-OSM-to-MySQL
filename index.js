const cheario = require("cheerio");
const fs = require("fs");

var $ = cheerio.load(fs.readFileSync("./planet.osm"), {xmlMode: true});