export type TwitterAuthData = {
  id: string;
  auth_token: string;
  auth_token_secret?: string;
  consumer_key?: string;
};

export type TwitterAuthOptions = {
  consumer_key: string;
  consumer_secret?: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 * @param options
 */
export declare function validateAuthData(
  authData: TwitterAuthData,
  options?: TwitterAuthOptions[],
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>;

/**
 * Get correct AuthOptions from array
 * @param authData
 * @param options
 */
export declare function handleMultipleConfigurations(
  authData: TwitterAuthData,
  options: TwitterAuthOptions[],
): TwitterAuthOptions;
