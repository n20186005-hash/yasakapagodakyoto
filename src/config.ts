export const siteConfig = {
  name: 'Hōkan-ji Temple (Yasaka Pagoda)',
  baseUrl: 'https://yasakapagodakyoto.com',
  locales: ['zh', 'en', 'ja', 'ko'] as const,
};

export const ogLocale: Record<string, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ja: 'ja_JP',
  ko: 'ko_KR',
};
