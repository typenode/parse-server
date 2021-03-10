import { AnalyticsAdapter } from "./Adapters/Analytics/AnalyticsAdapter";
import { IFilesAdapter }    from "./Adapters/Files/IFilesAdapter";
import { LoggerAdapter }    from "./Adapters/Logger/LoggerAdapter";
import { StorageAdapter }   from "./Adapters/Storage/StorageAdapter";
import { ICacheAdapter }    from "./Adapters/Cache/ICacheAdapter";
import { MailAdapter }      from "./Adapters/Email/MailAdapter";
import { PubSubAdapter }    from "./Adapters/PubSub/PubSubAdapter";

type Adapter<T> = string | any | T;
type NumberOrBoolean = number | boolean;

export declare interface ParseServerOptions {
  /**
   * Your Parse Application ID.
   *
   * ENV: `PARSE_SERVER_APPLICATION_ID`
   */
  appId: string;

  /**
   * Your Parse Master Key
   */
  masterKey: string;

  /**
   * URL to your parse server with http:// or https://.
   *
   * ENV: `PARSE_SERVER_URL`
   */
  serverURL: string;

  /**
   * Restrict masterKey to be used by only these ips.
   *
   * Defaults to [] (allow all ips)
   */
  masterKeyIps?: string[];

  /**
   * Sets the app name
   */
  appName?: string;

  /**
   * Adapter module for the analytics
   */
  analyticsAdapter?: Adapter<AnalyticsAdapter>;

  /**
   * Adapter module for the files sub-system
   */
  filesAdapter?: Adapter<IFilesAdapter>;

  /**
   * Configuration for push, as stringified JSON.
   * See http://docs.parseplatform.org/parse-server/guide/#push-notifications
   */
  push?: any;

  /**
   * Configuration for push scheduling.
   * Defaults to false.
   */
  scheduledPush?: boolean;

  /**
   * Adapter module for the logging sub-system
   */
  loggerAdapter?: Adapter<LoggerAdapter>;

  /**
   * Log as structured JSON objects.
   *
   * ENV: `JSON_LOGS`
   */
  jsonLogs?: boolean;

  /**
   * Folder for the logs.
   * Set to `null` to disable file based logging.
   *
   * Defaults to `'./logs'`
   *
   * ENV: `PARSE_SERVER_LOGS_FOLDER`
   */
  logsFolder?: string;

  /**
   * Set the logging to verbose
   *
   * ENV: `VERBOSE`
   */
  verbose?: boolean;

  /**
   * Sets the level for logs
   */
  logLevel?: string;

  /**
   * Disables console output
   *
   * ENV: `SILENT`
   */
  silent?: boolean;

  /**
   * The full URI to your database.
   * Supported databases are mongodb or postgres.
   *
   * Defaults to `mongodb://localhost:27017/parse`.
   */
  databaseURI: string;

  /**
   * Options to pass to the mongodb client
   */
  databaseOptions?: any;

  /**
   * Adapter module for the database
   */
  databaseAdapter?: Adapter<StorageAdapter>;

  /**
   * Full path to your cloud code main.js
   */
  cloud?: string | (() => any);

  /**
   * A collection prefix for the classes.
   *
   * Defaults to `''`
   */
  collectionPrefix?: string;

  /**
   * Key for iOS, MacOS, tvOS clients
   */
  clientKey?: string;

  /**
   * Key for the Javascript SDK
   */
  javascriptKey?: string;

  /**
   * Key for Unity and .Net SDK
   */
  dotNetKey?: string;

  /**
   * Key for REST calls
   *
   * ENV: `PARSE_SERVER_REST_API_KEY`
   */
  restAPIKey?: string;

  /**
   * Read-only key, which has the same capabilities as MasterKey without writes
   */
  readOnlyMasterKey?: string;

  /**
   * Key sent with outgoing webhook calls
   */
  webhookKey?: string;

  /**
   * Key for your files
   */
  fileKey?: string;

  /**
   * Enable (or disable) the addition of a unique hash to the file names.
   *
   * Defaults to `false`
   *
   * ENV: `PARSE_SERVER_PRESERVE_FILE_NAME`
   */
  preserveFileName?: boolean;

  /**
   * Personally identifiable information fields in the user table
   * that should be removed for non-authorized users.
   *
   * Defaults to `['email']`
   */
  userSensitiveFields?: string[];

  /**
   * Enable (or disable) anonymous users.
   *
   * Defaults to `true`
   *
   * ENV: `PARSE_SERVER_ENABLE_ANON_USERS`
   */
  enableAnonymousUsers?: boolean;

  /**
   * Enable (or disable) client class creation.
   *
   * Defaults to `true`
   *
   * ENV: `PARSE_SERVER_ALLOW_CLIENT_CLASS_CREATION`
   */
  allowClientClassCreation?: boolean;

  /**
   * Configuration for your authentication providers, as stringified JSON.
   * See http://docs.parseplatform.org/parse-server/guide/#oauth-and-3rd-party-authentication.
   *
   * ENV: `PARSE_SERVER_AUTH_PROVIDERS`
   */
  auth?: any;

  /**
   * Max file size for uploads.
   *
   * Defaults to `20mb`
   */
  maxUploadSize?: string;

  /**
   * Enable (or disable) user email validation.
   *
   * Defaults to `false`
   */
  verifyUserEmails?: boolean;

  /**
   * Prevent user from login if email is not verified
   * and `PARSE_SERVER_VERIFY_USER_EMAILS` is true.
   *
   * Defaults to `false`
   */
  preventLoginWithUnverifiedEmail?: boolean;

  /**
   * Email verification token validity duration, in seconds
   */
  emailVerifyTokenValidityDuration?: number;

  /**
   * Account lockout policy for failed login attempts
   */
  accountLockout?: any;

  /**
   * Password policy for enforcing password related rules
   */
  passwordPolicy?: any;

  /**
   * Adapter module for the cache
   */
  cacheAdapter?: Adapter<ICacheAdapter>;

  /**
   * Adapter module for email sending
   */
  emailAdapter?: Adapter<MailAdapter>;

  /**
   * Public URL to your parse server with http:// or https://.
   *
   * ENV: `PARSE_PUBLIC_SERVER_URL`
   */
  publicServerURL?: string;

  /**
   * Custom pages for password validation and reset.
   *
   * Defaults to `{}`
   */
  customPages?: CustomPagesOptions;

  /**
   * parse-server's LiveQuery configuration object
   */
  liveQuery?: LiveQueryOptions;

  /**
   * Session duration, in seconds.
   *
   * Defaults to `31536000` (1 year)
   */
  sessionLength?: number;

  /**
   * Max value for limit option on queries, defaults to unlimited.
   */
  maxLimit?: number;

  /**
   * Sets wether we should expire the inactive sessions.
   *
   * Defaults to `true`
   */
  expireInactiveSessions?: boolean;

  /**
   * When a user changes their password, either through the reset password email
   * or while logged in, all sessions are revoked if this is true.
   *
   * Set to false if you don't want to revoke sessions.
   *
   * Defaults to `true`
   */
  revokeSessionOnPasswordReset?: boolean;

  /**
   * The TTL for caching the schema for optimizing read/write operations.
   * You should put a long TTL when your DB is in production.
   * Set 0 to disable.
   *
   * Defaults to `5000`.
   */
  schemaCacheTTL?: number;

  /**
   * Sets the TTL for the in memory cache (in ms).
   *
   * Defaults to `5000` (5 seconds)
   */
  cacheTTL?: number;

  /**
   * Sets the maximum size for the in memory cache.
   *
   * Defaults to `10000`
   */
  cacheMaxSize?: number;

  /**
   * Use a single schema cache shared across requests.
   * Reduces number of queries made to _SCHEMA.
   *
   * Defaults to `false` (unique schema cache per request)
   */
  enableSingleSchemaCache?: boolean;

  /**
   * Enables the default express error handler for all errors.
   *
   * Defaults to `false`
   */
  enableExpressErrorHandler?: boolean;

  /**
   * Sets the number of characters in generated object id's.
   *
   * Defaults to `10`
   */
  objectIdSize?: number;

  /**
   * The port to run the ParseServer.
   *
   * Defaults to `1337`.
   *
   * ENV: `PORT`
   */
  port?: number;

  /**
   * The host to serve ParseServer on.
   *
   * Defaults to `0.0.0.0`
   */
  host?: string;

  /**
   * Mount path for the server.
   *
   * Defaults to `'/parse'`
   */
  mountPath?: string;

  /**
   * Run with cluster, optionally set the number of processes default to os.cpus().length
   */
  cluster?: NumberOrBoolean;

  /**
   * Middleware for express server, can be string or function
   */
  middleware?: (() => void) | string;

  /**
   * Starts the liveQuery server
   */
  startLiveQueryServer?: boolean;

  /**
   * Live query server configuration options (will start the liveQuery server)
   */
  liveQueryServerOptions?: LiveQueryServerOptions;

  __indexBuildCompletionCallbackForTests?: () => void;
}

export interface CustomPagesOptions {
  /**
   * Invalid link page path
   */
  invalidLink?: string;

  /**
   * Verify email success page path
   */
  verifyEmailSuccess?: string;

  /**
   * Choose password page path
   */
  choosePassword?: string;

  /**
   * Password reset success page path
   */
  passwordResetSuccess?: string;
}

export interface LiveQueryOptions {
  /**
   * parse-server's LiveQuery classNames
   * ENV: `PARSE_SERVER_LIVEQUERY_CLASSNAMES`
   */
  classNames?: string[];

  /**
   * parse-server's LiveQuery redisURL
   */
  redisURL?: string;

  /**
   * LiveQuery pubsub adapter
   */
  pubSubAdapter?: Adapter<PubSubAdapter>;
}

export interface LiveQueryServerOptions {
  /**
   * This string should match the appId in use by your Parse Server.
   * If you deploy the LiveQuery server alongside Parse Server,
   * the LiveQuery server will try to use the same appId.
   */
  appId?: string;

  /**
   * This string should match the masterKey in use by your Parse Server.
   * If you deploy the LiveQuery server alongside Parse Server,
   * the LiveQuery server will try to use the same masterKey.
   */
  masterKey?: string;

  /**
   * This string should match the serverURL in use by your Parse Server.
   * If you deploy the LiveQuery server alongside Parse Server,
   * the LiveQuery server will try to use the same serverURL.
   */
  serverURL?: string;

  /**
   * A JSON object that serves as a whitelist of keys.
   * It is used for validating clients when they try to connect to the LiveQuery server.
   * Check the following Security section and our protocol specification for details.
   */
  keyPairs?: any;

  /**
   * Number of milliseconds between ping/pong frames.
   * The WebSocket server sends ping/pong frames to the clients to keep the WebSocket alive.
   * This value defines the interval of the ping/pong frame from the server to clients.
   *
   * Defaults to 10 * 1000 ms (10s).
   */
  websocketTimeout?: number;

  /**
   * Number in milliseconds.
   * When clients provide the sessionToken to the LiveQuery server,
   * the LiveQuery server will try to fetch its ParseUser's objectId from parse server and store it in the cache.
   * The value defines the duration of the cache.
   * Check the following Security section and our protocol specification for details.
   *
   * Defaults to 30 * 24 * 60 * 60 * 1000 ms (~30 days).
   */
  cacheTimeout?: number;

  /**
   * This string defines the log level of the LiveQuery server.
   *
   * Defaults to `'info'`.
   */
  logLevel?: "verbose" | "info" | "error";

  /**
   * The port to run the LiveQuery server.
   *
   * Defaults to `1337`
   */
  port?: number;

  /**
   * parse-server's LiveQuery redisURL
   */
  redisURL?: string;

  /**
   * LiveQuery pubsub adapter
   */
  pubSubAdapter?: Adapter<PubSubAdapter>;
}
