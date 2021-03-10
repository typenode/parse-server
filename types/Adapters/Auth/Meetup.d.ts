export type MeetupAuthData = {
  access_token: string;
};

/**
 * Returns a promise that fulfills if user id is valid.
 * @param authData
 */
export declare function validateAuthData(
  authData: MeetupAuthData,
): Promise<void>;

/**
 * Returns a promise that fulfills iff this app id is valid.
 */
export declare function validateAppId(): Promise<void>;
