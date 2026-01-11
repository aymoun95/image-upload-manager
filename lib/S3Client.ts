import "server-only";

import { S3Client } from "@aws-sdk/client-s3";

const options = {
  region: process.env.S3_REGION || "auto",
  endpoint: process.env.S3_ENDPOINT,
  forcePathStyle: true, // Often needed for local S3-compatible storage like MinIO
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
  },
};

export const S3 = new S3Client(options);
