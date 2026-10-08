/**
 * Language-neutral entity data for Hōkan-ji Temple (Yasaka Pagoda).
 *
 * Keeping the physical / NAP attributes here (instead of duplicating them in
 * every locale file) makes it easy to guarantee NAP consistency between the
 * website, the JSON-LD structured data and the Google Business Profile.
 */
export const entityConfig = {
  /** Domain + canonical origin */
  domain: 'yasakapagodakyoto.com',
  baseUrl: 'https://yasakapagodakyoto.com',

  /** Official attraction name (stable across languages for entity matching) */
  fullName: 'Hōkan-ji Temple (Yasaka Pagoda)',
  /** Commonly used short name / the meaning behind the domain name */
  shortName: 'Yasaka Pagoda',
  /** Alternative names used for schema `alternateName` */
  alternateNames: [
    'Yasaka Pagoda',
    'Yasaka-no-tō',
    'Hōkan-ji Temple',
    'Hokanji Temple Yasaka Pagoda',
    'Kyoto Yasaka Pagoda',
  ],

  /** NAP — Name / Address / Phone (must stay identical to Google Maps) */
  streetAddress: '388 Yasaka Kamimachi, Kiyomizu, Higashiyama Ward',
  city: 'Kyoto',
  province: 'Kyoto',
  country: 'Japan',
  countryCode: 'JP',
  postalCode: '605-0862',
  telephone: '+81-75-551-2417',
  telephoneDisplay: '+81 75-551-2417',

  /** Geo coordinates */
  latitude: 34.9985591,
  longitude: 135.7791783,

  /** Google Maps links */
  mapsUrl: 'https://maps.app.goo.gl/h1TRULeMbYZtv1od8',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5808.937693832175!2d135.77917829999998!3d34.99855910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108c560f8c421%3A0xb1cb2441e0223549!2z5rOV6KeC5a-677yI5YWr5Z2C5LmL5aGU77yJ!5e1!3m2!1szh-CN!2sus!4v1789098031727!5m2!1szh-CN!2sus',

  /** Authoritative outbound references (E-E-A-T) */
  govtTourismUrl: 'https://kyoto.travel/en/',
  culturalAffairsUrl: 'https://kunishitei.bunka.go.jp/heritage/detail/102/1728',
  kyotoCityUrl: 'https://www2.city.kyoto.lg.jp/somu/rekishi/fm/ishibumi/html/hi107.html',

  /** Hero / primary image (absolute path on the current origin) */
  heroImage: '/gallery/yasaka-pagoda-kyoto-1.jpg',
  galleryImages: [
    '/gallery/yasaka-pagoda-kyoto-1.jpg',
    '/gallery/yasaka-pagoda-kyoto-4.jpg',
    '/gallery/yasaka-pagoda-kyoto-9.jpg',
    '/gallery/yasaka-pagoda-kyoto-12.jpg',
  ],

  /** Opening / pricing information used by schema */
  openingDays: ['Saturday', 'Sunday'],
  openingHours: '10:00',
  closingHours: '15:00',
  price: '500',
  priceCurrency: 'JPY',

  /** Aggregate rating (latest public figures, synced 2026-10-08) */
  ratingValue: '4.6',
  reviewCount: '6162',

  /** PWA */
  themeColor: '#0f2015',
  backgroundColor: '#faf8f4',
};

export type EntityConfig = typeof entityConfig;

export default entityConfig;
