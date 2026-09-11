/**
 * Weather advice rule engine.
 *
 * IMPORTANT: `adviceRules` must stay completely self-contained (no imports, no
 * closures, no optional chaining / nullish coalescing / spread) because the
 * component serialises it with `.toString()` and re-runs it in the browser
 * after a client-side refresh. It is the single source of truth for the rules.
 *
 * Returns i18n *keys* only; the strings live in `messages.weather.advice.lines`.
 */

export interface AdviceItem {
  /** i18n key, e.g. `outfitHot` */
  k: string;
  /** optional value interpolated into `{v}` */
  v?: string | number;
}

export interface AdvicePlan {
  risks: AdviceItem[];
  outfit: AdviceItem[];
  plan: AdviceItem[];
  items: AdviceItem[];
}

export function adviceRules(b: any): AdvicePlan {
  var out = { risks: [] as AdviceItem[], outfit: [] as AdviceItem[], plan: [] as AdviceItem[], items: [] as AdviceItem[] };
  if (!b) return out;

  function beaufort(kmh) {
    if (kmh < 1) return 0;
    if (kmh < 6) return 1;
    if (kmh < 12) return 2;
    if (kmh < 20) return 3;
    if (kmh < 29) return 4;
    if (kmh < 39) return 5;
    if (kmh < 50) return 6;
    if (kmh < 62) return 7;
    if (kmh < 75) return 8;
    if (kmh < 89) return 9;
    if (kmh < 103) return 10;
    return 11;
  }
  function push(list, k, v) {
    for (var i = 0; i < list.length; i++) if (list[i].k === k) return;
    list.push(v === undefined ? { k: k } : { k: k, v: v });
  }
  function group(code) {
    if (code === 0) return 'clear';
    if (code === 1) return 'mainlyClear';
    if (code === 2) return 'partlyCloudy';
    if (code === 3) return 'overcast';
    if (code === 45 || code === 48) return 'fog';
    if (code >= 51 && code <= 57) return 'drizzle';
    if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return 'snow';
    if (code >= 95) return 'thunder';
    return 'overcast';
  }

  var c = b.current || {};
  var days = b.days || [];
  var d0 = days[0] || {};
  var code = c.code === undefined || c.code === null ? (d0.code || 0) : c.code;
  var tMax = d0.tMax === undefined || d0.tMax === null ? c.temp : d0.tMax;
  var tMin = d0.tMin === undefined || d0.tMin === null ? c.temp : d0.tMin;
  var pop = d0.pop === undefined || d0.pop === null ? 0 : d0.pop;
  var uv = c.uv === undefined || c.uv === null ? (d0.uvMax || 0) : c.uv;
  var wind = c.wind || 0;
  var gust = c.gust || 0;
  var eff = gust > wind ? gust : wind;
  var level = beaufort(eff);
  var humidity = c.humidity || 0;
  var diff = Math.round(tMax - tMin);
  var g = group(code);
  var storm = g === 'thunder';
  var heavy = code === 65 || code === 67 || code === 82 || code === 63;
  var wet = g === 'rain' || g === 'drizzle' || g === 'snow';
  var likely = pop >= 60;
  var cold = tMax <= 10;
  var hot = tMax >= 32;
  var freezing = tMax <= 0;

  /* ---------- 1. risks (highest priority, rendered on top in red) ---------- */
  if (storm) push(out.risks, 'riskThunder');
  else if (heavy) push(out.risks, 'riskHeavyRain');
  if (level >= 7) push(out.risks, 'riskWindHigh', level);
  else if (level >= 5) push(out.risks, 'riskWindStrong', level);
  if (g === 'snow') push(out.risks, 'riskSnow');
  if (g === 'fog') push(out.risks, 'riskFog');
  if (tMax >= 35) push(out.risks, 'riskHeat', Math.round(tMax));
  if (freezing) push(out.risks, 'riskCold');
  if (freezing && wet) push(out.risks, 'riskIce');

  /* ---------- 2. outfit ---------- */
  if (wet) push(out.outfit, 'outfitRain');
  else if (hot) push(out.outfit, 'outfitHot');
  else if (cold) push(out.outfit, 'outfitCold');
  else if (level >= 5) push(out.outfit, 'outfitWind');
  else if (tMax >= 25) push(out.outfit, 'outfitLight');
  else if (tMax <= 18) push(out.outfit, 'outfitCool');
  else push(out.outfit, 'outfitComfy');
  if (diff >= 8) push(out.outfit, 'outfitDiurnal', diff);
  if (humidity >= 80 && tMax >= 26) push(out.outfit, 'outfitHumid', Math.round(humidity));

  /* ---------- 3. plan ---------- */
  if (storm || heavy) push(out.plan, 'planIndoor');
  else if (wet) push(out.plan, 'planRainDelay');
  else if (g === 'clear' || g === 'mainlyClear') push(out.plan, 'planSunny');
  else if (g === 'fog') push(out.plan, 'planFog');
  else push(out.plan, 'planCloudy');
  if (tMax >= 30) push(out.plan, 'planHotNoon');
  else if (tMax <= 5) push(out.plan, 'planCold');
  if (level >= 6) push(out.plan, 'planWind');
  if (uv >= 6 && !wet) push(out.plan, 'planUV');
  if (likely && !wet) push(out.plan, 'planPopHigh', Math.round(pop));

  /* ---------- 4. things to bring ---------- */
  if (heavy || storm || level >= 6) push(out.items, 'itemRaincoat');
  else if (wet || likely) push(out.items, 'itemUmbrella');
  if (g === 'snow' || freezing) push(out.items, 'itemGrip');
  if (uv >= 5 || hot) push(out.items, 'itemSunscreen');
  if (uv >= 6) push(out.items, 'itemSunglasses');
  if (uv >= 5 || hot) push(out.items, 'itemHat');
  if (hot) push(out.items, 'itemWater');
  if (cold) push(out.items, 'itemCoat');
  if (cold) push(out.items, 'itemScarf');
  else if (diff >= 8) push(out.items, 'itemJacket');
  if (g === 'fog') push(out.items, 'itemMask');
  if (humidity >= 80 && tMax >= 26) push(out.items, 'itemTowel');

  return out;
}
