export interface CurrentWeather {
  temp: number;
  feels: number;
  humidity: number;
  wind: number;
  gust: number;
  uv: number;
  cloud: number;
  precip: number;
  code: number;
  isDay: boolean;
}

export interface DayForecast {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  pop: number;
  uvMax: number;
  windMax: number;
  rainSum: number;
}

export interface WeatherBundle {
  current: CurrentWeather;
  days: DayForecast[];
  sunrise: string;
  sunset: string;
  updatedAt: string;
}

const LAT = 34.9986;
const LON = 135.7792;
const TTL = 30 * 60 * 1000;

let cache: { data: WeatherBundle; at: number } | null = null;

const CURRENT = [
  'temperature_2m',
  'apparent_temperature',
  'relative_humidity_2m',
  'precipitation',
  'weather_code',
  'cloud_cover',
  'wind_speed_10m',
  'wind_gusts_10m',
  'uv_index',
  'is_day',
].join(',');

const DAILY = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'precipitation_probability_max',
  'precipitation_sum',
  'uv_index_max',
  'wind_speed_10m_max',
  'sunrise',
  'sunset',
].join(',');

export const WEATHER_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
  `&current=${CURRENT}&daily=${DAILY}&timezone=Asia%2FTokyo&forecast_days=7`;

export function mapWeather(j: any): WeatherBundle {
  const c = j.current ?? {};
  const d = j.daily ?? {};
  const days: DayForecast[] = (d.time ?? []).map((date: string, i: number) => ({
    date,
    code: d.weather_code?.[i] ?? 0,
    tMax: d.temperature_2m_max?.[i] ?? 0,
    tMin: d.temperature_2m_min?.[i] ?? 0,
    pop: d.precipitation_probability_max?.[i] ?? 0,
    uvMax: d.uv_index_max?.[i] ?? 0,
    windMax: d.wind_speed_10m_max?.[i] ?? 0,
    rainSum: d.precipitation_sum?.[i] ?? 0,
  }));
  return {
    current: {
      temp: c.temperature_2m ?? 0,
      feels: c.apparent_temperature ?? 0,
      humidity: c.relative_humidity_2m ?? 0,
      wind: c.wind_speed_10m ?? 0,
      gust: c.wind_gusts_10m ?? c.wind_speed_10m ?? 0,
      uv: c.uv_index ?? 0,
      cloud: c.cloud_cover ?? 0,
      precip: c.precipitation ?? 0,
      code: c.weather_code ?? 0,
      isDay: c.is_day !== 0,
    },
    days,
    sunrise: d.sunrise?.[0] ?? '',
    sunset: d.sunset?.[0] ?? '',
    updatedAt: new Date().toISOString(),
  };
}

export async function getWeather(): Promise<WeatherBundle | null> {
  if (cache && Date.now() - cache.at < TTL) return cache.data;
  try {
    const res = await fetch(WEATHER_URL, { headers: { accept: 'application/json' } });
    if (!res.ok) return cache ? cache.data : null;
    const data = mapWeather(await res.json());
    cache = { data, at: Date.now() };
    return data;
  } catch {
    return cache ? cache.data : null;
  }
}
