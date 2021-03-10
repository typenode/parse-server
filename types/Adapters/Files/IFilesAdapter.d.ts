import { Config } from '../../Config';

/**
 * Files Adapter.
 *
 * Allows you to change the file storage mechanism.
 *
 * Default is GridFSBucketAdapter, which requires mongo
 * and for the API server to be using the DatabaseController
 * with Mongo database adapter.
 */
export declare interface IFilesAdapter {
  /**
   * Responsible for storing the file in order to be retrieved later by its filename
   *
   * @param {string} filename - filename to save
   * @param {Buffer} data - buffer of data from the file
   * @param {string} contentType - supposed contentType
   *
   * @return {Promise} a promise that should fail if the storage didn't succeed
   */
  createFile(filename: string, data: any, contentType?: string): Promise<void>

  /**
   * Responsible for deleting the specified file
   *
   * @param {string} filename - the filename to delete
   *
   * @return {Promise} a promise that should fail if the deletion didn't succeed
   */
  deleteFile(filename: string): Promise<void>

  /**
   * Responsible for retrieving the data of the specified file
   *
   * @param {string} filename - the name of file to retrieve
   *
   * @return {Promise} a promise that should pass with the file data or fail on error
   */
  getFileData(filename: string): Promise<any>

  /**
   * Returns an absolute URL where the file can be accessed
   *
   * @param {Config} config - server configuration
   * @param {string} filename
   *
   * @return {string} Absolute URL
   */
  getFileLocation(config: Config, filename: string): string
}
