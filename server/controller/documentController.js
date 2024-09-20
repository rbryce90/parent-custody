const s3Accessor = require("../accessor/s3Accessor");

module.exports = class DocumentController {
  constructor() {
    this.s3Accessor = s3Accessor;
  }
  async getAllBuckets() {
    return await this.s3Accessor.getAllBuckets();
  }
  async createBucket(bucketName) {
    return await this.s3Accessor.createBucket(bucketName);
  }
  async uploadPdf() {
    return await this.s3Accessor.uploadPdf();
  }
};
