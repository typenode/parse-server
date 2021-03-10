import { Config } from "./Config";
import { Consumer, Publisher } from "./Adapters/MessageQueue/EventEmitterMQ";

export declare const ParseMessageQueue: {
  createPublisher(config: Config): Publisher;
  createSubscriber(config: Config): Consumer;
};
