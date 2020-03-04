"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
function readdata() {
    var link = path.join(__dirname, "testdata.txt");
    var matches = fs
        .readFileSync(link, {
        encoding: "utf-8"
    })
        .split(';');
    var numberofrounds = matches.length - 1;
    var rounds = new Array();
    for (var index = 0; index < numberofrounds; index++) {
        rounds[index] = matches[index];
    }
    return rounds;
}
exports.readdata = readdata;
