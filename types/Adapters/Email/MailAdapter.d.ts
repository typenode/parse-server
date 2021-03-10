type MailOptions = {
  /**
   * Recipient
   */
  to: string;
  /**
   * Raw text of the message
   */
  text: string;
  /**
   * Subject of the email
   */
  subject: string;
};

// TODO: Check correct types here
type UserMailOptions = {
  link: any;
  appName: any;
  user: any;
};

export declare interface MailAdapter {
  /**
   * Send Mail
   */
  sendMail(options: MailOptions): Promise<void>;
  /**
   * Send User Verification Email
   */
  sendVerificationEmail?(options: UserMailOptions): Promise<void>;
  /**
   * Send User Password Reset Email
   */
  sendPasswordResetEmail?(options: UserMailOptions): Promise<void>;
}
