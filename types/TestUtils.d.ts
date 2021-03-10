/**
 * Destroys all data in the database.
 *
 * Only works in Test environment.
 *
 * @param {boolean} fast set to true to just drop objects and not indexes.
 */
export declare function destroyAllDataPermanently(fast: boolean): Promise<void>
