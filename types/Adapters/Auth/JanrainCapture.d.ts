export type JanrainCaptureAuthData = {
  id: string;
  access_token: string;
};

export type JanrainCaptureAuthOptions = {
  janrain_capture_host: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 * @param options
 */
export declare function validateAuthData(
  authData: JanrainCaptureAuthData,
  options: JanrainCaptureAuthOptions,
): Promise<void>;

/**
 * Returns a promise that fulfills if app id is valid.
 */
export declare function validateAppId(): Promise<void>;
