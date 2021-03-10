import { EventEmitter } from "events";
import { Config } from "../../Config";

declare const emitter: EventEmitter;
declare const subscriptions: Map<string, (message: string) => void>;

export declare interface Publisher {
  emitter: EventEmitter;

  constructor(emitter: EventEmitter): Publisher;
  publish(channel: string, message: string): void;
}

export declare interface Consumer extends EventEmitter {
  emitter: EventEmitter;

  constructor(emitter: EventEmitter): Consumer;
  subscribe(channel: string): void;
  unsubscribe(channel: string): void;
}

declare const EventEmitterMQ: {
  createPublisher: () => Publisher;
  createSubscriber: () => Consumer;
};

export { EventEmitterMQ };
