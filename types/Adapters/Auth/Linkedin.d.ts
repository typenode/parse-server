type LinkedinAuthData = {
  id: string;
  access_token: string;
  is_mobile_sdk?: boolean;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 */
export declare function validateAuthData(
  authData: LinkedinAuthData,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>;
