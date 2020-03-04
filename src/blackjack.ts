import * as fs from "fs";
import path = require("path");
import { readdata } from "./fileservice";

console.log(readdata());
var counterrounds = new Array();
counterrounds = readdata();

const fsplit = counterrounds[0].split(",", 3)[2].split(":");
const psplit = counterrounds[0].split("," ,2);

console.log(fsplit);
console.log(psplit);
console.log(psplit);
