import { App, Stack, StackProps, RemovalPolicy } from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class HelloCdkStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new s3.Bucket(this, 'MyFirstBucket', {
      versioned: false,
      removalPolicy: RemovalPolicy.DESTROY
    });
    new s3.Bucket(this, 'MyEncryptedBucket', {
      versioned: false,
      encryption: s3.BucketEncryption.KMS,
      websiteIndexDocument: 'index.html'
    });
  }
}