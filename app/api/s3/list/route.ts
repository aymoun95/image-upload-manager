import { S3 } from "@/lib/S3Client";
import { GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const pageSize = Number(searchParams.get("pageSize") ?? 3);
  const cursor = searchParams.get("cursor") ?? undefined;

  const listCommand = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET_NAME!,
    MaxKeys: pageSize,
    ContinuationToken: cursor,
  });

  const response = await S3.send(listCommand);

  const files = await Promise.all(
    (response.Contents ?? []).map(async (file) => {
      if (!file.Key) return null;

      const getCommand = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: file.Key,
      });

      const url = await getSignedUrl(S3, getCommand, {
        expiresIn: 300,
      });

      return {
        key: file.Key,
        url,
      };
    })
  );

  return NextResponse.json({
    files: files.filter(Boolean),
    nextCursor: response.IsTruncated ? response.NextContinuationToken : null,
  });
}
