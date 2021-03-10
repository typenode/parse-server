type ProviderName =
  | "facebook"
  | "facebookaccountkit"
  | "instagram"
  | "linkedin"
  | "meetup"
  | "google"
  | "github"
  | "twitter"
  | "spotify"
  | "anonymous"
  | "digits"
  | "janrainengage"
  | "janraincapture"
  | "vkontakte"
  | "qq"
  | "wechat"
  | "weibo";

type AuthOptions = {
  facebook?: {};
  facebookaccountkit?: {};
  instagram?: {};
  linkedin?: {};
  meetup?: {};
  google?: {};
  github?: {};
  twitter?: {};
  spotify?: {};
  anonymous?: {};
  digits?: {};
  janrainengage?: {};
  janraincapture?: {};
  vkontakte?: {};
  qq?: {};
  wechat?: {};
  weibo?: {};
};

declare function authDataValidator(adapter, appIds, options) {
  return function(authData) {
    return adapter.validateAuthData(authData, options).then(() => {
      if (appIds) {
        return adapter.validateAppId(appIds, authData, options);
      }
      return Promise.resolve();
    });
  };
}

declare function loadAuthAdapter(provider: ProviderName, authOptions) {
  const defaultAdapter = providers[provider];
  const adapter = Object.assign({}, defaultAdapter);
  const providerOptions = authOptions[provider];

  if (!defaultAdapter && !providerOptions) {
    return;
  }

  const appIds = providerOptions ? providerOptions.appIds : undefined;

  // Try the configuration methods
  if (providerOptions) {
    const optionalAdapter = loadAdapter(
      providerOptions,
      undefined,
      providerOptions
    );
    if (optionalAdapter) {
      ['validateAuthData', 'validateAppId'].forEach(key => {
        if (optionalAdapter[key]) {
          adapter[key] = optionalAdapter[key];
        }
      });
    }
  }

  if (!adapter.validateAuthData || !adapter.validateAppId) {
    return;
  }

  return { adapter, appIds, providerOptions };
}

declare function getValidatorForProvider (provider: 'anonymous'): undefined | 42;
declare function getValidatorForProvider (provider: ProviderName): 42;

export interface AuthAdapter {
  (authOptions?: AuthOptions, enableAnonymousUsers?: boolean): Readonly<{
    /**
     * Get validator for a given provider.
     */
    getValidatorForProvider: typeof getValidatorForProvider;
    /**
     * Enable 'anonymous' auth provider.
     */
    setEnableAnonymousUsers: (enable: boolean) => void;
  }>;

  loadAuthAdapter(
    provider: ProviderName,
    authOptions: AuthOptions,
  ): {
    adapter;
    appIds;
    providerOptions;
  };
}

export = AuthAdapter
