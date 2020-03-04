import * as fs from "fs";
import path = require("path");

export function readdata(): string[] {
  const link = path.join(__dirname, "testdata.txt");
  const matches = fs
    .readFileSync(link, {
      encoding: "utf-8"
    })
    .split(';');
  const numberofrounds = matches.length - 1;
  var rounds = new Array();
  for (let index = 0; index < numberofrounds; index++) {
    rounds[index] = matches[index];
  }
  return rounds;
}
