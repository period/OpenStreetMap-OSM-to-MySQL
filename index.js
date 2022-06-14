const cheario = require("cheerio");
const fs = require("fs");
const sqlstring = require("sqlstring");
var $ = cheario.load(fs.readFileSync("./planet.osm"), {xmlMode: true});

$("node").each(function() {
    let node_id = sqlstring.escape($(this).attr("id"));
    console.log("INSERT INTO `node` SET id = " + node_id + ", position = POINT(" + sqlstring.escape($(this).attr("lon")) + "," + sqlstring.escape($(this).attr("lat")) + ");");
    $(this).children("tag").each(function() {
        console.log("INSERT INTO `node_tag` SET node_id = " + node_id + ", `name` = " + sqlstring.escape($(this).attr("k")) + ", `value` = " + sqlstring.escape($(this).attr("v")) + ";");
    });
});

