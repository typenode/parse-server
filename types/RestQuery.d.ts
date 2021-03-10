import { Config } from "./Config";
import { Auth } from "./Auth";

/**
 * An object that encapsulates everything we need to
 * run a 'find' operation, encoded in the REST API format.
 *
 * `restOptions` can include:
 * - skip
 * - limit
 * - order
 * - count
 * - include
 * - keys
 * - redirectClassNameForKey
 *
 * @param config
 * @param auth
 * @param className
 * @param restWhere
 * @param restOptions
 * @param clientSDK
 */
export declare class RestQuery {
  constructor(
    config: Config,
    auth: Auth,
    className: string,
    restWhere: {},
    restOptions: {},
    clientSDK: any,
  );

  /**
   * A convenient method to perform all the steps of processing
   * a query in order.
   *
   * Returns a promise for the response - an object with
   * optional keys 'results' and 'count'.
   *
   * @param executeOptions
   */
  execute(executeOptions: any): Promise<any>;

  each(callback: (item: any) => void): Promise<void>;

  buildRestWhere(): Promise<void>;

  /**
   * Marks the query for a write attempt, so we read the proper ACL (write instead of read)
   */
  forWrite(): this;

  /**
   * Uses the Auth object to get the list of roles, adds the user id
   */
  getUserAndRoleACL(): Promise<void>;

  /**
   * Changes the className if redirectClassNameForKey is set.
   */
  redirectClassNameForKey(): Promise<void>;

  /**
   * Validates this operation against the allowClientClassCreation config.
   */
  validateClientClassCreation(): Promise<void>;

  /**
   * Replaces a $inQuery clause by running the subquery,
   * if there is an $inQuery clause.
   *
   * The $inQuery clause turns into an $in with values that
   * are just pointers to the objects returned in the subquery.
   */
  replaceInQuery(): Promise<void>;

  /**
   * Replaces a $notInQuery clause by running the subquery,
   * if there is an $notInQuery clause.
   *
   * The $notInQuery clause turns into a $nin with values that
   * are just pointers to the objects returned in the subquery.
   */
  replaceNotInQuery(): Promise<void>;

  /**
   * Replaces a $select clause by running the subquery,
   * if there is a $select clause.
   *
   * The $select clause turns into an $in with values selected
   * out of the subquery.
   *
   * Returns a possible-promise.
   */
  replaceSelect(): Promise<void>;

  /**
   * Replaces a $dontSelect clause by running the subquery,
   * if there is a $dontSelect clause.
   *
   * The $dontSelect clause turns into an $nin with values
   * selected out of the subquery.
   *
   * Returns a possible-promise.
   */
  replaceDontSelect(): Promise<void>;

  replaceEquality(): void;

  /**
   * Returns a promise for whether it was successful.
   * Populates this.response with an object that only has 'results'.
   *
   * @param options
   */
  runFind(options: { op: any }): Promise<void>;

  /**
   * Returns a promise for whether it was successful.
   * Populates this.response.count with the count
   */
  runCount(): Promise<void>;

  /**
   * Augments this.response with all pointers on an object
   */
  handleIncludeAll(): Promise<void>;

  /**
   * Augments this.response with data at the paths provided in this.include.
   */
  handleInclude(): Promise<void>;

  /**
   * Returns a promise of a processed set of results
   */
  runAfterFindTrigger(): Promise<any>;
}
