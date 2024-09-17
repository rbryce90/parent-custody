require("dotenv").config();
const env = process.env.ENV || "local";

const configs = {
  local: {
    s3: {
      endpoint: "http://localhost:9000", // MinIO endpoint
      accessKeyId: "minioadmin", // Your MinIO access key
      secretAccessKey: "minioadmin", // Your MinIO secret key
      s3ForcePathStyle: true, // Required for MinIO
      signatureVersion: "v4", // Required for MinIO
      region: "us-east-1", // You need to specify the region
    },
    db: {
      connectionString:
        "postgres://myuser:mypassword@localhost:5432/mydatabase",
    },
    port: 4000,
  },
};

module.exports = configs[env || "local"];
