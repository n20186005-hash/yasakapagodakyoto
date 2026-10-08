/**
 * Focused, intent-specific guide content for the four SEO sub-pages.
 *
 * Each slug targets a distinct search intent (tickets / photo spots / access /
 * walking route) so the sub-pages do not cannibalise the homepage and can rank
 * for their own queries. Content is language-neutral in structure and supplied
 * per locale below.
 */

export type GuideSlug =
  | 'tickets-opening-hours'
  | 'best-photo-spots'
  | 'how-to-get-there'
  | 'higashiyama-walking-route';

export const guideSlugs: GuideSlug[] = [
  'tickets-opening-hours',
  'best-photo-spots',
  'how-to-get-there',
  'higashiyama-walking-route',
];

export interface GuideSection {
  heading: string;
  body?: string;
  items?: string[];
  note?: string;
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideContent {
  title: string;
  description: string;
  intro: string;
  sections: GuideSection[];
  faqTitle: string;
  faq: GuideFaq[];
  updatedLabel: string;
}

export const guides: Record<GuideSlug, Record<string, GuideContent>> = {
  'tickets-opening-hours': {
    en: {
      title: 'Yasaka Pagoda Tickets, Entrance Fee & Opening Hours',
      description:
        'Yasaka Pagoda (Hōkan-ji Temple) interior admission is ¥500, cash only, usually open Sat–Sun 10:00–15:00. Exterior viewing from the streets is free at any time.',
      intro:
        'The Yasaka Pagoda stands in an open Higashiyama lane with no gate or wall, so you can photograph and admire it from the surrounding streets for free at any time of day. A paid ticket is only required to climb inside the pagoda (second floor) when it is open.',
      sections: [
        {
          heading: 'Is the Yasaka Pagoda free to visit?',
          body: 'Yes. Viewing the pagoda from the public streets is completely free and possible around the clock — there is no gate or ticket barrier. A ticket is needed only to enter the pagoda’s second floor.',
        },
        {
          heading: 'Interior ticket price & payment',
          items: [
            'Adults: ¥500 per person.',
            'Cash only — cards and IC cards (Suica / ICOCA) are not accepted at the entrance.',
            'Tickets are sold at the entrance on days the interior is open.',
            'Children: there is no separate published child rate; follow the notice board on site.',
          ],
        },
        {
          heading: 'Opening hours & open days',
          body: 'The interior usually opens on Saturdays and Sundays from 10:00 to 15:00. Open days are irregular and may change for weather, ceremonies or temple duties, so always check the notice at the entrance before planning your day around it.',
          items: [
            'Typical interior hours: 10:00–15:00 (Sat–Sun only).',
            'No online booking — tickets are sold on site only.',
            'The tower may close without notice; treat the interior visit as a bonus.',
          ],
          note: 'Interior opening is not guaranteed even on weekends. Plan your main route around the free exterior photo spots and the broader Higashiyama walk.',
        },
        {
          heading: 'Can you book tickets online?',
          body: 'No. There is no advance reservation or online ticketing. Admission is first-come at the entrance on open days, so arrive early in peak seasons to avoid queues.',
        },
        {
          heading: 'Tips before you go',
          items: [
            'Bring Japanese yen in cash for the interior ticket.',
            'Wear shoes with good grip — the internal wooden stairs are steep and narrow.',
            'Photograph the exterior at dawn or after the evening illumination for the fewest crowds.',
          ],
        },
      ],
      faqTitle: 'Tickets & Hours FAQ',
      faq: [
        {
          q: 'How much is the Yasaka Pagoda ticket?',
          a: 'The interior admission fee is ¥500 for adults, payable in cash only at the entrance on open days.',
        },
        {
          q: 'What are the Yasaka Pagoda opening hours?',
          a: 'The interior usually opens Saturdays and Sundays, 10:00–15:00. Open days are irregular, so check the on-site notice board.',
        },
        {
          q: 'Is viewing the Yasaka Pagoda free?',
          a: 'Yes — viewing the pagoda from the surrounding streets is free at any time. Only the interior (second floor) requires a paid ticket.',
        },
        {
          q: 'Can I buy Yasaka Pagoda tickets online?',
          a: 'No. There is no online booking; tickets are sold first-come at the entrance only when the interior is open.',
        },
        {
          q: 'Why might the pagoda be closed on a weekend?',
          a: 'Openings can change for weather, ceremonies, staffing or safety. The interior visit is never guaranteed, so plan around the free exterior views.',
        },
      ],
      updatedLabel: 'Information last updated',
    },
    ja: {
      title: '八坂の塔（法観寺）の拝観料・拝観時間・営業日',
      description:
        '八坂の塔（法観寺）の内部拝観は大人500円・現金のみ、通常は土日10:00–15:00。外観はいつでも無料でご覧いただけます。',
      intro:
        '八坂の塔は門や塀のない東山の開けた路地に立つため、周囲の通りからいつでも無料で撮影・観賞できます。有料となるのは、内部（2階）が開いている際の拝観のみです。',
      sections: [
        {
          heading: '八坂の塔は無料で見られますか？',
          body: 'はい。通りからの外観観賞は完全に無料で、時間を問わず可能です（門や券所はありません）。チケットが必要なのは塔の2階内部のみです。',
        },
        {
          heading: '拝観料と支払い方法',
          items: [
            '大人：1人500円。',
            '現金のみ（クレジットカードやICカードのSuica・ICOCAは入口では使えません）。',
            '内部が開く日の入口でチケットを販売。',
            'お子様の区分料金は特記なし。現地の掲示に従ってください。',
          ],
        },
        {
          heading: '拝観時間と拝観日',
          body: '内部は通常、土曜・日曜の10:00–15:00に開きます。開催日は不定期で、天候や法要、警備などの理由で変わることがあるため、当日は入口の掲示で必ずご確認ください。',
          items: [
            '内部の目安時間：10:00–15:00（土日のみ）。',
            '事前予約・オンライン購入なし。チケットは現地のみ。',
            '予告なく閉まる場合あり。内部拝観は「おまけ」としてお楽しみください。',
          ],
          note: '土日でも内部開帳は保証されません。メインのルートは無料の外観撮影と東山散策でお組みください。',
        },
        {
          heading: 'オンライン予約はできますか？',
          body: 'いいえ。事前予約やオンラインチケットはありません。内部が開く日に入口で先着順に販売されるため、混雑期はお早めにどうぞ。',
        },
        {
          heading: '行く前のヒント',
          items: [
            '内部チケット用に日本円の現金をご用意ください。',
            '内部の木階段は急で狭いため、すべり止めの靴がおすすめ。',
            '外観の撮影は明け方かライトアップ後が一番空いています。',
          ],
        },
      ],
      faqTitle: 'チケット・時間のよくある質問',
      faq: [
        {
          q: '八坂の塔のチケットはいくらですか？',
          a: '内部拝観は大人500円で、開く日の入口で現金のみにお支払いいただきます。',
        },
        {
          q: '八坂の塔の拝観時間は？',
          a: '内部は通常、土曜・日曜の10:00–15:00に開きます。開催日は不定期なので、現地の掲示をご確認ください。',
        },
        {
          q: '八坂の塔は無料で見られますか？',
          a: 'はい。周囲の通りからの外観はいつでも無料です。有料なのは内部（2階）のみです。',
        },
        {
          q: '八坂の塔のチケットはオンラインで買えますか？',
          a: 'いいえ。オンライン予約はなく、内部が開く日の入口で先着順のみです。',
        },
        {
          q: 'なぜ土日でも閉まっていることがあるのですか？',
          a: '天候や法要、警備・安全などの理由で開催が変わるためです。内部拝観は保証されないので、無料の外観鑑賞を中心にご計画ください。',
        },
      ],
      updatedLabel: '最終更新',
    },
    zh: {
      title: '八坂之塔（法观寺）门票、门票价格与开放时间',
      description:
        '八坂之塔（法观寺）内部参观为成人 500 日元、仅收现金，通常周六周日 10:00–15:00 开放。从街道外观赏随时免费。',
      intro:
        '八坂之塔坐落于东山一处开阔的巷弄，没有门墙，因此任何时候都可在周边街道免费拍照、观赏。只有在塔内部（二楼）开放时才需要购买付费门票。',
      sections: [
        {
          heading: '参观八坂之塔免费吗？',
          body: '免费。从公共街道外观赏完全免费，且全天皆可——没有门禁或售票闸口。只有在进入塔内二楼时才需要门票。',
        },
        {
          heading: '门票价格与支付方式',
          items: [
            '成人：每人 500 日元。',
            '仅收现金——入口不接受信用卡与 IC 卡（Suica / ICOCA）。',
            '门票于内部开放日的入口处发售。',
            '儿童：无单独公布票价，请以现场告示为准。',
          ],
        },
        {
          heading: '开放时间与开放日',
          body: '内部通常于周六、周日上午 10:00 至 15:00 开放。开放日并不固定，可能因天气、法事或寺院事务而变动，请务必以入口处的告示为准再行安排。',
          items: [
            '内部参考时间：10:00–15:00（仅周六、周日）。',
            '无线上预约——门票仅现场发售。',
            '可能无预告关闭；请将内部参观视为额外惊喜。',
          ],
          note: '即便周末，内部开放也不保证。主要行程请围绕免费的外观拍照与东山散步来安排。',
        },
        {
          heading: '可以在线订票吗？',
          body: '不可以。没有提前预约或在线售票。门票仅在开放日于入口处先到先得，旺季请尽早到达以免排队。',
        },
        {
          heading: '行前提示',
          items: [
            '请备好日元现金用于内部门票。',
            '塔内木梯陡峭狭窄，建议穿防滑鞋。',
            '清晨或点灯后拍摄外观人最少。',
          ],
        },
      ],
      faqTitle: '门票与时间常见问题',
      faq: [
        {
          q: '八坂之塔门票多少钱？',
          a: '内部参观为成人 500 日元，仅在开放日的入口处以现金支付。',
        },
        {
          q: '八坂之塔的开放时间是？',
          a: '内部通常周六、周日 10:00–15:00 开放。开放日不固定，请以现场告示为准。',
        },
        {
          q: '观赏八坂之塔免费吗？',
          a: '免费。从周边街道外观赏随时免费，仅内部（二楼）需付费门票。',
        },
        {
          q: '可以线上购买八坂之塔门票吗？',
          a: '不可以。无线上预约，门票仅在内部开放日于入口处先到先得。',
        },
        {
          q: '为什么周末也可能关闭？',
          a: '开放可能因天气、法事、人力或安全而变动。内部参观从不保证，请以免费的外观观赏为主安排行程。',
        },
      ],
      updatedLabel: '信息更新于',
    },
    ko: {
      title: '야사카 탑(법관사) 입장료·개방 시간·개방 요일',
      description:
        '야사카 탑(법관사) 내부 관람은 성인 500엔, 현금만, 보통 토·일 10:00–15:00. 외관 관람은 언제든 무료입니다.',
      intro:
        '야사카 탑은 문이나 담이 없는 히가시야마의 트인 골목에 서 있으므로, 주변 거리에서 언제든 무료로 사진을 찍고 감상할 수 있습니다. 유료가 되는 것은 내부(2층)가 열렸을 때의 관람뿐입니다.',
      sections: [
        {
          heading: '야사카 탑은 무료로 볼 수 있나요?',
          body: '네. 거리에서 외관을 보는 것은 completely 무료이며 24시간 가능합니다(문이나 매표소가 없습니다). 티켓이 필요한 것은 탑의 2층 내부뿐입니다.',
        },
        {
          heading: '입장료와 결제 방법',
          items: [
            '성인: 1인 500엔.',
            '현금만(신용카드·IC카드 Suica·ICOCA는 입구에서 사용 불가).',
            '내부 개방일의 입구에서 티켓 판매.',
            '어린이 별도 요금은 공지 없음. 현장 안내문 따르기.',
          ],
        },
        {
          heading: '개방 시간과 개방 요일',
          body: '내부는 보통 토요일·일요일 10:00–15:00에 열립니다. 개방 요일은 불규칙하며 날씨·법회·안전 등으로 바뀔 수 있으니, 당일 입구 게시물을 꼭 확인하세요.',
          items: [
            '내부 기준 시간: 10:00–15:00(토·일만).',
            '사전 예약·온라인 구매 없음. 티켓은 현장만.',
            '예고 없이 닫힐 수 있음. 내부 관람은 '보너스'로 즐기기.',
          ],
          note: '주말에도 내부 개방은 보장되지 않습니다. 주요 동선은 무료 외관 촬영과 히가시야마 산책으로 짜세요.',
        },
        {
          heading: '온라인 예약이 가능한가요?',
          body: '아니요. 사전 예약이나 온라인 티켓은 없습니다. 내부가 열린 날 입구에서 선착순 판매하므로 성수기엔 이른 시간에 방문하세요.',
        },
        {
          heading: '가기 전 팁',
          items: [
            '내부 티켓용 일본 엔화 현금을 준비하세요.',
            '내부 목재 계단이 가파르고 좁으니 미끄럼 방지 신발 권장.',
            '외관 촬영은 새벽이나 라이트업 후가 가장 한산합니다.',
          ],
        },
      ],
      faqTitle: '입장료·시간 FAQ',
      faq: [
        {
          q: '야사카 탑 티켓은 얼마인가요?',
          a: '내부 관람은 성인 500엔이며, 개방일 입구에서 현금만 결제합니다.',
        },
        {
          q: '야사카 탑 개방 시간은?',
          a: '내부는 보통 토·일 10:00–15:00에 엽니다. 개방 요일은 불규칙하니 현장 게시물을 확인하세요.',
        },
        {
          q: '야사카 탑은 무료로 보이나요?',
          a: '네. 주변 거리에서 외관은 언제든 무료입니다. 유료인 것은 내부(2층)뿐입니다.',
        },
        {
          q: '야사카 탑 티켓을 온라인으로 살 수 있나요?',
          a: '아니요. 온라인 예약은 없으며, 내부 개방일 입구에서 선착순만 가능합니다.',
        },
        {
          q: '왜 주말에도 닫혀 있을 수 있나요?',
          a: '날씨·법회·안전 등으로 개방이 바뀔 수 있기 때문입니다. 내부 관람은 보장되지 않으니 무료 외관 감상 위주로 계획하세요.',
        },
      ],
      updatedLabel: '최종 업데이트',
    },
  },

  'best-photo-spots': {
    en: {
      title: 'Best Photo Spots for Yasaka Pagoda (Ninenzaka Guide)',
      description:
        'Where to photograph the Yasaka Pagoda in Kyoto: the classic front view, the Ninenzaka/Sannenzaka frame, the blue-hour illumination and the overlook from Kiyomizu-dera.',
      intro:
        'As Kyoto’s most recognisable old pagoda, a few structured viewpoints and timings will greatly improve your photos. Below are the four most reliable compositions and the etiquette that keeps the lanes open for everyone.',
      sections: [
        {
          heading: '1 · Classic front view',
          body: 'At the intersection directly in front of the tower, shooting level, is the safest angle to recreate the “symbol of Kyoto”. With blue sky or the Higashiyama hills as a backdrop you get a clean, symmetric full shot.',
          items: [
            'Place the pagoda at centre, using the open lane as negative space.',
            'Crouch low and shoot upward to lengthen the figure and emphasise the five eaves.',
          ],
        },
        {
          heading: '2 · Ninenzaka & Sannenzaka frame',
          body: 'Walking up Ninenzaka/Sannenzaka and looking back, you capture the pagoda with the stone lane and traditional machiya houses. Vermilion tower, grey tiles and wooden lattices make a rich Kyoto flavour.',
          items: [
            'Use the pagoda as the distant subject, with the foreground lane and lanterns leading the eye.',
            'A short telephoto compresses the tower and old street visually.',
          ],
        },
        {
          heading: '3 · Dusk & evening illumination',
          body: 'After sunset the tower is lit and echoes the Ninenzaka lanterns. The blue-hour balance of sky and lights is the most atmospheric window.',
          items: [
            'Shoot in the blue hour (about 20–30 minutes after sunset).',
            'A small tripod with a long exposure captures the wet sheen of the stone path.',
          ],
        },
        {
          heading: '4 · Overlook from Kiyomizu-dera',
          body: 'From Kiyomizu-dera or nearby heights looking back over Higashiyama, the Yasaka Pagoda fits into a broader city skyline — great for a closing panorama.',
          items: [
            'Use distant hills and Kyoto roof tiles as a base to highlight the tower’s height.',
            'Morning mist gives the best layers; a small aperture captures the full panorama.',
          ],
        },
        {
          heading: 'Best time & photography etiquette',
          body: 'Mornings (before 9) and the blue hour have the fewest people. Higashiyama’s narrow lanes are residential — keep voices low, do not step into private alleys for a shot, and never block the lane for long.',
          note: 'Some side alleys around the pagoda are private with camera notices. Shoot only from public roads.',
        },
      ],
      faqTitle: 'Photo Spots FAQ',
      faq: [
        {
          q: 'Where is the best place to photograph the Yasaka Pagoda?',
          a: 'The intersection in front of the tower gives the classic full view; looking back up Ninenzaka/Sannenzaka frames it with the stone lane. Both are public and free.',
        },
        {
          q: 'What is the best time to photograph the pagoda?',
          a: 'Early morning (before 9) for clean front-on shots, and the blue hour after sunset for the illuminated tower with the lane lanterns.',
        },
        {
          q: 'Can I take photos at night?',
          a: 'Yes. The pagoda is lit after dark and, with the Ninenzaka lanterns, makes one of Kyoto’s most atmospheric night views. Use a tripod where space allows.',
        },
        {
          q: 'Are drones allowed?',
          a: 'No. Drones are prohibited over Kyoto’s historic townscape and temples. Shoot from the ground or viewpoints only.',
        },
      ],
      updatedLabel: 'Information last updated',
    },
    ja: {
      title: '八坂の塔のおすすめ撮影スポット（二寧坂ガイド）',
      description:
        '京都・八坂の塔の撮影ポイント：定番の正面、二寧坂・三寧坂の枠取き、藍色の時間のライトアップ、清水寺からの遠景。',
      intro:
        '京都でもっとも有名な古い塔だけに、いくつかの決まった構図と時間帯を押さえるだけで写真はぐっと良くなります。もっとも確実な4つの構図と、路地をみんなのために開いておくマナーをご紹介します。',
      sections: [
        {
          heading: '1 · 定番の正面',
          body: '塔の真向かいの交差点で水平に構えるのが、「京都のシンボル」を一番安心して撮れるアングルです。青空や東山を背景に、すっきり対称的な全景が得られます。',
          items: [
            '塔を中央に置き、開けた路地を余白に。',
            '少しかがんで下から撮ると姿が引き締まり、五重の軒が際立ちます。',
          ],
        },
        {
          heading: '2 · 二寧坂・三寧坂の枠取き',
          body: '二寧坂・三寧坂を上りながら振り返ると、塔と石畳・町家が一緒に写ります。朱の塔に灰の瓦、木の格子が京都らしい味わいを生みます。',
          items: [
            '塔を遠景に、手前の石畳と提灯で視線を誘導。',
            '短めの望遠で塔と旧街道を視覚的に近づけます。',
          ],
        },
        {
          heading: '3 · 夕暮れとライトアップ',
          body: '日没後、塔は灯り、二寧坂の提灯と呼応します。空と灯りのバランスがとれる藍色の時間がもっとも情緒ある窓口です。',
          items: [
            '藍色の時間（日没後約20–30分）に撮影。',
            '小型三脚の長秒撮影で石畳の濡れた艶を。',
          ],
        },
        {
          heading: '4 · 清水寺からの遠景',
          body: '清水寺やその近くの高所から東山を振り返ると、八坂の塔が広い市街地のシルエットに収まり、締めのパノラマに最適です。',
          items: [
            '遠景の山並みと京都の瓦を台にして塔の高さを際立たせる。',
            '朝霧がいちばん層が厚い。絞りを小さくして全景を。',
          ],
        },
        {
          heading: 'ベストタイムと撮影マナー',
          body: '朝（9時前）と藍色の時間がもっとも空いています。東山の狭い路地は住宅地。声をひそめ、撮影のための私道への立ち入りはせず、長時間路地を占領しないでください。',
          note: '塔周辺の脇道にはカメラのある私道も。撮影は公道からのみ。',
        },
      ],
      faqTitle: '撮影スポットのよくある質問',
      faq: [
        {
          q: '八坂の塔の一番良い撮影場所は？',
          a: '塔の正面の交差点が定番の全景、二寧坂・三寧坂を振り返ると石畳と一緒の構図になります。どちらも公道で無料です。',
        },
        {
          q: '塔を撮る一番良い時間は？',
          a: '清々しい正面 shot は朝（9時前）、ライトアップと提灯は日没後の藍色の時間がおすすめです。',
        },
        {
          q: '夜も撮影できますか？',
          a: 'はい。暗くなると塔が灯り、二寧坂の提灯とともに京都屈指の夜景に。場所が許せば三脚を。',
        },
        {
          q: 'ドローンはOKですか？',
          a: 'いいえ。京都の史跡・寺院上空でのドローンは禁止です。地上や展望点からのみ撮影を。',
        },
      ],
      updatedLabel: '最終更新',
    },
    zh: {
      title: '八坂之塔最佳拍照点（二年坂指南）',
      description:
        '京都八坂之塔的拍摄机位：经典正面、二年坂·三年坂取景框、蓝调时刻点灯、清水寺远眺。',
      intro:
        '作为京都最具辨识度的古塔，掌握几个固定构图与时段就能大幅提升出片率。下面是最可靠的四种构图，以及让巷弄对所有人保持通畅的拍摄礼仪。',
      sections: [
        {
          heading: '1 · 经典正面',
          body: '在塔正前方的路口平视拍摄，是重现「京都象征」最稳妥的角度。以蓝天或东山为背景，可得干净、对称的全景。',
          items: ['将塔置于中央，以开阔巷弄作留白。', '稍微蹲低由下往上拍，拉长塔身、突出五重檐。'],
        },
        {
          heading: '2 · 二年坂·三年坂取景框',
          body: '走上二年坂·三年坂再回头望，塔与石板路、町家老屋同框。朱红塔身、灰瓦与木格栅充满京都风味。',
          items: ['以塔为远景，用前景石路与灯笼引导视线。', '短焦段望远可将塔与老街在视觉上拉近。'],
        },
        {
          heading: '3 · 黄昏与点灯',
          body: '日落后塔身亮灯，与二年坂灯笼呼应。天空与灯光平衡的蓝调时刻最具氛围。',
          items: ['于蓝调时刻（日落后约 20–30 分钟）拍摄。', '小型三脚架长曝光可捕捉石板路的湿润光泽。'],
        },
        {
          heading: '4 · 清水寺远眺',
          body: '从清水寺或附近高处回望东山，八坂之塔融入更广阔的城市天际线，适合作为收尾全景。',
          items: ['以远山与京都瓦顶为底，衬托塔之高。', '晨雾层次最佳；小光圈收下全景。'],
        },
        {
          heading: '最佳时段与拍摄礼仪',
          body: '清晨（9 点前）与蓝调时刻人最少。东山窄巷是住宅区——请放低音量、勿为取景踏入私巷、勿长时间占用通道。',
          note: '塔周边部分支巷为私有并有监控告示，请仅在公共道路拍摄。',
        },
      ],
      faqTitle: '拍照点常见问题',
      faq: [
        {
          q: '八坂之塔哪里最好拍？',
          a: '塔前路口可得经典全景；回头望二年坂·三年坂则能与石板路同框。两者皆公共且免费。',
        },
        {
          q: '什么时间拍塔最好？',
          a: '清晨（9 点前）可得干净的正面照；日落后蓝调时刻则点灯与灯笼最富氛围。',
        },
        {
          q: '晚上可以拍照吗？',
          a: '可以。入夜后塔身亮灯，与二年坂灯笼同构京都最具氛围的夜景之一；空间允许可用三脚架。',
        },
        {
          q: '可以用无人机吗？',
          a: '不可以。京都史迹与寺院上空禁用无人机，请从地面或观景点击拍摄。',
        },
      ],
      updatedLabel: '信息更新于',
    },
    ko: {
      title: '야사카 탑 베스트 촬영 스팟(이이네자카 가이드)',
      description:
        '교토 야사카 탑 촬영 포인트: 정면 정통 구도, 이이네자카·산네자카 프레임, 블루아워 라이트업, 기요미즈데라 원경.',
      intro:
        '교토에서 가장 알아보기 쉬운 오래된 탑인 만큼, 몇 가지 정해진 구도와 시간대만 잡아도 사진이 크게 좋아집니다. 가장 확실한 4가지 구도와 모두를 위한 골목 매너를 소개합니다.',
      sections: [
        {
          heading: '1 · 정면 정통 구도',
          body: '탑 정면 교차로에서 수평으로 찍는 것이 ‘교토의 상징’을 가장 안심하고 담을 수 있는 앵글입니다. 파란 하늘이나 히가시야마를 배경으로 깔끔하고 대칭적인 전경을 얻습니다.',
          items: ['탑을 중앙에 두고 트인 골목을 여백으로.', '살짝 앉아 아래에서 찍으면 형체가 좋아지고 5중 처마가 돋보입니다.'],
        },
        {
          heading: '2 · 이이네자카·산네자카 프레임',
          body: '이이네자카·산네자카를 오르며 돌아보면 탑과 돌길·마치야 집이 함께 담깁니다. 주홍 탑에 회색 기와, 나무 격자가 교토다운 맛을 냅니다.',
          items: ['탑을 원경으로, 앞 돌길과 제등으로 시선 유도.', '짧은 망원으로 탑과 옛 거리를 시각적으로 가깝게.'],
        },
        {
          heading: '3 · 해질녘과 라이트업',
          body: '일몰 후 탑이 켜지면 이이네자카 제등과 호응합니다. 하늘과 불빛의 균형이 잡히는 블루아워가 가장 분위기 있는 창입니다.',
          items: ['블루아워(일몰 후 약 20–30분)에 촬영.', '소형 삼각대 장노출로 돌길의 젖은 광택을.'],
        },
        {
          heading: '4 · 기요미즈데라 원경',
          body: '기요미즈데라나 근처 고지에서 히가시야마를 돌아보면 야사카 탑이 넓은 시가지 실루엣에 들어가 마무리 파노라마에 좋습니다.',
          items: ['원경 산줄기와 교토 기와를 바탕으로 탑의 높이 강조.', '아침 안개가 층이 가장 두껍습니다. 조리개 줄여서 전경을.'],
        },
        {
          heading: '베스트 시간과 촬영 매너',
          body: '아침(9시 전)과 블루아워가 가장 한산합니다. 히가시야마 좁은 골목은 주거지. 목소리를 낮추고, 촬영을 위한 사유지 진입은 삼가며, 골목을 오래 점유하지 마세요.',
          note: '탑 주변 골목엔 카메라 있는 사유지도 있음. 촬영은 공공 도로에서만.',
        },
      ],
      faqTitle: '촬영 스팟 FAQ',
      faq: [
        {
          q: '야사카 탑을 가장 잘 찍는 곳은?',
          a: '탑 정면 교차로가 정통 전경, 이이네자카·산네자카를 돌아보면 돌길과 함께 구도가 됩니다. 모두 공공이고 무료입니다.',
        },
        {
          q: '탑을 찍기 가장 좋은 시간은?',
          a: '청아한 정면 샷은 아침(9시 전), 라이트업과 제등은 일몰 후 블루아워가 좋습니다.',
        },
        {
          q: '밤에도 촬영할 수 있나요?',
          a: '네. 어두워지면 탑이 켜지고 이이네자카 제등과 함께 교토 최고의 야경 중 하나입니다. 여유 있으면 삼각대를.',
        },
        {
          q: '드론 사용이 가능한가요?',
          a: '아니요. 교토 사적·사찰 상공 드론은 금지입니다. 지상이나 전망점에서만 촬영하세요.',
        },
      ],
      updatedLabel: '최종 업데이트',
    },
  },

  'how-to-get-there': {
    en: {
      title: 'How to Get to Yasaka Pagoda from Kyoto Station',
      description:
        'Reach the Yasaka Pagoda (Hōkan-ji Temple) from Kyoto Station by city bus 100/206 to Kiyomizu-michi or Gojō-zaka, then a 10-minute walk uphill.',
      intro:
        'Kyoto’s main gateway is JR Kyoto Station, where the Shinkansen and private lines converge. From there the Yasaka Pagoda lies in the Higashiyama–Kiyomizu area; the easiest approach is a city bus to “Kiyomizu-michi” or “Gojō-zaka”, then a short walk uphill.',
      sections: [
        {
          heading: 'By city bus (recommended)',
          body: 'From Kyoto Station take city bus 100 or 206 toward Kiyomizu-dera. Alight at “Kiyomizu-michi” or “Gojō-zaka” (about 15–20 minutes, ~¥230). Walk uphill about 10 minutes to the pagoda.',
          items: [
            'Buses run frequently; an ICOCA / Suica IC card lets you board without queuing.',
            'Avoid the 10:00–16:00 peak if you can — Higashiyama gets congested.',
          ],
        },
        {
          heading: 'By train / Keihan',
          body: 'Keihan Main Line to “Kiyomizu-Gojō” (about 20 minutes’ walk uphill) or “Gion-Shijō”, then bus or walk. From Osaka, the JR Kyoto Line to Kyoto Station takes about 30 minutes.',
          items: ['From Tokyo, the Tōkaidō Shinkansen (Nozomi) reaches Kyoto in about 2 h 15 min.'],
        },
        {
          heading: 'On foot from Gion / Yasaka Shrine',
          body: 'If you are already in Higashiyama, walking is most natural: about 10 minutes from Yasaka Shrine through Maruyama Park, or 10–15 minutes from Gion’s Hanamikoji.',
          items: ['Stone paths are uneven — wear comfortable shoes.'],
        },
        {
          heading: 'By car & parking',
          body: 'The pagoda has no dedicated lot. Use paid lots around Kiyomizu and Gojō-zaka (a few minutes’ walk), which fill fast in peak season. Higashiyama streets are narrow and mostly one-way.',
          items: [
            'Set navigation to “Yasaka Pagoda” or the address 388 Kiyomizu-Yasakakamimachi, Higashiyama-ku, Kyoto 605-0862.',
            'Public transit is strongly recommended over driving.',
          ],
          note: 'Taxi from Kyoto Station to the pagoda is about 15 minutes (~¥1,500–2,000).',
        },
      ],
      faqTitle: 'Access FAQ',
      faq: [
        {
          q: 'How do I get to the Yasaka Pagoda from Kyoto Station?',
          a: 'Take city bus 100 or 206 to “Kiyomizu-michi” or “Gojō-zaka”, then walk uphill about 10 minutes. The pagoda sits between Kiyomizu-dera and Gion.',
        },
        {
          q: 'How long does it take?',
          a: 'About 30–45 minutes from Kyoto Station by bus plus walking, depending on traffic and crowds.',
        },
        {
          q: 'Is there parking near the pagoda?',
          a: 'No dedicated lot, but paid city and private lots operate around Kiyomizu and Gojō-zaka, a few minutes’ walk away. They fill fast in peak season.',
        },
        {
          q: 'Can I walk from Gion?',
          a: 'Yes — about 10–15 minutes from Gion’s Hanamikoji or 10 minutes from Yasaka Shrine through Maruyama Park.',
        },
      ],
      updatedLabel: 'Information last updated',
    },
    ja: {
      title: '京都駅から八坂の塔への行き方',
      description:
        '京都駅から市バス100・206で「清水道」または「五条坂」へ。そこから徒歩約10分上ります。',
      intro:
        '京都の表玄関はJR京都駅。新幹線や私鉄が集まるので、そこから東山・清水エリアの八坂の塔へは、市バスで「清水道」か「五条坂」へ出て、あとは坂を短く上るのが一番楽です。',
      sections: [
        {
          heading: '市バスで（おすすめ）',
          body: '京都駅から清水寺方面の市バス100または206に乗り、「清水道」か「五条坂」で下車（約15–20分、約230円）。そこから徒歩約10分で塔へ上ります。',
          items: [
            '本数が多く、ICカード（ICOCA・Suica）があれば並ばずに乗車可。',
            '可能なら10:00–16:00の混雑を避けて。東山は渋滞します。',
          ],
        },
        {
          heading: '電車・京阪で',
          body: '京阪本線「清水五条」(徒歩約20分上り) または「祇園四条」からバス・徒歩。大阪からはJR京都線で京都駅まで約30分。',
          items: ['東京からは東海道新幹線(のぞみ)で京都へ約2時間15分。'],
        },
        {
          heading: '祇園・八坂神社から徒歩で',
          body: 'すでに東山にいるなら徒歩が一番自然。八坂神社から円山公園経由で約10分、祇園の花見小路からは10–15分。',
          items: ['石畳は凸凹なので歩きやすい靴を。'],
        },
        {
          heading: '車・駐車場で',
          body: '塔に専用駐車場はありません。清水・五条坂周辺の有料駐車場（徒歩数分）を利用してください。混雑期はすぐ満車になります。東山の道は狭くほぼ一方通行。',
          items: [
            'カーナビは「八坂の塔」または住所「605-0862 京都市東山区清水八坂上町388」へ。',
            '車より公共交通のご利用を強くおすすめします。',
          ],
          note: '京都駅からタクシーで約15分（約1,500–2,000円）。',
        },
      ],
      faqTitle: 'アクセス FAQ',
      faq: [
        {
          q: '京都駅から八坂の塔へはどう行きますか？',
          a: '市バス100または206で「清水道」か「五条坂」へ出て、徒歩約10分上ります。塔は清水寺と祇園の間にあります。',
        },
        {
          q: '所要時間は？',
          a: '京都駅からバスと徒歩で渋滞・混雑により約30–45分です。',
        },
        {
          q: '塔の近くに駐車場はありますか？',
          a: '専用駐車場はありませんが、清水・五条坂周辺に有料駐車場（徒歩数分）があります。混雑期はすぐ満車に。',
        },
        {
          q: '祇園から歩けますか？',
          a: 'はい。祇園の花見小路から約10–15分、八坂神社から円山公園経由で約10分です。',
        },
      ],
      updatedLabel: '最終更新',
    },
    zh: {
      title: '从京都站前往八坂之塔怎么走',
      description:
        '从京都站乘市巴 100/206 至「清水道」或「五条坂」，再步行上坡约 10 分钟即达八坂之塔（法观寺）。',
      intro:
        '京都的主要门户是 JR 京都站，新干线与私铁在此汇集。由此前往位于东山·清水地区的八坂之塔，最轻松的方式是搭乘市巴到「清水道」或「五条坂」，再短程上坡。',
      sections: [
        {
          heading: '搭乘市巴（推荐）',
          body: '从京都站搭乘往清水寺方向的市巴 100 或 206，于「清水道」或「五条坂」下车（约 15–20 分钟，约 230 日元），再步行上坡约 10 分钟到塔。',
          items: ['班次频繁，有 ICOCA / Suica IC 卡可免排队上车。', '尽量避开 10:00–16:00 高峰，东山容易拥堵。'],
        },
        {
          heading: '铁路 / 京阪电铁',
          body: '京阪本线至「清水五条」（步行上坡约 20 分钟）或「祇园四条」，再转乘巴士或步行。从大阪搭 JR 京都线到京都站约 30 分钟。',
          items: ['从东京搭乘东海道新干线（希望号）约 2 小时 15 分抵达京都。'],
        },
        {
          heading: '从祇园·八坂神社步行',
          body: '若已在东山，步行最自然：从八坂神社经圆山公园约 10 分钟，或从祇园花见小路约 10–15 分钟。',
          items: ['石板路不平，请穿舒适鞋子。'],
        },
        {
          heading: '开车与停车',
          body: '塔无专属停车场。请使用清水、五条坂周边的收费停车场（步行数分钟），旺季很快满位。东山道路狭窄且多为单行。',
          items: [
            '导航设定「八坂之塔」或地址「605-0862 京都市东山区清水八坂上町388」。',
            '强烈建议公共交通优于开车。',
          ],
          note: '从京都站乘出租车约 15 分钟（约 1,500–2,000 日元）。',
        },
      ],
      faqTitle: '交通常见问题',
      faq: [
        {
          q: '从京都站怎么去八坂之塔？',
          a: '搭乘市巴 100 或 206 到「清水道」或「五条坂」，再步行上坡约 10 分钟。塔位于清水寺与祇园之间。',
        },
        {
          q: '需要多长时间？',
          a: '从京都站搭巴士加步行，视交通与拥挤程度约 30–45 分钟。',
        },
        {
          q: '塔附近有停车场吗？',
          a: '无专属停车场，但清水、五条坂周边有收费停车场（步行数分钟），旺季很快满位。',
        },
        {
          q: '可以从祇园步行前往吗？',
          a: '可以——从祇园花见小路约 10–15 分钟，或从八坂神社经圆山公园约 10 分钟。',
        },
      ],
      updatedLabel: '信息更新于',
    },
    ko: {
      title: '교토 역에서 야사카 탑 가는 방법',
      description:
        '교토 역에서 시내 버스 100/206으로 ‘기요미즈미치’ 또는 ‘고조자카’ 하차 후 언덕길 도보 약 10분.',
      intro:
        '교토의 관문은 JR 교토 역. 신칸센과 사철이 모이므로, 히가시야마·기요미즈 지구의 야사카 탑까지는 시내 버스로 ‘기요미즈미치’나 ‘고조자카’에 내린 뒤 짧게 언덕을 오르는 게 가장 편합니다.',
      sections: [
        {
          heading: '시내 버스로(추천)',
          body: '교토 역에서 기요미즈데라 방면 시내 버스 100 또는 206 탑승, ‘기요미즈미치’나 ‘고조자카’ 하차(약 15–20분, 약 230엔). 거기서 도보 약 10분 언덕길로 탑 도착.',
          items: [
            '배차가 잦고 IC카드(ICOCA·Suica) 있으면 줄 안 서고 탑승.',
            '가능하면 10:00–16:00 혼잡 피하기. 히가시야마는 막힙니다.',
          ],
        },
        {
          heading: '전철·게이한으로',
          body: '게이한 본선 ‘기요미즈고조’(도보 약 20분 언덕) 또는 ‘기온시조’에서 버스·도보. 오사카에선 JR 교토 선으로 교토 역까지 약 30분.',
          items: ['도쿄에선 도카이도 신칸센(노조미)으로 교토 약 2시간 15분.'],
        },
        {
          heading: '기온·야사카 신사에서 도보',
          body: '이미 히가시야마에 있다면 도보가 가장 자연스럽습니다. 야사카 신사에서 마루야마 공원 경유 약 10분, 기온 하나미코지에서 10–15분.',
          items: ['돌길은 울퉁불퉁하니 편한 신발을.'],
        },
        {
          heading: '차·주차장 이용',
          body: '탑에 전용 주차장은 없습니다. 기요미즈·고조자카 주변 유료 주차장(도보 수분) 이용. 성수기엔 금방 만차. 히가시야마 길은 좁고 대부분 일방통행.',
          items: [
            '내비는 ‘야사카 탑’ 또는 주소 ‘605-0862 교토시 히가시야마구 기요미즈 야사카카미마치 388’로.',
            '차보다 대중교통 이용을 강력 권장.',
          ],
          note: '교토 역에서 택시 약 15분(약 1,500–2,000엔).',
        },
      ],
      faqTitle: '교통 FAQ',
      faq: [
        {
          q: '교토 역에서 야사카 탑은 어떻게 가나요?',
          a: '시내 버스 100 또는 206으로 ‘기요미즈미치’나 ‘고조자카’에 내린 뒤 도보 약 10분 언덕길. 탑은 기요미즈데라와 기온 사이에 있습니다.',
        },
        {
          q: '얼마나 걸리나요?',
          a: '교토 역에서 버스와 도보로 교통·혼잡에 따라 약 30–45분입니다.',
        },
        {
          q: '탑 근처 주차장이 있나요?',
          a: '전용 주차장은 없으나 기요미즈·고조자카 주변 유료 주차장(도보 수분)이 있습니다. 성수기엔 금방 만차.',
        },
        {
          q: '기온에서 걸어갈 수 있나요?',
          a: '네. 기온 하나미코지에서 약 10–15분, 야사카 신사에서 마루야마 공원 경유 약 10분입니다.',
        },
      ],
      updatedLabel: '최종 업데이트',
    },
  },

  'higashiyama-walking-route': {
    en: {
      title: 'Higashiyama Walking Route: Yasaka Pagoda, Ninenzaka & Gion',
      description:
        'A no-backtracking 3-hour Higashiyama walk linking Kiyomizu-dera, Ninenzaka, the Yasaka Pagoda, Yasaka Shrine and Gion.',
      intro:
        'The Yasaka Pagoda is a 5–15 minute stop on a larger Higashiyama walk. Put it mid-route so you spend your time on what matters most — temples, lanes and evening Gion.',
      sections: [
        {
          heading: 'The 3-hour route',
          body: 'A practical order that avoids backtracking:',
          items: [
            '[Start] Kyoto Station → city bus to Kiyomizu-michi / Gojō-zaka, then walk into Kiyomizu.',
            '[Stop 1] Kiyomizu-dera (~60–90 min), then down Kiyomizu-zaka.',
            '[Stop 2] Sannenzaka & Ninenzaka (~30–45 min) — stone lanes and small shops.',
            '[Stop 3] Yasaka Pagoda (Hōkan-ji) (~15–30 min) — photos at the intersection below the tower.',
            '[Stop 4] Yasaka Shrine or Kennin-ji (~45–60 min).',
            '[Finish] Hanamikoji, Gion, at late afternoon / dusk.',
          ],
        },
        {
          heading: 'Why mid-route?',
          body: 'The pagoda is free to view from the streets, so it pairs naturally with Kiyomizu-dera and Gion. Visiting it between the two avoids a separate trip and keeps the walk continuous.',
        },
        {
          heading: 'Timing tips',
          items: [
            'Arrive early in peak seasons to avoid midday jams.',
            'Mornings give softer light for both photos and sightseeing.',
            'Treat “empty street” photos as a bonus, not a must — crowds concentrate at dusk.',
          ],
          note: 'Timings are a reference. Peak crowds, weather and temporary restrictions can change walking speed significantly.',
        },
        {
          heading: 'Etiquette on the lanes',
          body: 'Higashiyama faces overtourism pressure. Do not step into private alleys for a shot, do not eat while walking on Ninenzaka/Sannenzaka, and carry your trash out — public bins are limited.',
        },
      ],
      faqTitle: 'Walking Route FAQ',
      faq: [
        {
          q: 'How long is the Higashiyama walk?',
          a: 'A relaxed version with Kiyomizu-dera, Ninenzaka, the Yasaka Pagoda, Yasaka Shrine and Gion takes about half a day; the core walk is around 3 hours.',
        },
        {
          q: 'Where does the Yasaka Pagoda fit?',
          a: 'Mid-route, between Kiyomizu-dera and Gion — about a 10–15 minute walk from either, so you do not need a separate trip.',
        },
        {
          q: 'Is the route stroller / wheelchair friendly?',
          a: 'Partly. Ninenzaka/Sannenzaka are stone slopes and steps; wheelchairs and strollers can pass but with effort. The bus stops and main junctions are relatively flat.',
        },
        {
          q: 'What should I not do on the lanes?',
          a: 'Do not enter private alleys for photos, do not eat while walking, and take your trash with you. Respect residents and the historic streetscape.',
        },
      ],
      updatedLabel: 'Information last updated',
    },
    ja: {
      title: '東山散策ルート：八坂の塔・二寧坂・祇園',
      description:
        '清水寺・二寧坂・八坂の塔・八坂神社・祇園をつなぐ、戻らない3時間の東山散策。',
      intro:
        '八坂の塔は東山散策のうち5–15分の立ち寄りです。ルートの途中に入れれば、大事な時間を寺院・路地・夕の祇園に使えます。',
      sections: [
        {
          heading: '3時間のルート',
          body: '引き返さない実用的な順番：',
          items: [
            '[出発] 京都駅→市バスで清水道/五条坂、その後清水へ徒歩。',
            '[1] 清水寺(約60–90分)、その後清水坂を下る。',
            '[2] 三寧坂・二寧坂(約30–45分) — 石畳と小店。',
            '[3] 八坂の塔(法観寺)(約15–30分) — 塔の下の交差点で撮影。',
            '[4] 八坂神社または建仁寺(約45–60分)。',
            '[終] 花見小路・祇園、夕方～薄暮に。',
          ],
        },
        {
          heading: 'なぜ途中なのか',
          body: '塔は通りから無料で見られるので、清水寺と祇園に自然に組み込めます。両者の間に入れれば別途の移動が不要で、散策が途切れません。',
        },
        {
          heading: '時間の目安',
          items: [
            '混雑期は午前中に到着し、日中の渋滞を避ける。',
            '朝の柔らかい光は写真も観光も好都合。',
            '「人がいない通り」の写真はおまけとし、薄暮に混むことを前提に。',
          ],
          note: '時間は目安。混雑・天候・規制で歩く速度は大きく変わります。',
        },
        {
          heading: '路地のマナー',
          body: '東山は過剰観光の圧力があります。撮影のための私道への立ち入りはせず、二寧坂・三寧坂での歩きながらの飲食は控え、ゴミは持ち帰りを。公衆ゴミ箱は限られています。',
        },
      ],
      faqTitle: '散策ルート FAQ',
      faq: [
        {
          q: '東山散策はどのくらい？',
          a: '清水寺・二寧坂・八坂の塔・八坂神社・祇園をゆったり回ると半日、核心の散策は約3時間です。',
        },
        {
          q: '八坂の塔はどこに入りますか？',
          a: 'ルートの途中、清水寺と祇園の間。どちらからも徒歩10–15分で、別途の移動は不要です。',
        },
        {
          q: 'ベビーカー・車いすでも大丈夫？',
          a: '一部可。二寧坂・三寧坂は石の坂と段差があり、車いす・ベビーカーは通れますが努力が必要。バス停や交差点は比較的平坦。',
        },
        {
          q: '路地でしてはいけないことは？',
          a: '撮影のための私道への立ち入り、歩きながらの飲食、ゴミの放置はしないで。住民と史跡の街並みを尊重を。',
        },
      ],
      updatedLabel: '最終更新',
    },
    zh: {
      title: '东山散步路线：八坂之塔、二年坂与祇园',
      description:
        '串联清水寺、二年坂、八坂之塔、八坂神社与祇园、不绕路的三小时东山散步。',
      intro:
        '八坂之塔只是东山散步中 5–15 分钟的一站。把它放在路线中段，把时间留给最重要的寺院、巷弄与傍晚的祇园。',
      sections: [
        {
          heading: '三小时路线',
          body: '避免走回头路的实用顺序：',
          items: [
            '[起点] 京都站→市巴至清水道/五条坂，再步行进入清水。',
            '[1] 清水寺(约60–90分)，随后走下清水坂。',
            '[2] 三年坂·二年坂(约30–45分) — 石板路与小店。',
            '[3] 八坂之塔(法观寺)(约15–30分) — 在塔下路口拍照。',
            '[4] 八坂神社或建仁寺(约45–60分)。',
            '[终点] 花见小路·祇园，于傍晚至薄暮。',
          ],
        },
        {
          heading: '为何放在中段',
          body: '塔可从街道免费观赏，自然与清水寺、祇园串连。置于两者中间可免去单独往返，让散步连贯不断。',
        },
        {
          heading: '时间提示',
          items: [
            '旺季请上午到达，避开中午拥堵。',
            '清晨光线柔和，拍照与观光皆宜。',
            '把「无人的街道」照当作额外惊喜，薄暮人群最密。',
          ],
          note: '时间为参考。拥挤、天气与临时管制会明显改变步行速度。',
        },
        {
          heading: '巷弄礼仪',
          body: '东山面临过度旅游压力。勿为取景踏入私巷、勿在二年坂·三年坂边走边吃、并自行带走垃圾——公共垃圾桶有限。',
        },
      ],
      faqTitle: '散步路线常见问题',
      faq: [
        {
          q: '东山散步要多久？',
          a: '悠闲走完清水寺、二年坂、八坂之塔、八坂神社与祇园约半天；核心散步约 3 小时。',
        },
        {
          q: '八坂之塔放在哪里？',
          a: '路线中段、清水寺与祇园之间——距两者皆步行 10–15 分钟，无需单独往返。',
        },
        {
          q: '婴儿车/轮椅友好吗？',
          a: '部分。二年坂·三年坂为石板坡与台阶，婴儿车/轮椅可通过但费力。巴士站与主要路口较平坦。',
        },
        {
          q: '巷弄里不应做什么？',
          a: '勿为拍照进入私巷、勿边走边吃、并带走垃圾。请尊重居民与历史街景。',
        },
      ],
      updatedLabel: '信息更新于',
    },
    ko: {
      title: '히가시야마 산책 루트: 야사카 탑·이이네자카·기온',
      description:
        '기요미즈데라·이이네자카·야사카 탑·야사카 신사·기온을 잇는, 되돌아오지 않는 3시간 히가시야마 산책.',
      intro:
        '야사카 탑은 히가시야마 산책 중 5–15분 정도의 들르기 코스입니다. 루트 중간에 두면 중요한 시간을 사찰·골목·저녁 기온에 쓸 수 있습니다.',
      sections: [
        {
          heading: '3시간 루트',
          body: '되돌아오지 않는 실용적 순서:',
          items: [
            '[출발] 교토 역→시내 버스로 기요미즈미치/고조자카, 이후 기요미즈 도보.',
            '[1] 기요미즈데라(약 60–90분), 이후 기요미즈자카 하행.',
            '[2] 산네자카·이이네자카(약 30–45분) — 돌길과 작은 가게.',
            '[3] 야사카 탑(법관사)(약 15–30분) — 탑 아래 교차로에서 촬영.',
            '[4] 야사카 신사 또는 건닌지(약 45–60분).',
            '[종료] 하나미코지·기온, 늦은 오후~해질녘.',
          ],
        },
        {
          heading: '왜 중간인가',
          body: '탑은 거리에서 무료로 보이므로 기요미즈데라와 기온에 자연스레 묶입니다. 둘 사이에 두면 별도 이동이 없고 산책이 끊기지 않습니다.',
        },
        {
          heading: '시간 팁',
          items: [
            '성수기엔 오전 도착으로 한낮 정체 피하기.',
            '아침 부드러운 빛은 사진과 관광 모두 좋음.',
            '‘빈 거리’ 사진은 보너스로, 해질녘엔 인파 집중을 전제로.',
          ],
          note: '시간은 참고치. 혼잡·날씨·규제로 도보 속도는 크게 달라집니다.',
        },
        {
          heading: '골목 매너',
          body: '히가시야마는 과잉관광 압박이 있습니다. 촬영을 위한 사유지 진입은 삼가고, 이이네자카·산네자카에서 걸으며 먹지 말며, 쓰레기는 가져가세요 — 공중 쓰레기통은 제한적입니다.',
        },
      ],
      faqTitle: '산책 루트 FAQ',
      faq: [
        {
          q: '히가시야마 산책은 얼마나 걸리나요?',
          a: '기요미즈데라·이이네자카·야사카 탑·야사카 신사·기온을 느긋히 돌면 반나절, 핵심 산책은 약 3시간입니다.',
        },
        {
          q: '야사카 탑은 어디에 들어가나요?',
          a: '루트 중간, 기요미즈데라와 기온 사이. 어느 쪽에서든 도보 10–15분으로 별도 이동 불필요.',
        },
        {
          q: '유모차·휠체어 가능한가요?',
          a: '일부 가능. 이이네자카·산네자카는 돌坂과 계단이라 유모차·휠체어는 통과 가능하나 힘듦. 버스 정류장과 주요 교차로는 비교적 평탄.',
        },
        {
          q: '골목에서 하지 말아야 할 것은?',
          a: '촬영을 위한 사유지 진입, 걸으며 먹기, 쓰레기 방치는 하지 마세요. 주민과 사적 거리를 존중하세요.',
        },
      ],
      updatedLabel: '최종 업데이트',
    },
  },
};
