import { Express } from "express";
import { ParseServer } from "./ParseServer";
import { ParseServerOptions } from "./Options";

import { LoggerAdapter } from "./Adapters/Logger/LoggerAdapter";

import { ICacheAdapter } from "./Adapters/Cache/ICacheAdapter";
import { InMemoryCacheAdapter } from "./Adapters/Cache/InMemoryCacheAdapter";
import { RedisCacheAdapter } from "./Adapters/Cache/RedisCacheAdapter";
import { LRUCacheAdapter } from "./Adapters/Cache/LRUCacheAdapter";
import { NullCacheAdapter } from "./Adapters/Cache/NullCacheAdapter";

import { IFilesAdapter } from "./Adapters/Files/IFilesAdapter";
import { FileSystemAdapter } from "./Adapters/Files/FileSystemAdapter";
import { S3Adapter } from "./Adapters/Files/S3Adapter";

import { PushWorker } from "./Push/PushWorker";

import * as TestUtils from "./TestUtils";

declare function _ParseServer(options: ParseServerOptions): Express.Application;
declare const logger: LoggerAdapter

export {
  logger,
  TestUtils,
  ICacheAdapter,
  InMemoryCacheAdapter,
  RedisCacheAdapter,
  LRUCacheAdapter,
  NullCacheAdapter,
  IFilesAdapter,
  FileSystemAdapter,
  S3Adapter,
  _ParseServer as ParseServer,
  ParseServerOptions,
};

export default ParseServer;
