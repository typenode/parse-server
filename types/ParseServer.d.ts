import { Server } from "http";
import { Application } from "Express";

import { PromiseRouter } from "./PromiseRouter";
import { Config, ServerConfiguration } from "./Config";
import { ParseServerOptions, LiveQueryServerOptions } from "./Options";
import { ParseLiveQueryServer } from "./LiveQuery/ParseLiveQueryServer";

export class ParseServer {
  private config: ServerConfiguration;

  public app: Application;
  public expressApp: Application;

  /**
   * @constructor
   * @param {ParseServerOptions} options parse server initialization options
   */
  constructor(options: ParseServerOptions);

  handleShutdown(): void;

  /**
   * @static
   * Create an express app for the parse server
   * @param {Object} options let you specify the maxUploadSize when creating the express app  */
  static app(props: { maxUploadSize: string; appId: string }): Application;

  static promiseRouter(props: { appId: string }): PromiseRouter;

  /**
   * Starts the parse server's express app
   * @param {ParseServerOptions} options to use to start the server
   * @param {Function} callback called when the server has started
   * @returns {ParseServer} the parse server instance
   */
  start(options: ParseServerOptions, callback?: () => void): this;

  /**
   * Creates a new ParseServer and starts it.
   * @param {ParseServerOptions} options used to start the server
   * @param {Function} callback called when the server has started
   * @returns {ParseServer} the parse server instance
   */
  static start(options: ParseServerOptions, callback?: () => void): ParseServer;

  /**
   * Helper method to create a liveQuery server
   * @static
   * @param {Server} httpServer an optional http server to pass
   * @param {LiveQueryServerOptions} config options fot he liveQueryServer
   * @returns {ParseLiveQueryServer} the live query server instance
   */
  static createLiveQueryServer(httpServer: Server, config: LiveQueryServerOptions): ParseLiveQueryServer

  static verifyServerUrl(callback?: (isValid: boolean) => void): void;
}
