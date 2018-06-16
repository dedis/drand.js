const protobuf = require("protobufjs");
const fs = require("fs");
const files = require("file");

const root = new protobuf.Root();
root.define("cothority");

const regex = /^.*\.proto$/;
const protoPath = process.env.GOPATH + "/src/github.com/dedis/drand/protobuf/drand/client.proto";

root.loadSync(protoPath);
console.log("protobufjs reading at" + protoPath);

const modelPath = "typescript/protobuf/model.json";
fs.writeFileSync(modelPath, JSON.stringify(root.toJSON()));
console.log();
console.log("JSON models written in " + modelPath);