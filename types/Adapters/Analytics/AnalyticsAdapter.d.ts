import { Request } from 'express'

export interface AnalyticsAdapter {
  /**
   *
   * @param parameters the analytics request body, analytics info will be in the dimensions property
   * @param req the original http request
   */
  appOpened(parameters, req: Request): Promise<void>;

  /**
   *
   * @param eventName the name of the custom eventName
   * @param parameters the analytics request body, analytics info will be in the dimensions property
   * @param req the original http request
   */
  trackEvent(eventName: string, parameters, req: Request): Promise<void>;
}
