export type FacebookAccountKitAuthData = {
  access_token: string;
};

export type FacebookAccountKitAuthOptions = {
  appSecret?: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authDate
 * @param options
 */
export declare function validateAuthData(
  authDate: FacebookAccountKitAuthData,
  options: FacebookAccountKitAuthOptions,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 * @param appIds
 * @param authData
 * @param options
 */
export declare function validateAppId(
  appIds: string[],
  authData: FacebookAccountKitAuthData,
  options?: FacebookAccountKitAuthOptions,
): Promise<void>;
