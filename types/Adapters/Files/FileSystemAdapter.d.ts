import { IFilesAdapter } from './IFilesAdapter'
import { Config } from '../../Config';

type FileSystemAdapterOptions = {
  filesSubDirectory?: string
}

export declare class FileSystemAdapter implements IFilesAdapter {
  constructor(options: FileSystemAdapterOptions)
  createFile<T>(filename: string, data: T): Promise<T>
  deleteFile(filename: string): Promise<any>
  getFileData(filename: string): Promise<any>
  getFileLocation(config: Config, filename: string): string
}
