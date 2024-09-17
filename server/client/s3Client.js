const AWS = require("aws-sdk");
const configs = require("../config/configs");
require("dotenv").config();

const creds = {
  endpoint: configs.s3.endpoint,
  accessKeyId: configs.s3.accessKeyId,
  secretAccessKey: configs.s3.secretAccessKey,
  s3ForcePathStyle: configs.s3.s3ForcePathStyle,
  signatureVersion: configs.s3.signatureVersion,
  region: configs.s3.region,
};

const s3 = new AWS.S3(creds);

module.exports = s3;
