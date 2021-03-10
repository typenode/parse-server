/**
 * Push Adapter
 * Allows you to change the push notification mechanism.
 *
 * Default is ParsePushAdapter, which uses GCM for
 * android push and APNS for ios push.
 */
export class PushAdapter {
  /**
   * @param {any} body
   * @param {Parse.Installation[]} installations
   * @param {any} pushStatus
   * @returns {Promise}
   */
  send(body: any, installations: any[], pushStatus: any): Promise<void>

  /**
   * Get an array of valid push types.
   * @returns {Array} An array of valid push types
   */
  getValidPushTypes(): string[]
}

export default PushAdapter;
