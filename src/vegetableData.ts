interface filterMenu {
  name: string
  exceptions?: Array<string>
  images: Array<string>
  source: Array<string> | string
  thumbnail: number
  description: string
}

const filterData: Array<filterMenu> = [
  {
    name: '가지',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/640px-Solanum_melongena_24_08_2012_%281%29.JPG',
      'https://images.unsplash.com/photo-1615484477201-9f4953340fab',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Gaji-bokkeum.jpg/640px-Gaji-bokkeum.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '암 예방에 좋다.'
  },
  {
    name: '감자',
    images: [
      'https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg',
      'https://images.pexels.com/photos/6636764/pexels-photo-6636764.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Taste_of_Beijing%2C_Soho%2C_London_%284363975792%29.jpg/1599px-Taste_of_Beijing%2C_Soho%2C_London_%284363975792%29.jpg?20130128024536'
    ],
    source: ['펙셀스', '위키미디어 공용'],
    thumbnail: 0,
    description: '나트륨을 배출한다.'
  },
  {
    name: '강낭콩',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Phaseolus_vulgaris.jpg/640px-Phaseolus_vulgaris.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Reniform_kidney_bean_seeds.jpg/640px-Reniform_kidney_bean_seeds.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '면역력을 높여주며 성장에 도움을 준다.'
  },
  {
    name: '건파래',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Parae_%28Monostroma%29.jpg/640px-Parae_%28Monostroma%29.jpg',
      'https://i.ibb.co/FmRjwVr/IMG-7803.jpg',
      'https://i.ibb.co/ySFNWWy/IMG-7806.jpg'
    ],
    source: ['위키미디어 공용', '자체 촬영'],
    thumbnail: 1,
    description: '뼈와 폐 건강에 좋다.'
  },
  {
    name: '검은깨',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Sesame_Plant.jpg/640px-Sesame_Plant.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Black_sesame.jpg/640px-Black_sesame.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sesame_onigiri_closeup_Elijah.jpg/640px-Sesame_onigiri_closeup_Elijah.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '두뇌 발달에 도움을 준다.'
  },
  {
    name: '고구마',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3d/Ipomoea_batatasL_ja01.jpg?20050731115240',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Solanales_-_Ipomoea_batatas_-_1.jpg/640px-Solanales_-_Ipomoea_batatas_-_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Sweet_Potato_Sauteed_With_Honey.jpg/640px-Sweet_Potato_Sauteed_With_Honey.jpg',
      'https://images.unsplash.com/photo-1596097635121-14b63b7a0c23'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '식이섬유가 많아 변비 예방과 체중 감량에 좋다.'
  },
  {
    name: '고구마줄기',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ipomoea_batatas_tw.JPG/640px-Ipomoea_batatas_tw.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ipomoea_batatas_Margarita_1zz.jpg/640px-Ipomoea_batatas_Margarita_1zz.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Goguma-julgi-bokkeum.jpg/640px-Goguma-julgi-bokkeum.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '비타민이 많아 피부 미용에 좋고, 뼈를 튼튼하게 해준다.'
  },
  {
    name: '고사리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pteridium_aquilinum_%282%29.jpg/640px-Pteridium_aquilinum_%282%29.jpg',
      'https://i.ibb.co/YbGsx1n/image.jpg'
    ],
    source: ['위키미디어 공용', '자체 촬영'],
    thumbnail: 1,
    description: '고사리의 어린 순을 캐 먹는다. 피를 맑게 하고 열을 내리는 데 효과적이다.'
  },
  {
    name: '곤드레',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dried_gondre.jpg/640px-Dried_gondre.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gondre.jpg/640px-Gondre.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Gondrebap_%28gondre_rice%29_%28Cirsium_setidens%29_Korean_thistle.jpg/640px-Gondrebap_%28gondre_rice%29_%28Cirsium_setidens%29_Korean_thistle.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '혈액 순환을 돕고 피를 맑게 해준다.'
  },
  {
    name: '깍두기',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Japanese_radish_field.jpg/640px-Japanese_radish_field.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Korean_radish_%28mu%29.jpg/640px-Korean_radish_%28mu%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chonggakkimchi_%28chonggak_radish_kimchi%29.jpg/640px-Chonggakkimchi_%28chonggak_radish_kimchi%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kkakdugi_1.jpg/640px-Kkakdugi_1.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 3,
    description: '소화와 배변 활동을 도와준다.'
  },
  {
    name: '깻잎',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Perilla_frutescens%27_foliage.jpg/640px-Perilla_frutescens%27_foliage.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Kkaennip-kimchi_and_kkaennip-jangajji_2.jpg/640px-Kkaennip-kimchi_and_kkaennip-jangajji_2.jpg',
      'https://i.ibb.co/8KLTVnJ/198a43c76df140fdbf5801034b13f74a.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 1,
    description: '철분이 많아 뼈 발달과 암 예방에 좋다.'
  },
  {
    name: '깻잎순',
    images: [
      'https://i.ibb.co/2FrVsGh/image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kkaennip_deulgireum_bokkeum.jpg/640px-Kkaennip_deulgireum_bokkeum.jpg'
    ],
    source: ['자체 촬영', '위키미디어 공용'],
    thumbnail: 0,
    description: '빈혈과 암, 성인병 예방에 좋다.'
  },
  {
    name: '꽈리고추',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kkwari-gochu_2.jpg/640px-Kkwari-gochu_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kkwari-gochu-myeolchi-bokkeum.jpg/640px-Kkwari-gochu-myeolchi-bokkeum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Kkwarigochujangajji_%28pickled_kkwari_pepper%29.jpg/640px-Kkwarigochujangajji_%28pickled_kkwari_pepper%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kkwari-gochu-gamja-jorim.jpg/640px-Kkwari-gochu-gamja-jorim.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '고혈압과 골다공증 예방에 좋다.'
  },
  {
    name: '냉이',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Herderstasje_bladrozet_%28Capsella_bursa-pastoris%29.jpg/640px-Herderstasje_bladrozet_%28Capsella_bursa-pastoris%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Capsella_bursa-pastoris_15-p.bot-capse.bupa-48.jpg/640px-Capsella_bursa-pastoris_15-p.bot-capse.bupa-48.jpg',
      'https://i.ibb.co/V9xb9HB/IMG-8533.jpg'
    ],
    source: ['위키미디어 공용', '국원초등학교'],
    thumbnail: 0,
    description: '소화에 좋으며 몸의 기운을 돋는다.'
  },
  {
    name: '노각',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Korean_cucumber_1.jpg/640px-Korean_cucumber_1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Nogak_2.jpg/640px-Nogak_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Halved_nogak.jpg/640px-Halved_nogak.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Nogak-bokkeum.jpg/640px-Nogak-bokkeum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nogak-muchim.jpg/640px-Nogak-muchim.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '칼륨이 풍부해 몸 속 노폐물을 배출한다.'
  },
  {
    name: '느타리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/20210719_Pleurotus_ostreatus_001-016.jpg/640px-20210719_Pleurotus_ostreatus_001-016.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neutari_%28oyster_mushroom%29.jpg/640px-Neutari_%28oyster_mushroom%29.jpg',
      'https://i.ibb.co/9bhxT1z/77d19fa8f4884460b1763455c61816eb.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 1,
    description: '열량이 낮아 체중 감량에 좋다.'
  },
  {
    name: '늙은호박',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/%D0%93%D0%B0%D1%80%D0%B1%D1%83%D0%B7_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BF%D0%BB%D1%96%D0%B4%D0%BD%D0%B8%D0%B9_%D0%B0%D0%B1%D0%BE_%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_Cucurbita_maxima_%D0%BA%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%B8%D0%B9_%D1%81%D0%BE%D1%80%D1%82_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9.jpg/640px-%D0%93%D0%B0%D1%80%D0%B1%D1%83%D0%B7_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BF%D0%BB%D1%96%D0%B4%D0%BD%D0%B8%D0%B9_%D0%B0%D0%B1%D0%BE_%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_Cucurbita_maxima_%D0%BA%D0%BE%D1%80%D0%BC%D0%BE%D0%B2%D0%B8%D0%B9_%D1%81%D0%BE%D1%80%D1%82_%D0%9D%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/%D0%93%D0%B0%D1%80%D0%B1%D1%83%D0%B7_%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%BF%D0%BB%D1%96%D0%B4%D0%BD%D0%B8%D0%B9_%D0%B0%D0%B1%D0%BE_%D0%B2%D0%BE%D0%BB%D0%BE%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_Cucurbita_maxima_%D1%81%D0%BE%D1%80%D1%82_%D0%A1%D0%BB%D0%B0%D0%B2%D1%83%D1%82%D0%B0_-_%D0%BF%D0%BB%D1%96%D0%B4_%D1%83_%D1%80%D0%BE%D0%B7%D1%80%D1%96%D0%B7%D1%96_%D0%B7_%D0%BD%D0%B0%D1%81%D1%96%D0%BD%D0%B8%D0%BD%D0%BE%D1%8E.jpg/640px-thumbnail.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hobak-juk.jpg/640px-Hobak-juk.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '몸의 부기를 줄여주고 피부 미용에 좋다.'
  },
  {
    name: '단호박',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Pumpkin_with_stalk.jpg/640px-Pumpkin_with_stalk.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kabocha_coup%C3%A9.JPG/640px-Kabocha_coup%C3%A9.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Nimono_of_japanese_pumpkin_2014.jpg/640px-Nimono_of_japanese_pumpkin_2014.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Danhobak_salad_%28kabocha_squash_salad%29.jpg/640px-Danhobak_salad_%28kabocha_squash_salad%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Pumpkin_Pie.jpg/640px-Pumpkin_Pie.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '혈액 순환, 암 예방, 눈 건강, 변비 예방 등에 도움이 된다.'
  },
  {
    name: '대추',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Alb-Z._jujuba-fruit-8.jpg/640px-Alb-Z._jujuba-fruit-8.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Fruit_ripening_of_Ziziphus_jujuba.jpg/640px-Fruit_ripening_of_Ziziphus_jujuba.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Ziziphus_jujuba_MS_2461.JPG/640px-Ziziphus_jujuba_MS_2461.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Samgye-tang_2.jpg/640px-Samgye-tang_2.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '관절 건강에 좋다.'
  },
  {
    name: '대추방울토마토',
    images: [
      'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6',
      'https://images.unsplash.com/photo-1583250794760-9d41bf58442f'
    ],
    source: ['언스플래시'],
    thumbnail: 1,
    description:
      '같은 양을 먹었을 때, 일반 토마토보다 껍질을 많이 먹게 되어 혈액 순환과 암 예방에 좋다.'
  },
  {
    name: '더덕',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Codonopsis_lanceolata1.jpg/640px-Codonopsis_lanceolata1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Deodeok.png/640px-Deodeok.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Deodeok_%28Codonopsis_lanceolata%29.jpg/640px-Deodeok_%28Codonopsis_lanceolata%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Deodeok_%28Codonopsis_lanceolata%29_gui.jpg/640px-Deodeok_%28Codonopsis_lanceolata%29_gui.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '피로 회복에 좋다.'
  },
  {
    name: '도라지',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ballonblume_platycodon_grandiflorus_%282013-07-12_Sp%29.jpg/640px-Ballonblume_platycodon_grandiflorus_%282013-07-12_Sp%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Root_of_platycodon_grandiflorus.jpg/640px-Root_of_platycodon_grandiflorus.jpg',
      'https://i.ibb.co/hL4WLhj/IMG-84-AB61020-C04-1.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 1,
    description: '면역력을 높여준다.'
  },
  {
    name: '도토리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Holly_Oak_%28Quercus_ilex%29_acorns%2C_April%2C_Sydney_Royal_Botanic_Gardens%2C_Australia_%2816498239613%29.jpg/640px-Holly_Oak_%28Quercus_ilex%29_acorns%2C_April%2C_Sydney_Royal_Botanic_Gardens%2C_Australia_%2816498239613%29.jpg',
      'https://images.unsplash.com/photo-1604342602982-de9ff6884c4c',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Korean_acorn_jelly-Dotorimuk-02.jpg/640px-Korean_acorn_jelly-Dotorimuk-02.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%EB%8F%84%ED%86%A0%EB%A6%AC_%EB%AC%B5%EB%B0%A5_flick.jpg/640px-%EB%8F%84%ED%86%A0%EB%A6%AC_%EB%AC%B5%EB%B0%A5_flick.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '중금속 배출에 좋으며 따뜻한 성질을 지녀 위장에 좋다.'
  },
  {
    name: '두부',
    images: [
      'https://vegan.rocks/blog/soybeans/feature_huda2adae895bb956b3ffe7ee6903e93c7_211659_1200x1200_fill_q100_box_smart1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sun-dubu_5.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Making_tofu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Japanese_tofu_001.jpg/640px-Japanese_tofu_001.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/8c/Dubu-jorim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mapo_Tofu_%288840681150%29.jpg/640px-Mapo_Tofu_%288840681150%29.jpg'
    ],
    source: ['vegan.rocks', '위키미디어 공용'],
    thumbnail: 3,
    description: '단백질이 많아 면역력을 높여준다.'
  },
  {
    name: '로메인',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Lettuce_Mini_Heads_%22Bambi%22_%287331116918%29.jpg/640px-Lettuce_Mini_Heads_%22Bambi%22_%287331116918%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romaine_lettuce.jpg/640px-Romaine_lettuce.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Salad_asian.jpg/640px-Salad_asian.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Caesar_Salad_%26_Grilled_Chicken_%2830548011308%29.jpg/640px-Caesar_Salad_%26_Grilled_Chicken_%2830548011308%29.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '눈 건강에 좋고 잇몸을 튼튼하게 만들어준다.'
  },
  {
    name: '마늘',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Rust_on_garlic_plants2.jpg/640px-Rust_on_garlic_plants2.jpg',
      'https://images.unsplash.com/photo-1559454473-27bc85c67728',
      'https://upload.wikimedia.org/wikipedia/ko/thumb/e/e0/%EA%B9%90%EB%A7%88%EB%8A%98.JPG/1600px-%EA%B9%90%EB%A7%88%EB%8A%98.JPG?20130808141201',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Maneul-jangajji.jpg/640px-Maneul-jangajji.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 2,
    description: '근육 통증을 감소시키고 면역력 강화와 피로 해소에 도움을 준다.'
  },
  {
    name: '마늘쫑',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Scapes_%28583373543%29.jpg/640px-Scapes_%28583373543%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/CSA-Garlic-Scapes.jpg/640px-CSA-Garlic-Scapes.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Maneul-jong-bokkeum.jpg/640px-Maneul-jong-bokkeum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Maneuljjongjangajji_%28pickled_garlic_scapes%29.jpg/640px-Maneuljjongjangajji_%28pickled_garlic_scapes%29.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '혈액 순환에 도움을 준다.'
  },
  {
    name: '머위',
    images: [
      'https://i.ibb.co/wzTwh8S/albus-g066f7f254-1920.jpg',
      'https://i.ibb.co/4YCSh8k/butterbur-g438ddd975-1920.jpg',
      'https://i.ibb.co/9YtBsmz/IMG-0965.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 1,
    description: '눈 건강에 좋다.'
  },
  {
    name: '메밀',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Japanese_Buckwheat_Flower.JPG/640px-Japanese_Buckwheat_Flower.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Fagopyrum_esculentum_nsh.jpg/640px-Fagopyrum_esculentum_nsh.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Korean_buckwheat_jelly-Memilmuk_muchim-01.jpg/640px-Korean_buckwheat_jelly-Memilmuk_muchim-01.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '눈 건강에 좋고 당뇨를 예방한다.'
  },
  {
    name: '명엽채',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pollachus_chalcogrammus.png/640px-Pollachus_chalcogrammus.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Korean_stirfried_dried_shredded_squid-Ojingeochae_bokkeum.jpg/640px-Korean_stirfried_dried_shredded_squid-Ojingeochae_bokkeum.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '눈 건강에 좋다.'
  },
  {
    name: '무',
    exceptions: ['무침'],
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Japanese_radish_field.jpg/640px-Japanese_radish_field.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Korean_radish_%28mu%29.jpg/640px-Korean_radish_%28mu%29.jpg',
      'https://i.ibb.co/Yc7TTLs/image.jpg'
    ],
    source: ['위키미디어 공용', '국원초등학교'],
    thumbnail: 1,
    description: '소화와 배변 활동을 도와준다.'
  },
  {
    name: '무말랭이',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Japanese_radish_field.jpg/640px-Japanese_radish_field.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Korean_radish_%28mu%29.jpg/640px-Korean_radish_%28mu%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Mu-mallaengi.jpg/640px-Mu-mallaengi.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '감기 예방과 체중 감량에 좋다.'
  },
  {
    name: '무생채',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Japanese_radish_field.jpg/640px-Japanese_radish_field.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Korean_radish_%28mu%29.jpg/640px-Korean_radish_%28mu%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/생채.jpg/640px-생채.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '감기 예방에 좋다.'
  },
  {
    name: '미나리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Oenanthe_javanica.JPG/640px-Oenanthe_javanica.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Minari-muchim.jpg/640px-Minari-muchim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Minari-oi-muchim.jpg/640px-Minari-oi-muchim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Minari-buchimgae.jpg/640px-Minari-buchimgae.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '피를 깨끗하게 해주며 독소를 배출한다.'
  },
  {
    name: '미역',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/CSIRO_ScienceImage_905_Undaria_pinnatifida_Japanese_kelp.jpg/640px-CSIRO_ScienceImage_905_Undaria_pinnatifida_Japanese_kelp.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Boiled_wakame.jpg/640px-Boiled_wakame.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Miyeok-guk.jpg/640px-Miyeok-guk.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Oimiyeoknaengguk_%28cold_cucumber_wakame_soup%29.jpg/640px-Oimiyeoknaengguk_%28cold_cucumber_wakame_soup%29.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '변비 예방에 도움을 준다.'
  },
  {
    name: '미역줄기',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/CSIRO_ScienceImage_905_Undaria_pinnatifida_Japanese_kelp.jpg/640px-CSIRO_ScienceImage_905_Undaria_pinnatifida_Japanese_kelp.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Miyeok-julgi.jpg/640px-Miyeok-julgi.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Miyeokjulgibokkeum.jpg/640px-Miyeokjulgibokkeum.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '변비 예방에 도움을 준다.'
  },
  {
    name: '배추김치',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Napa_cabbages.png/640px-Napa_cabbages.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Korean_cuisine-Gimjang-Preparation_for_making_kimchi-01.jpg/640px-Korean_cuisine-Gimjang-Preparation_for_making_kimchi-01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/YOSHINOYA_PRODUCTS_IN_CHINA_%2811%29.jpg/640px-YOSHINOYA_PRODUCTS_IN_CHINA_%2811%29.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '비타민 C와 식이섬유가 풍부해 변비와 성인병을 예방해준다.'
  },
  {
    name: '백김치',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Napa_cabbages.png/640px-Napa_cabbages.png',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Triple_White_Kimchi_04.jpg/640px-Triple_White_Kimchi_04.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Baek-kimchi_2.jpg/640px-Baek-kimchi_2.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '일반 김치보다 양념이 적고 맵지 않으며 혈액을 맑게 해준다.'
  },
  {
    name: '봄동',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bomdong_cabbage.jpg/640px-Bomdong_cabbage.jpg',
      'https://i.ibb.co/Jd0v7hw/IMG-619-CAF70-AF76-1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mujeon_and_bomdong-jeon.jpg/640px-Mujeon_and_bomdong-jeon.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 0,
    description: '눈 건강에 좋다.'
  },
  {
    name: '부추',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Starr-080607-7150-Allium_tuberosum-habit-Midway_House_Sand_Island-Midway_Atoll_%2824797655632%29.jpg/640px-Starr-080607-7150-Allium_tuberosum-habit-Midway_House_Sand_Island-Midway_Atoll_%2824797655632%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Allium_tuberosum_Czosnek_bulwiasty_2021-09-18_01.jpg/640px-Allium_tuberosum_Czosnek_bulwiasty_2021-09-18_01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Buchu-muchim.jpg/640px-Buchu-muchim.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '소화에 좋다.'
  },
  {
    name: '브로콜리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Broccoli_plant.jpg/640px-Broccoli_plant.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Broccoli_and_cross_section_edit.jpg/640px-Broccoli_and_cross_section_edit.jpg',
      'https://images.unsplash.com/photo-1584868792839-bff69783216a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Broccoli_Salad_%284848520108%29.jpg/640px-Broccoli_Salad_%284848520108%29.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '면역력, 노화, 암 예방을 도와준다.'
  },
  {
    name: '비름',
    images: [
      'https://i.ibb.co/TkSPXMT/image.jpg',
      'https://i.ibb.co/Mf5Sk9B/image.jpg',
    ],
    source: ['자체 촬영', '국원초등학교'],
    thumbnail: 0,
    description: '칼슘이 많아 뼈 건강에 좋다.'
  },
  {
    name: '상추',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lactuca_sativa_2.jpg/640px-Lactuca_sativa_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lactuca_sativa_Bistro_Salad_Blend_0zz.jpg/640px-Lactuca_sativa_Bistro_Salad_Blend_0zz.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Korea-Gyeongju-Ssambap_leaves-01.jpg/640px-Korea-Gyeongju-Ssambap_leaves-01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Hapcheongun_County_45.jpg/640px-Hapcheongun_County_45.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '눈 건강에 좋으며 빈혈 예방에 효과적이다.'
  },
  {
    name: '새송이',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cultivo_de_Pleurotus_eryngii_de_tipo_coreano_en_Pradej%C3%B3n.jpg/640px-Cultivo_de_Pleurotus_eryngii_de_tipo_coreano_en_Pradej%C3%B3n.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Kr%C3%A4uter-Seitling_Pleurotus_eryngii.jpg/640px-Kr%C3%A4uter-Seitling_Pleurotus_eryngii.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pleurotus_eryngii_mushrooms_at_the_Edgar_Quinet_market.jpg/640px-Pleurotus_eryngii_mushrooms_at_the_Edgar_Quinet_market.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mmmm_-_cremini_and_king_oyster_mushrooms_with_tagliatelle.jpg/640px-Mmmm_-_cremini_and_king_oyster_mushrooms_with_tagliatelle.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2020-03-29_11.52.42_bulgogi_ingredients.jpg/640px-2020-03-29_11.52.42_bulgogi_ingredients.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Korean_barbecue_-_moksal%2C_samgyeopsal%2C_beoseot%2C_and_meljeot_on_a_gridiron.jpg/640px-Korean_barbecue_-_moksal%2C_samgyeopsal%2C_beoseot%2C_and_meljeot_on_a_gridiron.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '빈혈에 도움을 준다.'
  },
  {
    name: '생강',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Zingiber_officinale_001.JPG/640px-Zingiber_officinale_001.JPG',
      'https://images.unsplash.com/photo-1630623093145-f606591c2546'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '암 예방에 도움을 준다.'
  },
  {
    name: '숙주',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sa_green_gram.jpg/640px-Sa_green_gram.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sprouted_mung_beans.jpg/640px-Sprouted_mung_beans.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Mung_bean_sprouts.jpg/640px-Mung_bean_sprouts.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Korean_cuisine-Sukjunamul-01.jpg/640px-Korean_cuisine-Sukjunamul-01.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '숙주는 녹두의 어린 싹으로, 변비 예방과 피부 미용 등에 좋다.'
  },
  {
    name: '순두부',
    images: [
      'https://vegan.rocks/blog/soybeans/feature_huda2adae895bb956b3ffe7ee6903e93c7_211659_1200x1200_fill_q100_box_smart1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sun-dubu_5.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Making_tofu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sun-dubu_8.jpg/640px-Sun-dubu_8.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Korean_stew-Sundubu_jjigae-05.jpg/640px-Korean_stew-Sundubu_jjigae-05.jpg'
    ],
    source: ['vegan.rocks', '위키미디어 공용'],
    thumbnail: 3,
    description:
      '순두부는 눌러서 굳히지 않은 상태의 두부로, 연두부보다 무르다. 단백질이 많아 면역력을 높여준다. 또한 식감이 부드러워 소화에 좋으며, 변비를 예방해준다.'
  },
  {
    name: '시금치',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Spinacia_oleracea_Breedblad_scherpzaad.jpg/640px-Spinacia_oleracea_Breedblad_scherpzaad.jpg',
      'https://images.unsplash.com/photo-1576045057995-568f588f82fb',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sigeumchi-namul_2.jpg/640px-Sigeumchi-namul_2.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 1,
    description: '섬유질이 많아 소화에 좋고, 뇌 기능을 향상시킨다.'
  },
  {
    name: '시래기',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Korean_radish_%28mu%29.jpg/640px-Korean_radish_%28mu%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mucheong_siraegi_%28drying_Korean_radish_greens%29.jpg/640px-Mucheong_siraegi_%28drying_Korean_radish_greens%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Siraegi.jpg/640px-Siraegi.jpg',
      'https://i.ibb.co/HKWZMFJ/IMG-7844.jpg'
    ],
    source: ['위키미디어 공용', '자체 촬영'],
    thumbnail: 3,
    description: '빈혈에 도움을 준다.'
  },
  {
    name: '알감자',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Potatoes.jpg/640px-Potatoes.jpg',
      'https://i.ibb.co/bWGfZfR/88470a5875e74d68a1f648ea91ffe6ed.jpg'
    ],
    source: ['위키미디어 공용', '예성초등학교'],
    thumbnail: 0,
    description: '칼륨이 많아 나트륨을 배출해주고, 혈압 조절에 도움을 준다.'
  },
  {
    name: '양파',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Field_with_onions.jpg/640px-Field_with_onions.jpg',
      'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae',
      'https://i.ibb.co/rML4360/IMG-7802.jpg'
    ],
    source: ['위키미디어 공용', '언스플래시', '자체 촬영'],
    thumbnail: 1,
    description: '혈액 순환과 체중 감량에 좋다.'
  },
  {
    name: '연두부',
    images: [
      'https://vegan.rocks/blog/soybeans/feature_huda2adae895bb956b3ffe7ee6903e93c7_211659_1200x1200_fill_q100_box_smart1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sun-dubu_5.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/78/Making_tofu.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hiyayakko3.jpg/640px-Hiyayakko3.jpg'
    ],
    source: ['vegan.rocks', '위키미디어 공용'],
    thumbnail: 3,
    description:
      '연두부는 물을 어느 정도 남긴 채 틀에 넣고 굳힌 두부이다. 단백질이 많아 면역력을 높여준다. 또한 식감이 부드러워 소화에 좋으며, 변비를 예방해준다.'
  },
  {
    name: '오이',
    images: [
      'https://images.unsplash.com/photo-1518568403628-df55701ade9e',
      'https://images.unsplash.com/photo-1589621316382-008455b857cd',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Korean.food-Doraji.Oi.Muchim-01.jpg/640px-Korean.food-Doraji.Oi.Muchim-01.jpg'
    ],
    source: ['언스플래시', '위키미디어 공용'],
    thumbnail: 1,
    description: '부기를 빼준다.'
  },
  {
    name: '완두콩',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Doperwt_rijserwt_peulen_Pisum_sativum.jpg/640px-Doperwt_rijserwt_peulen_Pisum_sativum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/-2020-06-28_Garden_pea_%28Pisum_sativum%29%2C_Trimingham%2C_Norfolk_%282%29.JPG/640px--2020-06-28_Garden_pea_%28Pisum_sativum%29%2C_Trimingham%2C_Norfolk_%282%29.JPG',
      'https://images.unsplash.com/photo-1592394533824-9440e5d68530'
    ],
    source: ['위키미디어 공용', '언스플래시'],
    thumbnail: 2,
    description: '단백질이 많아 두뇌 활동에 좋다.'
  },
  {
    name: '우엉',
    images: [
      'https://i.ibb.co/wSMGJy4/image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/a/a4/Korean_cuisine-Ueong_jorim-01.jpg'
    ],
    source: ['자체 촬영', '위키미디어 공용'],
    thumbnail: 0,
    description: '골다공증을 예방한다.'
  },
  {
    name: '유부',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tahu_Goreng.jpg/640px-Tahu_Goreng.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Toyokawa_inari-zushi_%282010.11.07%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ed/Kitsune_Udon.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '유부는 두부를 기름에 튀긴 것으로, 단백질과 칼슘이 많아 성장에 좋다.'
  },
  {
    name: '유자',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Citrus_junos3.jpg/640px-Citrus_junos3.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Yuzu_oranges_%286459456959%29.jpg/640px-Yuzu_oranges_%286459456959%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Citrus_junos_fruits.jpg/640px-Citrus_junos_fruits.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Yujacha_%28yuja_tea%29.jpg/640px-Yujacha_%28yuja_tea%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Korean_yuja_tea.jpg/640px-Korean_yuja_tea.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '감기, 고혈압 예방과 치료에 좋다.'
  },
  {
    name: '진미채',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Iwami_squid_drying_DSC01868.jpg/640px-Iwami_squid_drying_DSC01868.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/ShreddedSquidinPackage.jpg/640px-ShreddedSquidinPackage.jpg',
      'https://i.ibb.co/9Trpwvn/IMG-7857.jpg',
      'https://i.ibb.co/1Jbrd7Q/IMG-7858.jpg'
    ],
    source: ['위키미디어 공용', '자체 촬영'],
    thumbnail: 2,
    description: '고혈압과 성인병을 예방해준다.'
  },
  {
    name: '참나물',
    images: [
      'https://i.ibb.co/F60c307/image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Chamnamul_muchim_%28Pimpinella_brachycarpa%29.jpg/640px-Chamnamul_muchim_%28Pimpinella_brachycarpa%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Chamnamul_muchim2_%28Pimpinella_brachycarpa%29.jpg/640px-Chamnamul_muchim2_%28Pimpinella_brachycarpa%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Chamnamul_pasta_%28Pimpinella_brachycarpa%29.jpg/640px-Chamnamul_pasta_%28Pimpinella_brachycarpa%29.jpg'
    ],
    source: ['자체 촬영', '위키미디어 공용'],
    thumbnail: 0,
    description: '열량이 낮아 체중 감량에 좋고, 변비 예방과 눈 건강에 효과적이다.'
  },
  {
    name: '천사채',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%E6%B6%88%E5%A4%B1%E4%B8%AD%E7%9A%84%E5%AE%9C%E8%98%AD%E5%91%B3-%E5%8F%A4%E6%97%A9%E5%91%B3%E7%9F%B3%E8%8A%B1%E5%87%8D-%E9%B3%B3%E5%B0%BE%E7%9F%B3%E8%8A%B1%E8%8F%9C.jpg/640px-%E6%B6%88%E5%A4%B1%E4%B8%AD%E7%9A%84%E5%AE%9C%E8%98%AD%E5%91%B3-%E5%8F%A4%E6%97%A9%E5%91%B3%E7%9F%B3%E8%8A%B1%E5%87%8D-%E9%B3%B3%E5%B0%BE%E7%9F%B3%E8%8A%B1%E8%8F%9C.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dasima.jpg/640px-Dasima.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cheonsachae.jpg/640px-Cheonsachae.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '변비 예방 및 체중 감량에 좋다.'
  },
  {
    name: '청경채',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Brassica_rapa_subsp._chinensis_-_Pak_choi_from_lalbagh_2291.JPG/640px-Brassica_rapa_subsp._chinensis_-_Pak_choi_from_lalbagh_2291.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Baby_Pak_Choi_%2802%29.JPG/640px-Baby_Pak_Choi_%2802%29.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Bok_choy_-_Massachusetts.jpg/640px-Bok_choy_-_Massachusetts.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bok_Choy_Delight_%282782704581%29.jpg/640px-Bok_Choy_Delight_%282782704581%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Szechuan_noodles_with_shrimp_and_bok_choy_%285232290249%29.jpg/640px-Szechuan_noodles_with_shrimp_and_bok_choy_%285232290249%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hamburger_on_sauteed_bok_choy%2C_with_Worcestershire_sauce_and_black_pepper_-_Massachusetts.jpg/640px-Hamburger_on_sauteed_bok_choy%2C_with_Worcestershire_sauce_and_black_pepper_-_Massachusetts.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '피부 미용과 뼈의 발달에 좋다.'
  },
  {
    name: '청포묵',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Sa_green_gram.jpg/640px-Sa_green_gram.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Korean.food-Cheongpomuk-01.jpg/640px-Korean.food-Cheongpomuk-01.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cheongpo-muk-muchim.jpg/640px-Cheongpo-muk-muchim.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '녹두를 갈아서 만든 묵으로, 어린이 성장과 체중 감량에 좋다.'
  },
  {
    name: '취나물',
    images: [
      'https://i.ibb.co/8YyyM3j/image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Dried_chamchwi.jpg/640px-Dried_chamchwi.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Chwinamul-bokkeum.jpg/640px-Chwinamul-bokkeum.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Korean_cuisine-Namul-06.jpg/640px-Korean_cuisine-Namul-06.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bom-namul-jangajji_2.jpg/640px-Bom-namul-jangajji_2.jpg'
    ],
    source: ['자체 촬영', '위키미디어 공용'],
    thumbnail: 0,
    description: '피를 맑게 해주며 다양한 혈관 질환을 에방한다.'
  },
  {
    name: '치커리',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cichorium_intybus_4.jpg/640px-Cichorium_intybus_4.jpg',
      'https://i.ibb.co/kxQzH0v/Kakao-Talk-Image-2023-02-12-16-48-51.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '변비 예방에 좋다.'
  },
  {
    name: '콩나물',
    images: [
      'https://vegan.rocks/blog/soybeans/feature_huda2adae895bb956b3ffe7ee6903e93c7_211659_1200x1200_fill_q100_box_smart1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/-2022-01-12_Bean_sprouts%2C_Trimingham%2C_Norfolk.JPG/640px--2022-01-12_Bean_sprouts%2C_Trimingham%2C_Norfolk.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Kongnamul-muchim.jpg/640px-Kongnamul-muchim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Kongnamul-haejang-guk.jpg/640px-Kongnamul-haejang-guk.jpg'
    ],
    source: ['vegan.rocks', '위키미디어 공용'],
    thumbnail: 1,
    description:
      '콩나물은 그늘에서 콩을 발아시켜 뿌리를 성장시킨 식품으로, 주로 대두를 쓴다. 면역력을 높이며 피부 건강과 변비에 좋다.'
  },
  {
    name: '토마토',
    images: [
      'https://images.unsplash.com/photo-1596199050105-6d5d32222916',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/640px-Tomato_je.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/640px-Bright_red_tomato_and_cross_section02.jpg',
      'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0'
    ],
    source: ['언스플래시', '위키미디어 공용'],
    thumbnail: 1,
    description:
      '피로 회복에 좋고, 비타민 B가 많아 지방 분해를 도우며 노화 방지와 암 예방에도 좋다.'
  },
  {
    name: '파래',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Parae_%28Monostroma%29.jpg/640px-Parae_%28Monostroma%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Parae-muchim.jpg/640px-Parae-muchim.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Parae-muchim_2.jpg/640px-Parae-muchim_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Parae-gamja-jeon_2.jpg/640px-Parae-gamja-jeon_2.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 0,
    description: '뼈와 폐 건강에 좋다.'
  },
  {
    name: '파프리카',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Pimiento_morr%C3%B3n_%28Capsicum_annuum%29.jpg/640px-Pimiento_morr%C3%B3n_%28Capsicum_annuum%29.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Red_capsicum_and_cross_section.jpg/640px-Red_capsicum_and_cross_section.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-086.jpg/640px-13-08-31-wien-redaktionstreffen-EuT-by-Bi-frie-086.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '혈관과 눈, 암 예방에 좋다.'
  },
  {
    name: '팽이버섯',
    images: [
      'https://i.ibb.co/7kYWbw3/image.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ssogari-maeun-tang.jpg/640px-Ssogari-maeun-tang.jpg'
    ],
    source: ['자체 촬영', '위키미디어 공용'],
    thumbnail: 0,
    description: '피로 회복에 좋다.'
  },
  {
    name: '피망',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bell_pepper_flower.jpg/640px-Bell_pepper_flower.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Green_Bell_Pepper.jpg/640px-Green_Bell_Pepper.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Chinjao_Rosu_%28%E9%9D%92%E6%A4%92%E8%82%89%E7%B5%B2%29_%286805698268%29.jpg/640px-Chinjao_Rosu_%28%E9%9D%92%E6%A4%92%E8%82%89%E7%B5%B2%29_%286805698268%29.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 1,
    description: '눈 건강에 좋다.'
  },
  {
    name: '호두',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Juglans_regia_2009_G2.jpg/640px-Juglans_regia_2009_G2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Juglans_regia_Echte_Walnussfrucht_2.jpg/640px-Juglans_regia_Echte_Walnussfrucht_2.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/640px-Walnuts_-_whole_and_open_with_halved_kernel.jpg'
    ],
    source: ['위키미디어 공용'],
    thumbnail: 2,
    description: '암 염증을 억제하고, 불포화지방산이 많아 뇌 기능을 향상시킨다.'
  }
]

function addExceptions(filterMenu: Array<filterMenu>) {
  filterMenu.forEach((menuToAddExceptions) => {
    filterMenu.forEach((menuToCompare) => {
      if (menuToAddExceptions === menuToCompare) return
      if (!menuToCompare.name.includes(menuToAddExceptions.name)) return
      menuToAddExceptions.exceptions = menuToAddExceptions.exceptions || []
      menuToAddExceptions.exceptions.push(menuToCompare.name)
    })
  })
  return filterMenu
}

export default addExceptions(filterData).sort((a, b) => {
  return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
})
