const s3Accessor = require("../accessor/s3Accessor");

module.exports = class DocumentController {
  constructor() {
    this.s3Accessor = s3Accessor;
  }
  async getAllDocuments() {
    return await this.s3Accessor.getAllDocuments();
  }
};
