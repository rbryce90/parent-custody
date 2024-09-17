const s3 = require("../client/s3Client");

class S3Accessor {
  constructor() {
    this.s3Client = s3;
  }
  async listAllBuckets() {
    try {
      const data = await this.s3Client.listBuckets().promise();

      const buckets = data.Buckets;

      console.log("Buckets:");
      buckets.forEach((bucket) => {
        console.log(`- ${bucket.Name}`);
      });
    } catch (err) {
      console.error("Error listing buckets:", err.message);
    }
  }
  async createBucket(bucketName) {
    // create bucket names that look like
    // userId-timestamp-env
    const params = {
      Bucket: bucketName,
      ACL: "private", // Optional: Set ACL if needed
    };

    try {
      await this.s3Client.createBucket(params).promise();
      console.log(`Bucket "${bucketName}" created successfully!`);
    } catch (err) {
      console.error("Error creating bucket:", err.message);
    }
  }
  async getAllDocuments() {
    await this.createBucket("test");
    await this.listAllBuckets();
    return "getAllDocuments";
  }
}

module.exports = new S3Accessor();
