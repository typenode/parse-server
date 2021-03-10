import { Config } from "../Config";
import { Auth } from "../Auth";
import { ParseMessageQueue } from "../ParseMessageQueue";

export declare class PushQueue {
  constructor(config: Config);

  static defaultPushChannel(): string;

  enqueue(body: any, where: any, config: Config, auth: Auth, pushStatus: any): Promise<void>;
}
