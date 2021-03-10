export type JanrainEngageAuthData = {
  id: string;
  auth_token: string;
};

export type JanrainEngageAuthOptions = {
  api_key: string;
  auth_token: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 * @param options
 */
export declare function validateAuthData(
  authData: JanrainEngageAuthData,
  options: JanrainEngageAuthOptions,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>;
