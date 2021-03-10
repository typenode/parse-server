import { Config } from "./Config";

/**
 * An Auth object tells you who is requesting something
 * and whether the master key was used.
 *
 * userObject is a Parse.User and can be null if there's no user.
 */
export declare class Auth {
  constructor(props: {
    config: Config;
    cacheController: any;
    isMaster: boolean;
    isReadOnly: boolean;
    user: any;
    installationId: string;
  });

  /**
   * Whether this auth could possibly modify the given user id.
   * It still could be forbidden via ACLs even if this returns true.
   */
  isUnauthenticated(): boolean;

  /**
   * Returns a promise that resolves to an array of role names
   */
  getUserRoles(): Promise<string[]>;

  getRolesForUser(): Promise<string[]>;

  cacheRoles(): boolean;

  getRolesByIds(ids: string[]): Promise<string[]>;
}

export declare function createSession(
  config: Config,
  props: {
    userId: string;
    createdWith: any;
    installationId: string;
    additionalSessionData: any;
  },
): Promise<{
  sessionData: any;
  createSession: () => Promise<void>;
}>;

/**
 * A helper to get a master-level Auth object
 */
export declare function master(config: Config): Auth;

/**
 * A helper to get a master-level Auth object
 */
export declare function readOnly(config: Config): Auth;

/**
 * A helper to get a nobody-level Auth object
 */
export declare function nobody(config: Config): Auth;

/**
 * Returns a promise that resolves to an Auth object
 */
export declare function getAuthForSessionToken(props: {
  config: Config;
  cacheController: any;
  sessionToken: string;
  installationId: string;
}): Promise<Auth>;

export declare function getAuthForLegacySessionToken(props: {
  config: Config;
  sessionToken: string;
  installationId: string;
}): Promise<Auth>;
