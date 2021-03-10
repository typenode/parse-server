export type VKontakteAuthData = {
  id: string;
  access_token: string;
};

export type VKontakteAuthParams = {
  appIds: string;
  appSecret: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 * @param params
 */
export declare function validateAuthData(
  authData: VKontakteAuthData,
  params: VKontakteAuthParams,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>;
