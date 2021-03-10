import { IFilesAdapter } from "./IFilesAdapter";
import { Config } from "../../Config";

type S3Config = {
  /**
   * ENV: `S3_BUCKET`
   */
  bucket?: string;

  /**
   * Defaults to `null`
   *
   * ENV: `S3_ACCESS_KEY`
   */
  accessKey?: string;

  /**
   * Defaults to `null`
   *
   * ENV: `S3_SECRET_KEY`
   */
  secretKey?: string;

  /**
   * Defaults to `''`
   *
   * ENV: `S3_BUCKET_PREFIX`
   */
  bucketPrefix?: string;

  /**
   * Defaults to `us-east-1`
   *
   * ENV: `S3_REGION`
   */
  region?: string;

  /**
   * Defaults to `false`
   *
   * ENV: `S3_DIRECT_ACCESS`
   */
  directAccess?: boolean;

  /**
   * Defaults to `null`
   *
   * ENV: `S3_BASE_URL`
   */
  baseUrl?: string;

  /**
   * Defaults to `false`
   *
   * ENV: `S3_BASE_URL_DIRECT`
   */
  baseUrlDirect?: boolean;

  /**
   * Defaults to `v4`
   *
   * ENV: `S3_SIGNATURE_VERSION`
   */
  signatureVersion?: string;

  /**
   * Defaults to `null`
   *
   * ENV: `S3_GLOBAL_CACHE_CONTROL`
   */
  globalCacheControl?: string;
};

export declare class S3Adapter implements IFilesAdapter {
  constructor(bucket: string, options?: S3Config);
  constructor(options: S3Config, override: S3Config);

  /**
   * Create S3 bucket from options
   */
  createBucket(): Promise<void>;

  /**
   * For a given config object, filename, and data, store a file in S3.
   * Returns a promise containing the S3 object creation response.
   */
  createFile(filename: string, data: any, contentType: string): Promise<any>;

  deleteFile(filename: string): Promise<void>

  /**
   * Search for and return a file if found by filename.
   * Returns a promise that succeeds with the buffer result from S3.
   */
  getFileData(filename: string): Promise<Buffer>

  /**
   * Generates and returns the location of a file stored in S3 for the given request and filename,
   * Location is the direct S3 link if the option is set, otherwise we serve the file through parse-server.
   */
  getFileLocation(config: Config, filename: string): string
}
