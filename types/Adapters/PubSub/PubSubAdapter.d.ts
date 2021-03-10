export declare class PubSubAdapter {
  static createPublisher(): Publisher
  static createSubscriber(): Subscriber
}

interface Publisher {
  /**
   * @param {String} channel the channel in which to publish
   * @param {String} message the message to publish
   */
  publish(channel: string, message: string): void;
}

interface Subscriber {
  /**
   * called when a new subscription the channel is required
   * @param {String} channel the channel to subscribe
   */
  subscribe(channel: string): void;

  /**
   * called when the subscription from the channel should be stopped
   * @param {String} channel
   */
  unsubscribe(channel: string): void;
}
