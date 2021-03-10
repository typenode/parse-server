import { Config } from "./Config";
import { Auth } from "./Auth";

// This file contains helpers for running operations in REST format.
// The goal is that handlers that explicitly handle an express route
// should just be shallow wrappers around things in this file, but
// these functions should not explicitly depend on the request
// object.
// This means that one of these handlers can support multiple
// routes. That's useful for the routes that do really similar
// things.

/**
 * Returns a promise for an object with optional keys 'results' and 'count'.
 * @param config
 * @param auth
 * @param className
 * @param restWhere
 * @param restOptions
 * @param clientSDK
 */
export declare function find(
  config: Config,
  auth: Auth,
  className: string,
  restWhere: any,
  restOptions: any,
  clientSDK: any,
): Promise<any>;

/**
 * get is just like find but only queries an objectId.
 *
 * @param config
 * @param auth
 * @param className
 * @param objectId
 * @param restOptions
 * @param clientSDK
 */
export declare function get(
  config: Config,
  auth: Auth,
  className: string,
  objectId: string,
  restOptions: any,
  clientSDK: any,
): Promise<any>;

/**
 * Returns a promise that doesn't resolve to any useful value.
 *
 * @param config
 * @param auth
 * @param className
 * @param objectId
 */
export declare function del(
  config: Config,
  auth: Auth,
  className: string,
  objectId: string,
): Promise<any>;

/**
 * Returns a promise for a { response, status, location } object.
 *
 * @param config
 * @param auth
 * @param className
 * @param restObject
 * @param clientSDK
 */
export declare function create(
  config: Config,
  auth: Auth,
  className: string,
  restObject: any,
  clientSDK: any,
): Promise<void>;

/**
 * Returns a promise that contains the fields of the update
 * that the REST API is supposed to return.
 * Usually, this is just updatedAt.
 * @param config
 * @param auth
 * @param className
 * @param restWhere
 * @param restObject
 * @param clientSDK
 */
export declare function update(
  config: Config,
  auth: Auth,
  className: string,
  restWhere: any,
  restObject: any,
  clientSDK: any,
): Promise<void>;
