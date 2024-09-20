# curl -X GET http://localhost:4000/api/document/buckets
# curl -X POST http://localhost:4000/api/document/bucket/user-pdfs
curl -X POST http://localhost:4000/api/document/pdf/upload \
    -H 'Content-Type: application/pdf' \
    -F 'file=@./testPDF.pdf'