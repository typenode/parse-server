import { Config } from "../Config";
import { PushAdapter } from "../Adapters/Push/PushAdapter";

export declare class PushWorker {
  constructor(pushAdapter: PushAdapter, subscriberConfig: Config);
}
