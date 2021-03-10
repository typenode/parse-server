export type FacebookAuthData = {
  access_token: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 */
export declare function validateAuthData(
  authData: FacebookAuthData,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 * @param appIds
 * @param authData
 */
export declare function validateAppId(
  appIds: string[],
  authData: FacebookAuthData,
): Promise<void>;
