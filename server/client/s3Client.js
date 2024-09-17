const AWS = require("aws-sdk");
const configs = require("../config/configs");
require("dotenv").config();
const env = process.env.ENV || "local";
const s3Configs = configs[env].s3;

const s3 = new AWS.S3({
  endpoint: s3Configs.endpoint,
  accessKeyId: s3Configs.accessKeyId,
  secretAccessKey: s3Configs.secretAccessKey,
  s3ForcePathStyle: s3Configs.s3ForcePathStyle,
  signatureVersion: s3Configs.signatureVersion,
});

module.exports = s3;
