const multer = require("multer");
const tf = require("@tensorflow/tfjs-node");
const mobilenet = require("@tensorflow-models/mobilenet");
const path = require("path");
exports.upload = multer({ dest: "uploads/" });
