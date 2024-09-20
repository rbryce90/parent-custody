const s3 = require("../client/s3Client");

class S3Accessor {
  constructor() {
    this.s3Client = s3;
  }
  async createBucket(bucketName) {
    const params = {
      Bucket: bucketName,
    };

    try {
      return await this.s3Client.createBucket(params).promise();
    } catch (err) {
      console.error("Error creating bucket:", err.message);
    }
  }

  async getAllBuckets() {
    try {
      const data = await this.s3Client.listBuckets().promise();
      return data.Buckets;
    } catch (err) {
      console.error("Error listing buckets:", err.message);
    }
  }
  async uploadPdf() {
    return "uploadPDF";
  }
}

module.exports = new S3Accessor();
