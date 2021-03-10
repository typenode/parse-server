import { Application } from "express";

type HttpVerb = "POST" | "GET" | "PUT" | "DELETE";
type RoutePath = string | RegExp;
type RequestHandler = (req: Express.Request) => Promise<RequestHandlerResponse>;

type RequestHandlerResponse = {
  status?: number;
  response: object;
  location?: string;
};

type RouteProps = {
  path: RoutePath;
  method: HttpVerb;
  handler: RequestHandler;
};

/**
 * A router that is based on promises rather than req/res/next.
 * This is intended to replace the use of express.Router to handle
 * subsections of the API surface.
 * This will make it easier to have methods like 'batch' that
 * themselves use our routing information, without disturbing express
 * components that external developers may be modifying.
 */
export declare class PromiseRouter {
  constructor(routes: Array<RouteProps>, appId: string);

  /**
   * Leave the opportunity to
   * subclasses to mount their routes by overriding
   */
  mountRoutes(): void;

  /**
   * Merge the routes into this one
   * @param router
   */
  merge(router: PromiseRouter): void;

  route(method: HttpVerb, path: RoutePath, ...handlers: RequestHandler[]): void;

  match(method: HttpVerb, path: string): { params: object; handler: RequestHandler } | undefined;

  /**
   * Mount routes of this router onto an express app (or express router)
   * @param expressApp
   */
  mountOnto(expressApp: Application): Application;

  expressRouter(): Application;

  tryRouteRequest(
    method: HttpVerb,
    path: RoutePath,
    request: Request,
  ): Promise<RequestHandlerResponse>;
}
