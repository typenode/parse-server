type PasswordPolicy = {
  maxPasswordAge?: number;
  resetTokenValidityDuration?: number;
  validatorPattern?: string | RegExp;
  validatorCallback?: Function; // TODO: Better type here
  doNotAllowUsername?: boolean;
  maxPasswordHistory?: number;
};

type ServerConfiguration = {
  verifyUserEmails?: boolean;
  userController: 42;
  appName: string;
  publicServerURL?: string;
  revokeSessionOnPasswordReset: boolean;
  expireInactiveSessions: boolean;
  sessionLength: number;
  maxLimit: number;
  emailVerifyTokenValidityDuration: number;
  accountLockout: AccountLockoutPolicy;
  passwordPolicy: PasswordPolicy;
  masterKeyIps: string[];
  masterKey: string;
  readOnlyMasterKey: string;
};

type AccountLockoutPolicy = {
  duration: number;
  threshold: number;
};

type EmailConfiguration = {
  emailAdapter: 42; // TODO CHECK TYPE
  appName: string;
  publicServerURL: string;
  emailVerifyTokenValidityDuration: number;
};

export declare class Config {
  private passwordPolicy: PasswordPolicy;

  public mount: string;
  public invalidLinkURL: string;
  public invalidVerificationLinkURL: string;
  public linkSendSuccessURL: string;
  public linkSendFailURL: string;
  public verifyEmailSuccessURL: string;
  public choosePasswordURL: string;
  public requestResetPasswordURL: string;
  public passwordResetSuccessURL: string;
  public parseFrameURL: string;
  public verifyEmailURL: string;

  static get(applicationId: string, mount: string): Config;
  static put(serverConfiguration: ServerConfiguration): ServerConfiguration;

  static validate(serverConfiguration: ServerConfiguration): void;
  static validateAccountLockoutPolicy(accountLockout: AccountLockoutPolicy): void;
  static validatePasswordPolicy(passwordPolicy: PasswordPolicy): void;
  static setupPasswordValidator(passwordPolicy: PasswordPolicy): void;
  static validateEmailConfiguration(props: EmailConfiguration): void;
  static validateMasterKeyIps(masterKeyIps: string[]): void;
  static validateSessionConfiguration(sessionLength: number, expireInactiveSessions: boolean): void;
  static validateMaxLimit(maxLimit: number): void;

  generateEmailVerifyTokenExpiresAt(): Date | undefined;
  generatePasswordResetTokenExpiresAt(): Date | undefined;
  generateSessionExpiresAt(): Date | undefined;
}
